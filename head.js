// FUNCTION IMPLEMENTATION

const head = function(inpArr) {
  if (!Array.isArray(inpArr) || inpArr.length === 0) {
    return null;
  }
  return inpArr[0];
};


module.exports = head;