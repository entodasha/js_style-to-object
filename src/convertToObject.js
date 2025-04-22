'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const CONVERTED_STYLES = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .forEach((line) => {
      const [key, value] = line.split(':');

      CONVERTED_STYLES[key.trim()] = value.trim();
    });

  return CONVERTED_STYLES;
}

module.exports = convertToObject;
