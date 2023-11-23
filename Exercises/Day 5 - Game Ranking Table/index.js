var playerList = [
  {
    name: "Atlas",
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
  },
  {
    name: "Minerva",
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
  },
  {
    name: "Diana",
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
  },
  {
    name: "Guilherme",
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
  },
  {
    name: "Mariana",
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
  },
];

var tableElement = document.getElementById("playersTable");

showTable();

function showTable() {
  for (var i = 0; i < playerList.length; i++) {
    tableElement.innerHTML =
      tableElement.innerHTML +
      `
    <tr>
    <td>${playerList[i].name}</td>
    <td>${playerList[i].wins}</td>
    <td>${playerList[i].draws}</td>
    <td>${playerList[i].losses}</td>
    <td>${playerList[i].points}</td>
    <td><button onClick="addVictory(playerList[${i}])">Victory</button></td>
    <td><button onClick="addDraw(playerList[${i}])">Draw</button></td>
    <td><button onClick="addDefeat(playerList[${i}])">Defeat</button></td>
    </tr>
    `;
  }
}

function clearTable() {
  tableElement.innerHTML = ``;
}

function addVictory(player) {
  console.log(player);
  player.wins++;
  player.points = player.points + 3;

  clearTable();
  showTable();
}

function addDraw(player) {
  player.draws++;
  player.points++;

  clearTable();
  showTable();
}

function addDefeat(player) {
  player.losses++;

  clearTable();
  showTable();
}
