#!/usr/bin/env node

import readlineSync from 'readline-sync';

const operators = ['+', '-', '*'];

const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = String(number1 + number2);
      break;
    case '-':
      correctAnswer = String(number1 - number2);
      break;
    case '*':
      correctAnswer = String(number1 * number2);
      break;
    default:
      break;
  }
  return [question, correctAnswer];
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

runGame();
