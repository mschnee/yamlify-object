/**
 * @params {Error} error
 * @returns {string}
 */
module.exports = function errorToString (error) {
  return Error
    .prototype
    .toString
    .call(error);
};
