#!/usr/bin/env node

import greetUser from '../src/cli.js';
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  const name = greetUser();
  
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    
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

playBrainEven();
