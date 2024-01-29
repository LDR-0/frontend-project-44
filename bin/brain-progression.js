#!/usr/bin/env node

import { greetUser, askQuestion, getUserAnswer, checkAnswer, runGame } from '../src/index.js';

const generateProgression = (start, step, length) => {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hideElement = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, hiddenElement };
};

const generateQuestion = () => {
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5;
  const progression = generateProgression(start, step, length);
  const { progression: progressionWithHiddenElement, hiddenElement } = hideElement(progression);

  const question = `Question: ${progressionWithHiddenElement.join(' ')}`;
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};

const gameLogic = (name) => {
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const [question, correctAnswer] = generateQuestion();
    askQuestion(question);
    const userAnswer = getUserAnswer();

    if (checkAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return correctAnswersCount;
    }
  }
  return correctAnswersCount;
};

runGame(gameLogic);
