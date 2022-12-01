/**
 * Capitalizes a single word.
 * @param word The words to capitalize.
 * @returns The words capitalized.
 */
export const capitalizeWord = (word: string) => {
  let finalWord = '';

  word.split(' ').forEach((w) => {
    finalWord += w[0].toUpperCase() + w.slice(1).toLowerCase() + ' ';
  });

  return finalWord.trim();
};

/**
 * Creates a greeting message based on the time of day.
 * @param name Who to greet.
 * @returns A greeting message based on the time of day.
 */
export const greeting = (name: string) => {
  const hour = new Date().getHours();
  let message = 'Good';

  if (hour < 12) message += ' morning';
  else if (hour < 18) message += ' afternoon';
  else message += ' evening';

  return `${message}, ${name}`;
};

/**
 * Generates a random password the length of `passwordLength`.
 * @param passwordLength The length of the generated password.
 * @returns A randomly generated password the length of `passwordLength`.
 */
export const generatePassword = (passwordLength: number) => {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let password = '';

  for (let i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  return password;
};
