class StringFunctions {
  /**
   * Capitalizes the input string.
   * @param {string} input - The string to capitalize
   * @returns {string} - The capitalized string
   * @example
   * capitalize('hello world') // 'HELLO WORLD'
   * capitalize('HELLO WORLD') // 'HELLO WORLD'
   */
  capitalize(input) {
    return input.toUpperCase();
  }

  /**
   * Returns a reversed string.
   * @param {string} input - The string to reverse
   * @returns {string} - The reversed string
   * @example
   * reverse('abc') // 'cba'
   */
  reverse(input) {
    return input.split('').reverse().join('');
  }

  /**
   * Returns an array of words in a string.
   * @param {string} input - The string to split into words
   * @returns {string[]} - An array of words in the string
   * @example
   * split('hello world') // ['hello', 'world']
   */
  split(input) {
    return input.split(/\s+/);
  }
}
