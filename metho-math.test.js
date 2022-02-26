import * as Metho from "./metho.js";
import {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  hypot,
  imul,
  log,
  log10,
  log1p,
  log2,
  max,
  min,
  pow,
  random,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc
} from "metho-math";

describe("metho-math library", () => {
  it("test availability of all metho-math (wrapper) functions", () => {
    expect(-(3)[abs]).toBe(3);
    expect(-(1)[acos]).toBe(3.141592653589793);
    expect((2)[acosh]).toBe(1.3169578969248166);
    expect((1)[asin]).toBe(1.5707963267948966);
    expect((1)[asinh]).toBe(0.881373587019543);
    expect((1)[atan]).toBe(0.7853981633974483);
    expect((15)[atan2]).toBe(0.16514867741462683);
    expect((0.5)[atanh]).toBe(0.5493061443340548);
    expect((64)[cbrt]).toBe(4);
    expect((7.004)[ceil]).toBe(8);
    expect((2)[clz32]).toBe(30);
    expect(Math.PI[cos]).toBe(-1);
    expect((1)[cosh]).toBe(1.5430806348152437);
    expect((1)[exp]).toBe(2.718281828459045);
    expect((1)[expm1]).toBe(1.718281828459045);
    expect((45.05)[floor]).toBe(45);
    expect((5.05)[fround]).toBe(5.050000190734863);
    expect((3)[hypot(4)]).toBe(5);
    expect((3)[imul(5)]).toBe(15);
    expect((10)[log]).toBe(2.302585092994046);
    expect((1e6)[log10]).toBe(6);
    expect((1)[log1p]).toBe(0.6931471805599453);
    expect((3)[log2]).toBe(1.584962500721156);
    expect([1, 5, 3][max(7, 4)]).toBe(7);
    expect([1, 5, 9, 3][max(7, 4)]).toBe(9);
    expect((5)[max(7, 4)]).toBe(7);
    expect([1, 5, 3][min(7, 4)]).toBe(1);
    expect([1, 5, 9, 3][min(7, 4)]).toBe(1);
    expect((5)[min(7, 4)]).toBe(4);
    expect((2)[pow(3)]).toBe(8);
    expect((1000)[random]).toBeGreaterThanOrEqual(0);
    expect((20.45)[round]).toBe(20);
    expect((3)[sign]).toBe(1);
    expect((Math.PI / 2)[sin]).toBe(1);
    expect((1)[sinh]).toBe(1.1752011936438014);
    expect((9)[sqrt]).toBe(3);
    expect((1)[tan]).toBe(1.5574077246549023);
    expect((1)[tanh]).toBe(0.7615941559557649);
    expect((13.37)[trunc]).toBe(13);
  });
});
