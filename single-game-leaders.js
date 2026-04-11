(function() {
  var container = document.createElement('div');
  container.style.cssText = 'width:100%;font-family:inherit';

  var updated = document.createElement('p');
  updated.style.cssText = 'color:#666;font-size:13px;margin:0 0 20px 0';
  updated.textContent = 'Last updated: 2026-04-11 09:10';
  container.appendChild(updated);

  var h4_points = document.createElement('h4');
  h4_points.textContent = 'Most Points, Single Game';
  h4_points.style.cssText = 'margin:24px 0 8px 0;color:#162747;font-size:16px';
  container.appendChild(h4_points);
  var wrap_points = document.createElement('div');
  wrap_points.className = 'pageElement tableElement tableStriped fontSize';
  wrap_points.innerHTML = `<div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr><th>Player</th><th>School</th>
<th>PTS</th><th>Opponent</th><th>Date</th>
</tr></thead><tbody>
<tr class="odd"><td>Griffin Storey</td><td>Waseca</td><td>11</td><td>Windom at Waseca</td><td></td></tr>
<tr class="even"><td>Henry Huttemier</td><td>Waseca</td><td>11</td><td>Fairmont at Waseca</td><td></td></tr>
<tr class="odd"><td>Anthony Yerxa</td><td>International Falls</td><td>9</td><td>Lake of the Woods at International Falls</td><td></td></tr>
<tr class="even"><td>Brandon Rodenwald</td><td>Buffalo</td><td>8</td><td>Buffalo at Osseo</td><td></td></tr>
<tr class="odd"><td>Landyn Lais</td><td>Luverne</td><td>8</td><td>Worthington at Luverne</td><td></td></tr>
<tr class="even"><td>Maddux Domagala</td><td>Luverne</td><td>8</td><td>Worthington at Luverne</td><td></td></tr>
<tr class="odd"><td>Garrett Fischer</td><td>Crookston</td><td>8</td><td>Crookston at Park Rapids</td><td></td></tr>
<tr class="even"><td>Griffin Storey</td><td>Waseca</td><td>8</td><td>Waseca at Redwood Valley</td><td></td></tr>
<tr class="odd"><td>Gracin Kaste</td><td>Breckenridge/Wahpeton</td><td>8</td><td>Park Rapids at Breckenridge/Wahpeton</td><td></td></tr>
<tr class="even"><td>Easton Neppl</td><td>Breckenridge/Wahpeton</td><td>8</td><td>Park Rapids at Breckenridge/Wahpeton</td><td></td></tr>
</tbody></table></div>`;
  container.appendChild(wrap_points);

  var h4_goals = document.createElement('h4');
  h4_goals.textContent = 'Most Goals, Single Game';
  h4_goals.style.cssText = 'margin:24px 0 8px 0;color:#162747;font-size:16px';
  container.appendChild(h4_goals);
  var wrap_goals = document.createElement('div');
  wrap_goals.className = 'pageElement tableElement tableStriped fontSize';
  wrap_goals.innerHTML = `<div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr><th>Player</th><th>School</th>
<th>Goals</th><th>Opponent</th><th>Date</th>
</tr></thead><tbody>
<tr class="odd"><td>Anthony Yerxa</td><td>International Falls</td><td>6</td><td>Lake of the Woods at International Falls</td><td></td></tr>
<tr class="even"><td>Drake Sternhagen</td><td>Albert Lea</td><td>6</td><td>La Crescent-Hokah at Albert Lea</td><td></td></tr>
<tr class="odd"><td>Garrett Fischer</td><td>Crookston</td><td>6</td><td>Crookston at Park Rapids</td><td></td></tr>
<tr class="even"><td>Finn Henry</td><td>Park Rapids</td><td>6</td><td>Prairie Centre at Park Rapids</td><td></td></tr>
<tr class="odd"><td>Jackson Knight</td><td>Orono</td><td>6</td><td>Chaska at Orono</td><td></td></tr>
<tr class="even"><td>Brandon Rodenwald</td><td>Buffalo</td><td>5</td><td>Buffalo at Osseo</td><td></td></tr>
<tr class="odd"><td>Taevon Welle</td><td>Bemidji</td><td>5</td><td>Bemidji at Thief River Falls</td><td></td></tr>
<tr class="even"><td>Bode McConnell</td><td>Edina</td><td>5</td><td>Edina at St. Louis Park</td><td></td></tr>
<tr class="odd"><td>Anthony Yerxa</td><td>International Falls</td><td>5</td><td>International Falls at Mora/Milaca</td><td></td></tr>
<tr class="even"><td>Tanner Esterberg</td><td>St. Michael-Albertville</td><td>5</td><td>St. Michael-Albertville at Hopkins</td><td></td></tr>
</tbody></table></div>`;
  container.appendChild(wrap_goals);

  var h4_assists = document.createElement('h4');
  h4_assists.textContent = 'Most Assists, Single Game';
  h4_assists.style.cssText = 'margin:24px 0 8px 0;color:#162747;font-size:16px';
  container.appendChild(h4_assists);
  var wrap_assists = document.createElement('div');
  wrap_assists.className = 'pageElement tableElement tableStriped fontSize';
  wrap_assists.innerHTML = `<div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr><th>Player</th><th>School</th>
<th>Ast</th><th>Opponent</th><th>Date</th>
</tr></thead><tbody>
<tr class="odd"><td>Griffin Storey</td><td>Waseca</td><td>7</td><td>Windom at Waseca</td><td></td></tr>
<tr class="even"><td>Eli Milinkovich</td><td>Breck</td><td>6</td><td>Breck at St. Paul Academy</td><td></td></tr>
<tr class="odd"><td>Landyn Lais</td><td>Luverne</td><td>6</td><td>Worthington at Luverne</td><td></td></tr>
<tr class="even"><td>Maddux Domagala</td><td>Luverne</td><td>6</td><td>Worthington at Luverne</td><td></td></tr>
<tr class="odd"><td>Jackson Dahl</td><td>Waseca</td><td>6</td><td>Waseca at Worthington</td><td></td></tr>
<tr class="even"><td>Cole Cheeseman*</td><td>Academy of Holy Angels</td><td>6</td><td>Academy of Holy Angels at St. Louis Park</td><td></td></tr>
<tr class="odd"><td>Liam Grant</td><td>Westonka</td><td>6</td><td>Westonka at Providence Academy</td><td></td></tr>
<tr class="even"><td>Griffin Storey</td><td>Waseca</td><td>6</td><td>Waseca at Redwood Valley</td><td></td></tr>
<tr class="odd"><td>Maverick McKinnon</td><td>St. Thomas Academy</td><td>6</td><td>St. Thomas Academy at Two Rivers</td><td></td></tr>
<tr class="even"><td>Easton Neppl</td><td>Breckenridge/Wahpeton</td><td>6</td><td>Park Rapids at Breckenridge/Wahpeton</td><td></td></tr>
</tbody></table></div>`;
  container.appendChild(wrap_assists);

  var h4_shots = document.createElement('h4');
  h4_shots.textContent = 'Most Shots on Goal, Single Game';
  h4_shots.style.cssText = 'margin:24px 0 8px 0;color:#162747;font-size:16px';
  container.appendChild(h4_shots);
  var wrap_shots = document.createElement('div');
  wrap_shots.className = 'pageElement tableElement tableStriped fontSize';
  wrap_shots.innerHTML = `<div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr><th>Player</th><th>School</th>
<th>SOG</th><th>Opponent</th><th>Date</th>
</tr></thead><tbody>
<tr class="odd"><td>Gavin Kester</td><td>Fairmont</td><td>22</td><td>Worthington at Fairmont</td><td></td></tr>
<tr class="even"><td>Rylan Remore</td><td>Irondale</td><td>17</td><td>Tartan at Irondale</td><td></td></tr>
<tr class="odd"><td>Brody Lockman</td><td>Blaine</td><td>12</td><td>Elk River/Zimmerman at Blaine</td><td></td></tr>
<tr class="even"><td>Luke Larson</td><td>Willmar</td><td>12</td><td>Wadena-Deer Creek at Willmar</td><td></td></tr>
<tr class="odd"><td>Calvin Urdahl</td><td>Irondale</td><td>12</td><td>Tartan at Irondale</td><td></td></tr>
<tr class="even"><td>Tate Spilde</td><td>Becker/Big Lake</td><td>11</td><td>Becker/Big Lake at Tartan</td><td></td></tr>
<tr class="odd"><td>Connor Schubert</td><td>Rosemount</td><td>11</td><td>Eastview at Rosemount</td><td></td></tr>
<tr class="even"><td>Tyler Bechtold</td><td>St. Michael-Albertville</td><td>11</td><td>Elk River/Zimmerman at St. Michael-Albertville</td><td></td></tr>
<tr class="odd"><td>Connor Schubert</td><td>Rosemount</td><td>11</td><td>Rosemount at Edina</td><td></td></tr>
<tr class="even"><td>Connor Schubert</td><td>Rosemount</td><td>10</td><td>Rogers at Rosemount</td><td></td></tr>
</tbody></table></div>`;
  container.appendChild(wrap_shots);

  var h4_pim = document.createElement('h4');
  h4_pim.textContent = 'Most Penalty Minutes, Single Game';
  h4_pim.style.cssText = 'margin:24px 0 8px 0;color:#162747;font-size:16px';
  container.appendChild(h4_pim);
  var wrap_pim = document.createElement('div');
  wrap_pim.className = 'pageElement tableElement tableStriped fontSize';
  wrap_pim.innerHTML = `<div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr><th>Player</th><th>School</th>
<th>PIM</th><th>Opponent</th><th>Date</th>
</tr></thead><tbody>
<tr class="odd"><td>Caden Jensen</td><td>Spring Lake Park/Coon Rapids</td><td>29</td><td>Spring Lake Park/Coon Rapids at Centennial</td><td></td></tr>
<tr class="even"><td>Cam Autrey</td><td>Cretin-Derham Hall</td><td>26</td><td>Roseville at Cretin-Derham Hall</td><td></td></tr>
<tr class="odd"><td>Griffin Storey</td><td>Waseca</td><td>21</td><td>Waseca at Owatonna</td><td></td></tr>
<tr class="even"><td>Brady Roof</td><td>Anoka</td><td>20</td><td>Irondale at Anoka</td><td></td></tr>
<tr class="odd"><td>Caden Jensen</td><td>Spring Lake Park/Coon Rapids</td><td>19</td><td>Apple Valley/Burnsville at Spring Lake Park/Coon Rapids</td><td></td></tr>
<tr class="even"><td>Cole Carlson</td><td>Spring Lake Park/Coon Rapids</td><td>19</td><td>Spring Lake Park/Coon Rapids at Totino-Grace</td><td></td></tr>
<tr class="odd"><td>Riley Slinger</td><td>Faribault</td><td>19</td><td>Windom at Faribault</td><td></td></tr>
<tr class="even"><td>Thad Olson</td><td>Lake of the Woods</td><td>18</td><td>Kittson County Central at Lake of the Woods</td><td></td></tr>
<tr class="odd"><td>Emmet Opichka</td><td>Park of Cottage Grove</td><td>18</td><td>Hudson (Wis.) at Park of Cottage Grove</td><td></td></tr>
<tr class="even"><td>Remi Chisholm</td><td>Little Falls</td><td>18</td><td>Morris/Benson Area at Little Falls</td><td></td></tr>
</tbody></table></div>`;
  container.appendChild(wrap_pim);

  var h4_saves = document.createElement('h4');
  h4_saves.textContent = 'Most Saves, Single Game';
  h4_saves.style.cssText = 'margin:24px 0 8px 0;color:#162747;font-size:16px';
  container.appendChild(h4_saves);
  var wrap_saves = document.createElement('div');
  wrap_saves.className = 'pageElement tableElement tableStriped fontSize';
  wrap_saves.innerHTML = `<div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr><th>Player</th><th>School</th>
<th>Saves</th><th>Opponent</th><th>Date</th>
</tr></thead><tbody>
<tr class="odd"><td>Nathan McGuire</td><td>Tartan</td><td>101</td><td>St. Thomas Academy at Tartan</td><td></td></tr>
<tr class="even"><td>CJ Callan</td><td>Faribault</td><td>78</td><td>Northfield at Faribault</td><td></td></tr>
<tr class="odd"><td>Brookston Hildebrandt</td><td>Bagley/Fosston</td><td>67</td><td>Bagley/Fosston at International Falls</td><td></td></tr>
<tr class="even"><td>Owen Unglesbee</td><td>Simley</td><td>67</td><td>Mahtomedi at Simley</td><td></td></tr>
<tr class="odd"><td>Tait Johnson</td><td>Austin</td><td>67</td><td>Austin at Farmington</td><td></td></tr>
<tr class="even"><td>CJ Callan</td><td>Faribault</td><td>66</td><td>Rochester Mayo at Faribault</td><td></td></tr>
<tr class="odd"><td>CJ Callan</td><td>Faribault</td><td>66</td><td>Faribault at Rochester Century/John Marshall</td><td></td></tr>
<tr class="even"><td>Izaak Kalis</td><td>Little Falls</td><td>65</td><td>Little Falls at Luverne</td><td></td></tr>
<tr class="odd"><td>CJ Callan</td><td>Faribault</td><td>65</td><td>Faribault at Winona</td><td></td></tr>
<tr class="even"><td>Harrison Betker</td><td>Osseo</td><td>65</td><td>Anoka at Osseo</td><td></td></tr>
</tbody></table></div>`;
  container.appendChild(wrap_saves);

  var h4_shotsfaced = document.createElement('h4');
  h4_shotsfaced.textContent = 'Most Shots Faced, Single Game';
  h4_shotsfaced.style.cssText = 'margin:24px 0 8px 0;color:#162747;font-size:16px';
  container.appendChild(h4_shotsfaced);
  var wrap_shotsfaced = document.createElement('div');
  wrap_shotsfaced.className = 'pageElement tableElement tableStriped fontSize';
  wrap_shotsfaced.innerHTML = `<div class="tableWrapper">
<table class="dataTable sortable" style="width:100%">
<thead><tr><th>Player</th><th>School</th>
<th>SA</th><th>Opponent</th><th>Date</th>
</tr></thead><tbody>
<tr class="odd"><td>Nathan McGuire</td><td>Tartan</td><td>113</td><td>St. Thomas Academy at Tartan</td><td></td></tr>
<tr class="even"><td>CJ Callan</td><td>Faribault</td><td>88</td><td>Northfield at Faribault</td><td></td></tr>
<tr class="odd"><td>Dylan Slama</td><td>Moose Lake Area</td><td>80</td><td>Moose Lake Area at International Falls</td><td></td></tr>
<tr class="even"><td>Dane Price</td><td>Mora/Milaca</td><td>76</td><td>International Falls at Mora/Milaca</td><td></td></tr>
<tr class="odd"><td>Owen Unglesbee</td><td>Simley</td><td>76</td><td>Mahtomedi at Simley</td><td></td></tr>
<tr class="even"><td>CJ Callan</td><td>Faribault</td><td>75</td><td>Faribault at Rochester Century/John Marshall</td><td></td></tr>
<tr class="odd"><td>CJ Callan</td><td>Faribault</td><td>74</td><td>Rochester Mayo at Faribault</td><td></td></tr>
<tr class="even"><td>Brody Manning</td><td>St. Paul Academy</td><td>73</td><td>Breck at St. Paul Academy</td><td></td></tr>
<tr class="odd"><td>Brookston Hildebrandt</td><td>Bagley/Fosston</td><td>73</td><td>Bagley/Fosston at International Falls</td><td></td></tr>
<tr class="even"><td>Dylan Slama</td><td>Moose Lake Area</td><td>73</td><td>International Falls at Moose Lake Area</td><td></td></tr>
</tbody></table></div>`;
  container.appendChild(wrap_shotsfaced);

  // Insert next to the loader script in the page column
  var anchor = window._sglAnchor;
  if (anchor && anchor.parentNode) {
    anchor.parentNode.insertBefore(container, anchor.nextSibling);
  } else {
    document.body.appendChild(container);
  }
})();
