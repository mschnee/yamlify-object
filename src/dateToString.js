/**
 * @params {Date} date
 * @returns {string}
 */
module.exports = function defaultDateToString (date) {
  return `new Date(${
    Date.prototype.toISOString.call(date)
  })`;
};
