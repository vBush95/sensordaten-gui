/**
 * returns a String with the first letter capitalized or null if no string was passed
 * @param  {string} name        String to be capitalized
 * @return {string | null}      String with capitalizes first letter or null
 */

const firstLetterToUpperCase = (name: string): string | null => {
  return name
    ? `${name.charAt(0).toUpperCase()}${name.substring(1).toLowerCase()}`
    : null;
};

export default firstLetterToUpperCase;
