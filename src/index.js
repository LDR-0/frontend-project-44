import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question) => {
  console.log(question);
};

export const getUserAnswer = () => {
  return readlineSync.question('Your answer: ');
};

export const checkAnswer = (userAnswer, correctAnswer) => {
  return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
};

export const runGame = (gameLogic) => {
  const name = greetUser();
  const correctAnswersCount = gameLogic(name);
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
