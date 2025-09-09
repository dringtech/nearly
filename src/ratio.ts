import { clamp } from './utils.ts';

export type Ratio = { numerator: number, denominator: number, difference: number };
export type RatioedOptions = {
  maxDenominator?: number;
}

const ratioSort = (a:Ratio, b: Ratio) => {
  const difference = Math.abs(a.difference) - Math.abs(b.difference);
  const denominator = a.denominator - b.denominator;
  if (difference === 0) return denominator;
  return difference;
}

export function ratioed(ratio: number, options: RatioedOptions = {}) {
  const possibleRatios: Ratio[] = [];
  const maxDenominator = options.maxDenominator || Infinity;
  // const tolerance = 0.1 / maxDenominator;

  const baseDenominators = [...Array(9).keys()].map(x => x + 2);
  const denominators = [
    ...baseDenominators,
    ...baseDenominators.map(x => x * 10),
  ].filter(x => x <= maxDenominator);

  for (const denominator of denominators) {
    const numerator = clamp(1, Math.round(ratio * denominator), denominator - 1);
    const difference = ratio - numerator / denominator;
    possibleRatios.push({
      numerator,
      denominator,
      difference,
    });
    // if (Math.abs(difference) < tolerance) break;
  }

  // Return the ratio with the lowest difference
  return possibleRatios
    .sort(ratioSort)
    .shift() as Ratio;
}