import gameLogic from '../gameLogic.js';

const generateExpression = () => {
  const number = Math.floor(Math.random() * 100);
  const symbols = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[randomIndex];
  let answer = 0;
  switch (randomSymbol) {
    case '+':
      answer = number + number;
      break;
    case '-':
      answer = number - number;
      break;
    case '*':
      answer = number * number;
      break;
    default:
      answer = 1;
  }
  const question = `${number} ${randomSymbol} ${number}`;
  return [question, answer.toString()];
};

export default () => {
  const rules = 'What is the result of the expression?';
  const rulesFunction = generateExpression;
  gameLogic(rules, rulesFunction);
};
