import { ratioed, RatioedOptions } from './ratio.ts';
import { assertObjectMatch } from "https://deno.land/std@0.201.0/assert/mod.ts";

function test(n: number, options?: RatioedOptions) {
    const result = ratioed(n, {...options});
    console.log({ input: n, result });
    return result;
}

Deno.test("exact ratios", () => {
    const result = test(0.5);
    assertObjectMatch(result, { numerator: 1, denominator: 2, difference: 0 });
});

Deno.test("duplicate ratios", () => {
    const result = test(0.25);
    assertObjectMatch(result, { numerator: 1, denominator: 4, difference: 0 });
});

Deno.test("close ratios", () => {
    const result = test(0.1523);
    assertObjectMatch(result, { numerator: 3, denominator: 20 });
});

Deno.test("small ratios (hundredths)", () => {
    const result = test(0.01);
    assertObjectMatch(result, { numerator: 1, denominator: 100 });
});

Deno.test("large ratios (hundredths)", () => {
    const result = test(0.99);
    assertObjectMatch(result, { numerator: 99, denominator: 100 });
});

Deno.test("small ratios (thousandths)", () => {
    const result = test(0.001);
    assertObjectMatch(result, { numerator: 1, denominator: 100 });
});

Deno.test("large ratios (thousandths)", () => {
    const result = test(0.999);
    assertObjectMatch(result, { numerator: 99, denominator: 100 });
});

Deno.test("large ratios (max denominator 10)", () => {
    const result = test(0.999, { maxDenominator: 10 });
    assertObjectMatch(result, { numerator: 9, denominator: 10 });
});