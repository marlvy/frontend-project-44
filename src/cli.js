import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hi ${userName}!`);
};
