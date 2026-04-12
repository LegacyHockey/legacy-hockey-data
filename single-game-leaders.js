(function() {
  var container = document.createElement('div');
  container.style.cssText = 'width:100%;font-family:inherit';

  var updated = document.createElement('p');
  updated.style.cssText = 'color:#666;font-size:13px;margin:0 0 20px 0';
  updated.textContent = 'Last updated: 2026-04-12 00:28';
  container.appendChild(updated);

  // --- Most Goals ---
  var h4_s_most_goals = document.createElement('h4');
  h4_s_most_goals.textContent = 'Most Goals';
  h4_s_most_goals.style.cssText = 'margin:24px 0 6px 0;color:#162747;font-size:16px;font-weight:bold';
  container.appendChild(h4_s_most_goals);
  var wrap_s_most_goals = document.createElement('div');
  wrap_s_most_goals.className = 'pageEl tableStriped fontSize';
  wrap_s_most_goals.innerHTML = `<div class="pageElement tableElement"><div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr>
<th>Player</th>
<th>School</th>
<th>Goals</th>
<th>Opponent</th>
<th>Date</th>
</tr></thead>
<tbody>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77346671" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Anthony Yerxa</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113477-international-falls" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">International Falls</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771292?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Lake of the Woods at International Falls</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77679320" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Drake Sternhagen</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113383-albert-lea" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Albert Lea</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770111?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">La Crescent-Hokah at Albert Lea</a></td>
<td>Dec. 11, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77700079" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Garrett Fischer</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113516-crookston" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Crookston</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771280?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Crookston at Park Rapids</a></td>
<td>Jan. 5, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77700228" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Finn Henry</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113672-park-rapids" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Park Rapids</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771684?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Prairie Centre at Park Rapids</a></td>
<td>Jan. 8, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77736910" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Jackson Knight</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113556-orono" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Orono</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771153?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Chaska at Orono</a></td>
<td>Feb. 7, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77692467" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Brandon Rodenwald</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113484-buffalo" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Buffalo</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770675?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Buffalo at Osseo</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77693482" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Taevon Welle</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113514-bemidji" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bemidji</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770936?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bemidji at Thief River Falls</a></td>
<td>Dec. 2, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77736264" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bode McConnell</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113488-edina" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Edina</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770723?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Edina at St. Louis Park</a></td>
<td>Dec. 4, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77346671" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Anthony Yerxa</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113477-international-falls" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">International Falls</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770684?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">International Falls at Mora/Milaca</a></td>
<td>Dec. 6, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77682065" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Tanner Esterberg</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113492-st-michael-albertville" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">St. Michael-Albertville</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770659?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">St. Michael-Albertville at Hopkins</a></td>
<td>Dec. 13, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77681690" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Lincoln Ayers Assad*</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113659-holy-angels" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Academy of Holy Angels</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44771636?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Academy of Holy Angels at St. Louis Park</a></td>
<td>Dec. 16, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77704391" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Leyton Fuchs</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113674-prairie-centre" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Prairie Centre</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44771684?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Prairie Centre at Park Rapids</a></td>
<td>Jan. 8, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77718989" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Otto Schoenrock</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770379?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca at Redwood Valley</a></td>
<td>Jan. 8, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77643797" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Daniel Halonen (Capt.)</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113679-delano" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Delano</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44771754?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Delano at Hutchinson</a></td>
<td>Jan. 26, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77759358" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Gavin Kester</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113406-fairmont" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Fairmont</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770274?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Worthington at Fairmont</a></td>
<td>Jan. 27, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77664136" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maddux Domagala</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770295?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Austin at Luverne</a></td>
<td>Jan. 31, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77718939" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Henry Huttemier</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/44770276?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Fairmont at Waseca</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77664136" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maddux Domagala</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>5</td>
<td><a href="https://www.legacy.hockey/game/show/45173011?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">New Ulm at Luverne</a></td>
<td>Feb. 21, 2026</td>
</tr>
</tbody></table></div></div>`;
  container.appendChild(wrap_s_most_goals);

  // --- Most Assists ---
  var h4_s_most_assists = document.createElement('h4');
  h4_s_most_assists.textContent = 'Most Assists';
  h4_s_most_assists.style.cssText = 'margin:24px 0 6px 0;color:#162747;font-size:16px;font-weight:bold';
  container.appendChild(h4_s_most_assists);
  var wrap_s_most_assists = document.createElement('div');
  wrap_s_most_assists.className = 'pageEl tableStriped fontSize';
  wrap_s_most_assists.innerHTML = `<div class="pageElement tableElement"><div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr>
<th>Player</th>
<th>School</th>
<th>Ast</th>
<th>Opponent</th>
<th>Date</th>
</tr></thead>
<tbody>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77719076" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Griffin Storey</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>7</td>
<td><a href="https://www.legacy.hockey/game/show/44770382?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Windom at Waseca</a></td>
<td>Feb. 3, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77686457" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Eli Milinkovich</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113453-breck" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Breck</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770606?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Breck at St. Paul Academy</a></td>
<td>Nov. 20, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77664125" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Landyn Lais</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770280?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Worthington at Luverne</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77664136" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maddux Domagala</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770280?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Worthington at Luverne</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77719102" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Jackson Dahl</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770378?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca at Worthington</a></td>
<td>Dec. 11, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77681702" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Cole Cheeseman*</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113659-holy-angels" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Academy of Holy Angels</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771636?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Academy of Holy Angels at St. Louis Park</a></td>
<td>Dec. 16, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77720450" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Liam Grant</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113687-westonka" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Westonka</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770591?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Westonka at Providence Academy</a></td>
<td>Dec. 16, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77719076" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Griffin Storey</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770379?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca at Redwood Valley</a></td>
<td>Jan. 8, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77720296" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maverick McKinnon</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113537-st-thomas-academy" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">St. Thomas Academy</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771048?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">St. Thomas Academy at Two Rivers</a></td>
<td>Jan. 15, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77716983" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Easton Neppl</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113668-breckenridge-wahpeton" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Breckenridge/Wahpeton</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771678?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Park Rapids at Breckenridge/Wahpeton</a></td>
<td>Jan. 15, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77687108" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Oskar Rydberg</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113575-pine-city-area" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Pine City Area</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771215?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Becker/Big Lake at Pine City Area</a></td>
<td>Jan. 16, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77664136" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maddux Domagala</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770292?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Redwood Valley at Luverne</a></td>
<td>Jan. 22, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77720302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Cole Braunshausen</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113537-st-thomas-academy" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">St. Thomas Academy</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44771055?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">South St. Paul at St. Thomas Academy</a></td>
<td>Jan. 31, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77718939" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Henry Huttemier</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770276?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Fairmont at Waseca</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77718991" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Cash Lynch</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>6</td>
<td><a href="https://www.legacy.hockey/game/show/44770276?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Fairmont at Waseca</a></td>
<td>Feb. 5, 2026</td>
</tr>
</tbody></table></div></div>`;
  container.appendChild(wrap_s_most_assists);

  // --- Most Points ---
  var h4_s_most_points = document.createElement('h4');
  h4_s_most_points.textContent = 'Most Points';
  h4_s_most_points.style.cssText = 'margin:24px 0 6px 0;color:#162747;font-size:16px;font-weight:bold';
  container.appendChild(h4_s_most_points);
  var wrap_s_most_points = document.createElement('div');
  wrap_s_most_points.className = 'pageEl tableStriped fontSize';
  wrap_s_most_points.innerHTML = `<div class="pageElement tableElement"><div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr>
<th>Player</th>
<th>School</th>
<th>PTS</th>
<th>Opponent</th>
<th>Date</th>
</tr></thead>
<tbody>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77719076" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Griffin Storey</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>11</td>
<td><a href="https://www.legacy.hockey/game/show/44770382?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Windom at Waseca</a></td>
<td>Feb. 3, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77718939" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Henry Huttemier</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>11</td>
<td><a href="https://www.legacy.hockey/game/show/44770276?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Fairmont at Waseca</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77346671" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Anthony Yerxa</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113477-international-falls" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">International Falls</a></td>
<td>9</td>
<td><a href="https://www.legacy.hockey/game/show/44771292?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Lake of the Woods at International Falls</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77692467" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Brandon Rodenwald</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113484-buffalo" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Buffalo</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770675?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Buffalo at Osseo</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77664125" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Landyn Lais</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770280?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Worthington at Luverne</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77664136" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maddux Domagala</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770280?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Worthington at Luverne</a></td>
<td>Nov. 25, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77700079" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Garrett Fischer</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113516-crookston" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Crookston</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44771280?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Crookston at Park Rapids</a></td>
<td>Jan. 5, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77719076" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Griffin Storey</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770379?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca at Redwood Valley</a></td>
<td>Jan. 8, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77716973" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Gracin Kaste</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113668-breckenridge-wahpeton" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Breckenridge/Wahpeton</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44771678?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Park Rapids at Breckenridge/Wahpeton</a></td>
<td>Jan. 15, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77716983" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Easton Neppl</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113668-breckenridge-wahpeton" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Breckenridge/Wahpeton</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44771678?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Park Rapids at Breckenridge/Wahpeton</a></td>
<td>Jan. 15, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77664136" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maddux Domagala</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770292?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Redwood Valley at Luverne</a></td>
<td>Jan. 22, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77664136" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Maddux Domagala</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113408-luverne" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770294?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Luverne at Worthington</a></td>
<td>Jan. 29, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77718991" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Cash Lynch</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770276?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Fairmont at Waseca</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77719076" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Griffin Storey</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113418-waseca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Waseca</a></td>
<td>8</td>
<td><a href="https://www.legacy.hockey/game/show/44770276?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Fairmont at Waseca</a></td>
<td>Feb. 5, 2026</td>
</tr>
</tbody></table></div></div>`;
  container.appendChild(wrap_s_most_points);

  // --- Most Saves ---
  var h4_g_most_saves = document.createElement('h4');
  h4_g_most_saves.textContent = 'Most Saves';
  h4_g_most_saves.style.cssText = 'margin:24px 0 6px 0;color:#162747;font-size:16px;font-weight:bold';
  container.appendChild(h4_g_most_saves);
  var wrap_g_most_saves = document.createElement('div');
  wrap_g_most_saves.className = 'pageEl tableStriped fontSize';
  wrap_g_most_saves.innerHTML = `<div class="pageElement tableElement"><div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr>
<th>Player</th>
<th>School</th>
<th>Saves</th>
<th>Opponent</th>
<th>Date</th>
</tr></thead>
<tbody>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77737302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">CJ Callan</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113387-faribault" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault</a></td>
<td>78</td>
<td><a href="https://www.legacy.hockey/game/show/44770236?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Northfield at Faribault</a></td>
<td>Feb. 7, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77736632" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Brookston Hildebrandt</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113578-bagley-fosston" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bagley/Fosston</a></td>
<td>67</td>
<td><a href="https://www.legacy.hockey/game/show/44770092?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bagley/Fosston at International Falls</a></td>
<td>Dec. 31, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77737334" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Owen Unglesbee</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113539-simley" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Simley</a></td>
<td>67</td>
<td><a href="https://www.legacy.hockey/game/show/44771029?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Mahtomedi at Simley</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77740039" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Tait Johnson</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113385-austin" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Austin</a></td>
<td>67</td>
<td><a href="https://www.legacy.hockey/game/show/45172572?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Austin at Farmington</a></td>
<td>Feb. 19, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77737302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">CJ Callan</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113387-faribault" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault</a></td>
<td>66</td>
<td><a href="https://www.legacy.hockey/game/show/44770184?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Rochester Mayo at Faribault</a></td>
<td>Dec. 6, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77737302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">CJ Callan</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113387-faribault" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault</a></td>
<td>66</td>
<td><a href="https://www.legacy.hockey/game/show/44770185?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault at Rochester Century/John Marshall</a></td>
<td>Jan. 20, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77688231" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Izaak Kalis</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113444-little-falls" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Little Falls</a></td>
<td>65</td>
<td><a href="https://www.legacy.hockey/game/show/44770279?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Little Falls at Luverne</a></td>
<td>Nov. 22, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77737302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">CJ Callan</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113387-faribault" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault</a></td>
<td>65</td>
<td><a href="https://www.legacy.hockey/game/show/44770117?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault at Winona</a></td>
<td>Dec. 9, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77719443" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Harrison Betker</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113601-osseo" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Osseo</a></td>
<td>65</td>
<td><a href="https://www.legacy.hockey/game/show/44771344?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Anoka at Osseo</a></td>
<td>Jan. 29, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77719613" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Dylan Slama</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113651-moose-lake-area" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Moose Lake Area</a></td>
<td>65</td>
<td><a href="https://www.legacy.hockey/game/show/44771701?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Moose Lake Area at International Falls</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77740012" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Kason Helgeson</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113670-morris-benson-area-" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Morris/Benson Area</a></td>
<td>65</td>
<td><a href="https://www.legacy.hockey/game/show/45170664?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Morris/Benson Area  at Sartell</a></td>
<td>Feb. 17, 2026</td>
</tr>
</tbody></table></div></div>`;
  container.appendChild(wrap_g_most_saves);

  // --- Most Saves in a Shutout ---
  var h4_g_most_shutout_saves = document.createElement('h4');
  h4_g_most_shutout_saves.textContent = 'Most Saves in a Shutout';
  h4_g_most_shutout_saves.style.cssText = 'margin:24px 0 6px 0;color:#162747;font-size:16px;font-weight:bold';
  container.appendChild(h4_g_most_shutout_saves);
  var wrap_g_most_shutout_saves = document.createElement('div');
  wrap_g_most_shutout_saves.className = 'pageEl tableStriped fontSize';
  wrap_g_most_shutout_saves.innerHTML = `<div class="pageElement tableElement"><div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr>
<th>Player</th>
<th>School</th>
<th>Saves</th>
<th>Opponent</th>
<th>Date</th>
</tr></thead>
<tbody>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77714612" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Charlie Scanlon</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113616-eastview" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Eastview</a></td>
<td>44</td>
<td><a href="https://www.legacy.hockey/game/show/44771475?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Farmington at Eastview</a></td>
<td>Jan. 13, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77720846" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Dax Krech</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113479-north-shore" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">North Shore</a></td>
<td>43</td>
<td><a href="https://www.legacy.hockey/game/show/44771697?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Moose Lake Area at North Shore</a></td>
<td>Jan. 19, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77699341" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Blayne Kelley</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113475-greenway" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Greenway</a></td>
<td>41</td>
<td><a href="https://www.legacy.hockey/game/show/44770886?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Greenway at Red Wing</a></td>
<td>Nov. 21, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77699406" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">William Pocrnich</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113505-proctor" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Proctor</a></td>
<td>41</td>
<td><a href="https://www.legacy.hockey/game/show/44769895?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Two Rivers at Proctor</a></td>
<td>Nov. 28, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77677270" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Jackson Chesak</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113535-mahtomedi" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Mahtomedi</a></td>
<td>41</td>
<td><a href="https://www.legacy.hockey/game/show/44770920?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">East Grand Forks at Mahtomedi</a></td>
<td>Dec. 13, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77651747" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Sam Suja</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113448-northern-lakes" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Northern Lakes</a></td>
<td>40</td>
<td><a href="https://www.legacy.hockey/game/show/44770948?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bemidji at Northern Lakes</a></td>
<td>Jan. 20, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77737328" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Everett Hay</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113539-simley" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Simley</a></td>
<td>38</td>
<td><a href="https://www.legacy.hockey/game/show/44771095?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Simley at Tartan</a></td>
<td>Dec. 18, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77690257" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Gavin Bajda</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113643-stillwater" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Stillwater</a></td>
<td>38</td>
<td><a href="https://www.legacy.hockey/game/show/44771617?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">White Bear Lake at Stillwater</a></td>
<td>Dec. 31, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77723135" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Zachary Schnabel</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113635-forest-lake" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Forest Lake</a></td>
<td>37</td>
<td><a href="https://www.legacy.hockey/game/show/44770763?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Forest Lake at St. Michael-Albertville</a></td>
<td>Nov. 29, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77728298" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">David Isaacson</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113620-lakeville-north" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Lakeville North</a></td>
<td>37</td>
<td><a href="https://www.legacy.hockey/game/show/44771456?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Lakeville North at Eastview</a></td>
<td>Feb. 5, 2026</td>
</tr>
</tbody></table></div></div>`;
  container.appendChild(wrap_g_most_shutout_saves);

  // --- Most Shots Faced ---
  var h4_g_most_shots_faced = document.createElement('h4');
  h4_g_most_shots_faced.textContent = 'Most Shots Faced';
  h4_g_most_shots_faced.style.cssText = 'margin:24px 0 6px 0;color:#162747;font-size:16px;font-weight:bold';
  container.appendChild(h4_g_most_shots_faced);
  var wrap_g_most_shots_faced = document.createElement('div');
  wrap_g_most_shots_faced.className = 'pageEl tableStriped fontSize';
  wrap_g_most_shots_faced.innerHTML = `<div class="pageElement tableElement"><div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr>
<th>Player</th>
<th>School</th>
<th>SA</th>
<th>Opponent</th>
<th>Date</th>
</tr></thead>
<tbody>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77737302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">CJ Callan</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113387-faribault" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault</a></td>
<td>88</td>
<td><a href="https://www.legacy.hockey/game/show/44770236?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Northfield at Faribault</a></td>
<td>Feb. 7, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77719613" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Dylan Slama</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113651-moose-lake-area" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Moose Lake Area</a></td>
<td>80</td>
<td><a href="https://www.legacy.hockey/game/show/44771701?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Moose Lake Area at International Falls</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77686515" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Dane Price</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113653-mora-milaca" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Mora/Milaca</a></td>
<td>76</td>
<td><a href="https://www.legacy.hockey/game/show/44770684?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">International Falls at Mora/Milaca</a></td>
<td>Dec. 6, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77737334" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Owen Unglesbee</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113539-simley" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Simley</a></td>
<td>76</td>
<td><a href="https://www.legacy.hockey/game/show/44771029?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Mahtomedi at Simley</a></td>
<td>Feb. 5, 2026</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77737302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">CJ Callan</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113387-faribault" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault</a></td>
<td>75</td>
<td><a href="https://www.legacy.hockey/game/show/44770185?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault at Rochester Century/John Marshall</a></td>
<td>Jan. 20, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77737302" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">CJ Callan</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113387-faribault" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Faribault</a></td>
<td>74</td>
<td><a href="https://www.legacy.hockey/game/show/44770184?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Rochester Mayo at Faribault</a></td>
<td>Dec. 6, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77718456" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Brody Manning</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113457-st-paul-academy" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">St. Paul Academy</a></td>
<td>73</td>
<td><a href="https://www.legacy.hockey/game/show/44770606?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Breck at St. Paul Academy</a></td>
<td>Nov. 20, 2025</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77736632" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Brookston Hildebrandt</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113578-bagley-fosston" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bagley/Fosston</a></td>
<td>73</td>
<td><a href="https://www.legacy.hockey/game/show/44770092?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Bagley/Fosston at International Falls</a></td>
<td>Dec. 31, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77719613" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Dylan Slama</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113651-moose-lake-area" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Moose Lake Area</a></td>
<td>73</td>
<td><a href="https://www.legacy.hockey/game/show/44771692?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">International Falls at Moose Lake Area</a></td>
<td>Jan. 26, 2026</td>
</tr>
<tr class="even">
<td><a href="https://www.legacy.hockey/roster_players/77737328" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Everett Hay</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113539-simley" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Simley</a></td>
<td>72</td>
<td><a href="https://www.legacy.hockey/game/show/44771032?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">St. Thomas Academy at Simley</a></td>
<td>Nov. 22, 2025</td>
</tr>
<tr class="odd">
<td><a href="https://www.legacy.hockey/roster_players/77664781" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Brody Pederson</a></td>
<td><a href="https://www.legacy.hockey/page/show/9113420-worthington" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Worthington</a></td>
<td>72</td>
<td><a href="https://www.legacy.hockey/game/show/44770361?subseason=948428" target="_blank" style="color:#162747;text-decoration:none" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Worthington at Minnesota River</a></td>
<td>Jan. 15, 2026</td>
</tr>
</tbody></table></div></div>`;
  container.appendChild(wrap_g_most_shots_faced);

  // Insert next to the loader script in the page column
  var anchor = window._sglAnchor;
  if (anchor && anchor.parentNode) {
    anchor.parentNode.insertBefore(container, anchor.nextSibling);
  } else {
    document.body.appendChild(container);
  }
})();