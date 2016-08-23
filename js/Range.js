var Number, Range, wrongType;

Number = require("Nan").Number;

wrongType = require("wrongType");

Range = Validator({
  test: function(value) {
    if (!Array.isArray(value)) {
      return false;
    }
    if (value.length !== 2) {
      return false;
    }
    if (!Number.test(value[0])) {
      return false;
    }
    if (!Number.test(value[1])) {
      return false;
    }
    return true;
  },
  assert: function(value, key) {
    if (!Array.isArray(value)) {
      return wrongType(Array, key);
    }
    if (value.length !== 2) {
      return Error("'" + key + "' must have a length of 2!");
    }
    if (!Number.test(value[0])) {
      return wrongType(Number, key + "[0]");
    }
    if (!Number.test(value[1])) {
      return wrongType(Number, key + "[1]");
    }
  }
});

module.exports = Range;

//# sourceMappingURL=map/Range.map
