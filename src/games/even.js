import gameLogic from '../gameLogic.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rulesFunction = () => {
    const number = Math.floor(Math.random() * 100);
    const question = `${number}`;
    const answer = `${number % 2 === 0 ? 'yes' : 'no'}`;
    return [question, answer];
  };

  gameLogic(rules, rulesFunction);
};
