const highScoreBoard = {};

highScoreBoard.name = "The Best Ever"
highScoreBoard.score = 1000000;

console.log(highScoreBoard);

function addPlayer (obj, name, score) {
  obj.name = name;
  obj.score = score;
  return obj;
}

console.log(addPlayer(highScoreBoard, 'Jose Valim', 486373));

function removePlayer(obj, name) {
  if (obj.name === name) {
    delete obj.name;
    delete obj.score;
  }
  return obj;
}

//console.log(removePlayer(highScoreBoard, 'Jose Valim'));
console.log(removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras'));

function updateScore (obj, player, add) {
  console.log(obj)
  if (obj === player) {
    console.log(player)
    console.log(obj.score =+ add);
  }
  return obj;
}

console.log(updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73));
// => {"Freyja Ćirić", 12771081}

//5. Apply Monday bonus points
//The arcade hall keeps a separate score board on Mondays. At the end of the day, each player on that board gets 100 additional points.

//Implement the function applyMondayBonus that accepts a score board. The function adds the bonus points for each player that is listed on that board. Afterwards, the board is returned.

//const scoreBoard = {
//  'Dave Thomas': 44,
//  'Freyja Ćirić': 539,
//  'José Valim': 265,
//};

//applyMondayBonus(scoreBoard);
// => { 'Dave Thomas': 144, 'Freyja Ćirić': 639, 'José Valim': 365 }
