var nearly = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/lib.ts
  var lib_exports = {};
  __export(lib_exports, {
    ratioed: () => ratioed,
    readableDirection: () => readableDirection
  });

  // src/utils.ts
  function clamp(min, number, max) {
    return Math.max(min, Math.min(number, max));
  }

  // src/ratio.ts
  var ratioSort = (a, b) => {
    const difference = Math.abs(a.difference) - Math.abs(b.difference);
    const denominator = a.denominator - b.denominator;
    if (difference === 0)
      return denominator;
    return difference;
  };
  function ratioed(ratio, options = {}) {
    const possibleRatios = [];
    const baseDenominators = [...Array(9).keys()].map((x) => x + 2);
    const denominators = [
      ...baseDenominators,
      ...baseDenominators.map((x) => x * 10)
    ];
    for (const denominator of denominators) {
      const numerator = clamp(1, Math.round(ratio * denominator), denominator - 1);
      const difference = ratio - numerator / denominator;
      possibleRatios.push({
        numerator,
        denominator,
        difference
      });
    }
    return possibleRatios.sort(ratioSort).shift();
  }

  // src/lib.ts
  var EXACT = "exacly";
  var LESS_THAN = "less than";
  var MORE_THAN = "more than";
  var ABOUT = "about";
  var readableDirection = (difference) => {
    if (difference === 0)
      return EXACT;
    if (difference < -0.01)
      return LESS_THAN;
    if (difference > 0.01)
      return MORE_THAN;
    return ABOUT;
  };
  return __toCommonJS(lib_exports);
})();
//# sourceMappingURL=nearly.js.map
