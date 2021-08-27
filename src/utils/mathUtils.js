export default function getPosAndNegNum(num) {
  const mathNum = getIntegerZeroToTen();
  let symbol = getSymbol();
  console.log('symbol: ', symbol);
  let varMathNum = 0;
  if (mathNum === 2 || mathNum === 4 || mathNum === 6 || mathNum === 8) {
    varMathNum = getIntegerZeroToTen() * 0.01;
  } else if (mathNum === 1 || mathNum === 0 || mathNum === 9) {
    varMathNum = getIntegerZeroToTen() * 0.02;
  } else if (mathNum === 3 || mathNum === 7) {
    varMathNum = getIntegerZeroToTen() * 0.06;
  } else if (mathNum === 5) {
    varMathNum = getIntegerZeroToTen() * 0.3;
  }
  // varMathNum = Number.parseFloat(varMathNum).toFixed(2) * 1;
  // console.log("varMathNum: ", getSymbolNum(symbol, num, varMathNum));
  return getSymbolNum(symbol, num, varMathNum);
}

function getSymbolNum(symbol, numA, numB) {
  if (symbol === "+") {
    return Number.parseFloat(numA + numB).toFixed(2) * 1;
  } else if (symbol === "-") {
    return Number.parseFloat(numA - numB).toFixed(2) * 1;
  }
}

function getIntegerZeroToTen() {
  return Math.round(Math.random() * 10);
}

function getSymbol() {
  if (getIntegerZeroToTen() === 0) {
    getSymbol();
  } else {
    if (getIntegerZeroToTen() < 5) {
      return "-";
    } else if (getIntegerZeroToTen() > 5) {
      return "+";
    }
  }
}
