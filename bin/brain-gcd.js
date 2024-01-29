#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateNumbers = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  return [number1, number2];
};

const findGCD = (number1, number2) => {
  while (number2 !== 0) {
    const temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const [number1, number2] = generateNumbers();
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(findGCD(number1, number2));

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
