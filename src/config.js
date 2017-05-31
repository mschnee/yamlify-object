const defaultDateToString = require('./dateToString');
const defaultColors = require('./colors');

const defaultConfig = {
  indent: '  ',
  prefix: '\n',
  postfix: '\n',
};

module.exports = function getConfig (config = {}) {
  return {
    indent: simpleChoice(config.indent, defaultConfig.indent),
    prefix: simpleChoice(config.prefix, defaultConfig.prefix),
    postfix: simpleChoice(config.postfix, defaultConfig.postfix),
    dateToString: config.dateToString || defaultDateToString,
    colors: Object.assign({}, defaultColors, config.colors),
  };
}

function simpleChoice (userValue, defaultValue) {
  if (typeof userValue === 'undefined') {
    return defaultValue;
  }

  return userValue;
}