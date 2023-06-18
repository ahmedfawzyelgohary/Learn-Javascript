//---->  Coding Challenge #1 <------
// Test 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) 🎉`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})🎉`);
  } else {
    console.log(`no one win ☹ `);
  }
}
// checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

//---->  Coding Challenge #2 <------
function calcTip(bill) {
  return bill <= 300 && bill >= 50 ? bill * (15 / 100) : bill * (20 / 100);
}
//(1) for test
console.log(calcTip(100));
//(2)
const bills = [125, 555, 44];
console.log(bills);

//(3) Testing Data
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

// (4) bill + tip
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);
