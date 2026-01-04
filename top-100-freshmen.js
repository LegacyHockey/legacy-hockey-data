1(function(){
2  'use strict';
3  
4  const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;
5  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
6  
7  const GITHUB_DATA_URL = 'https://raw.githubusercontent.com/LegacyHockey/legacy-hockey-data/main/stats-2025-26.json';
8  const SEASON = '948428';
9  const GRADE_FILTER = '9';
10  const TITLE = 'Top 100 Freshman Scoring Leaders';
11  
12  async function createTop100Table() {
13    console.log('Starting Top 100 Freshmen script...');
14    showLoadingIndicator('Loading player stats from GitHub...');
15    
16    try {
17      const response = await fetch(GITHUB_DATA_URL + '?t=' + Date.now());
18      if (!response.ok) {
19        throw new Error('Failed to load data from GitHub');
20      }
21      
22      const data = await response.json();
23      const statsData = data.players;
24      
25      console.log('Loaded ' + statsData.length + ' players from GitHub');
26      
27      const teamIds = new Set();
28      statsData.forEach(function(player) {
29        if (player.teamId) {
30          teamIds.add(player.teamId);
31        }
32      });
33      
34      console.log('Found ' + teamIds.size + ' teams');
35      showLoadingIndicator('Loading roster data...');
36      
37      const playerData = {};
38      const teamNames = {};
39      
40      for (const teamId of teamIds) {
41        try {
42          const cacheKey = 'team_' + teamId + '_' + SEASON;
43          let teamRoster = null;
44          let teamName = '';
45          
46          const cached = localStorage.getItem(cacheKey);
47          if (cached) {
48            const parsedCache = JSON.parse(cached);
49            if (Date.now() - parsedCache.timestamp < CACHE_DURATION) {
50              teamRoster = parsedCache.data;
51              teamName = parsedCache.teamName || '';
52            }
53          }
54          
55          if (!teamRoster) {
56            const result = await fetchTeamRoster(teamId, SEASON);
57            teamRoster = result.players;
58            teamName = result.teamName;
59            
60            try {
61              localStorage.setItem(cacheKey, JSON.stringify({
62                data: teamRoster,
63                teamName: teamName,
64                timestamp: Date.now()
65              }));
66            } catch (e) {
67              console.warn('Could not cache:', e.message);
68            }
69            
70            await new Promise(function(resolve) { setTimeout(resolve, isMobile ? 150 : 50); });
71          }
72          
73          Object.assign(playerData, teamRoster);
74          if (teamName) {
75            teamNames[teamId] = teamName;
76          }
77        } catch (error) {
78          console.error('Failed to fetch team ' + teamId + ':', error.message);
79        }
80      }
81      
82      console.log('Loaded ' + Object.keys(playerData).length + ' players from rosters');
83      
84      const players = [];
85      statsData.forEach(function(statPlayer) {
86        if (statPlayer.playerId) {
87          const rosterInfo = playerData[statPlayer.playerId];
88          
89          if (rosterInfo && rosterInfo.grade === GRADE_FILTER) {
90            const fullTeamName = teamNames[statPlayer.teamId] || statPlayer.teamName;
91            
92            players.push({
93              name: statPlayer.name,
94              team: fullTeamName,
95              position: rosterInfo.position,
96              grade: rosterInfo.grade,
97              gp: statPlayer.gp,
98              goals: statPlayer.goals,
99              assists: statPlayer.assists,
100              points: statPlayer.points
101            });
102          }
103        }
104      });
105      
106      players.sort(function(a, b) { return b.points - a.points; });
107      const top100 = players.slice(0, 100);
108      
109      console.log('Found ' + players.length + ' freshmen, showing top 100');
110      
111      hideLoadingIndicator();
112      displayTable(top100, data.lastUpdated);
113      
114    } catch (error) {
115      console.error('Error:', error);
116      hideLoadingIndicator();
117      showError('Failed to load data: ' + error.message);
118    }
119  }
120  
121  async function fetchTeamRoster(teamId, season) {
122    const url = 'https://www.legacy.hockey/roster/show/' + teamId + '?subseason=' + season;
123    
124    const controller = new AbortController();
125    const timeout = setTimeout(function() { controller.abort(); }, 10000);
126    
127    try {
128      const response = await fetch(url, { signal: controller.signal });
129      clearTimeout(timeout);
130      
131      if (!response.ok) {
132        throw new Error('HTTP ' + response.status);
133      }
134      
135      const html = await response.text();
136      const doc = new DOMParser().parseFromString(html, 'text/html');
137      const playerMap = {};
138      
139      let teamName = '';
140      const titleElement = doc.querySelector('h1.page-title, h1');
141      if (titleElement) {
142        teamName = titleElement.textContent.trim();
143        teamName = teamName.replace(/\s*Roster\s*/i, '').replace(/\s*\d{4}-\d{4}\s*/, '').trim();
144      }
145      
146      doc.querySelectorAll('table tbody tr').forEach(function(row) {
147        const cells = row.querySelectorAll('td');
148        if (cells.length >= 5) {
149          const number = cells[0]?.textContent?.trim();
150          const nameLink = cells[2]?.querySelector('a');
151          const playerIdMatch = nameLink?.href?.match(/roster_players\/(\d+)/);
152          const position = cells[3]?.textContent?.trim();
153          const grade = cells[4]?.textContent?.trim();
154          
155          if (playerIdMatch && number !== 'MGR') {
156            playerMap[playerIdMatch[1]] = {
157              number: number,
158              position: position || '',
159              grade: grade || ''
160            };
161          }
162        }
163      });
164      
165      return { players: playerMap, teamName: teamName };
166    } catch (error) {
167      clearTimeout(timeout);
168      throw error;
169    }
170  }
171  
172  function displayTable(players, lastUpdated) {
173    const container = document.createElement('div');
174    container.id = 'top-100-freshmen-table';
175    container.style.cssText = 'width: 100%; max-width: 1200px; margin: 0 auto 40px auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); position: relative; z-index: 1;';
176    
177    const heading = document.createElement('h2');
178    heading.textContent = TITLE;
179    heading.style.cssText = 'margin: 0 0 10px 0; font-size: 28px; font-weight: bold; text-align: center; color: #333;';
180    container.appendChild(heading);
181    
182    const updated = document.createElement('p');
183    const updateDate = new Date(lastUpdated);
184    updated.textContent = 'Last updated: ' + updateDate.toLocaleDateString() + ' ' + updateDate.toLocaleTimeString();
185    updated.style.cssText = 'margin: 0 0 20px 0; text-align: center; color: #666; font-size: 14px;';
186    container.appendChild(updated);
187    
188    const tableWrapper = document.createElement('div');
189    tableWrapper.style.cssText = 'overflow-x: auto;';
190    
191    const table = document.createElement('table');
192    table.className = 'table table-striped';
193    table.style.cssText = 'width: 100%; border-collapse: collapse; font-size: 14px; background: white;';
194    
195    const thead = document.createElement('thead');
196    const headerRow = document.createElement('tr');
197    headerRow.style.cssText = 'background: #f5f5f5;';
198    
199    ['Rank', 'Name', 'Team', 'Pos', 'GP', 'G', 'A', 'PTS'].forEach(function(text) {
200      const th = document.createElement('th');
201      th.textContent = text;
202      th.style.cssText = 'padding: 12px 8px; text-align: left; border-bottom: 2px solid #ddd; font-weight: bold;';
203      headerRow.appendChild(th);
204    });
205    thead.appendChild(headerRow);
206    table.appendChild(thead);
207    
208    const tbody = document.createElement('tbody');
209    players.forEach(function(player, index) {
210      const row = document.createElement('tr');
211      row.style.cssText = 'border-bottom: 1px solid #eee;' + (index % 2 === 0 ? ' background: #fafafa;' : '');
212      
213      [
214        (index + 1).toString(),
215        player.name,
216        player.team,
217        player.position,
218        player.gp.toString(),
219        player.goals.toString(),
220        player.assists.toString(),
221        player.points.toString()
222      ].forEach(function(text, i) {
223        const td = document.createElement('td');
224        td.textContent = text;
225        td.style.cssText = 'padding: 10px 8px; background: inherit;' + (i === 0 ? ' font-weight: bold; text-align: center;' : '');
226        row.appendChild(td);
227      });
228      
229      tbody.appendChild(row);
230    });
231    table.appendChild(tbody);
232    
233    tableWrapper.appendChild(table);
234    container.appendChild(tableWrapper);
235    
236    // Find the script tag that loaded this script
237    const scripts = document.getElementsByTagName('script');
238    const currentScript = scripts[scripts.length - 1];
239    
240    // Insert the table right after the script tag
241    if (currentScript && currentScript.parentNode) {
242      console.log('Inserting table after current script tag');
243      currentScript.parentNode.insertBefore(container, currentScript.nextSibling);
244    } else {
245      // Fallback: try to find a good container
246      const targets = document.querySelectorAll('.sn-element, .column, .row, .container, main, #main');
247      if (targets.length > 0) {
248        console.log('Inserting into first .sn-element or similar');
249        targets[0].insertBefore(container, targets[0].firstChild);
250      } else {
251        console.log('Inserting at beginning of body');
252        document.body.insertBefore(container, document.body.firstChild);
253      }
254    }
255  }
256  
257  function showLoadingIndicator(message) {
258    let indicator = document.getElementById('top100-loading');
259    
260    if (!indicator) {
261      indicator = document.createElement('div');
262      indicator.id = 'top100-loading';
263      indicator.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);' +
264        'background: white; padding: 30px 40px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);' +
265        'z-index: 99999; text-align: center;';
266      document.body.appendChild(indicator);
267      
268      const style = document.createElement('style');
269      style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
270      document.head.appendChild(style);
271    }
272    
273    indicator.innerHTML = '<div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; ' +
274      'border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;"></div>' +
275      '<p style="margin: 15px 0 0 0; font-size: 16px; color: #333;">' + message + '</p>';
276  }
277  
278  function hideLoadingIndicator() {
279    const indicator = document.getElementById('top100-loading');
280    if (indicator) {
281      indicator.remove();
282    }
283  }
284  
285  function showError(message) {
286    const error = document.createElement('div');
287    error.style.cssText = 'margin: 20px auto; padding: 20px; max-width: 600px; background: #fee; border: 2px solid #f66;' +
288      'border-radius: 8px; text-align: center; font-size: 16px; color: #c00;';
289    error.textContent = message;
290    document.body.insertBefore(error, document.body.firstChild);
291  }
292  
293  if (document.readyState === 'loading') {
294    document.addEventListener('DOMContentLoaded', function() {
295      setTimeout(createTop100Table, 500);
296    });
297  } else {
298    setTimeout(createTop100Table, 500);
299  }
300  
301})();
