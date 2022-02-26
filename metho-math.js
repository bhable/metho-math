//import * as Metho from "../metho/metho.js"
import * as Metho from "metho";

const target = Number.prototype;

// Math.abs() --- returns the absolute value of a number
export const abs = Metho.add(target, function abs() {
  return Math.abs(this);
});

// Math.acos() --- returns the arccosine (in radians) of a number
export const acos = Metho.add(target, function acos() {
  return Math.acos(this);
});

// Math.acosh() --- returns the hyperbolic arc-cosine of a number,
export const acosh = Metho.add(target, function acosh() {
  return Math.acosh(this);
});

// Math.asin() --- returns the arcsine (in radians) of a number
export const asin = Metho.add(target, function asin() {
  return Math.asin(this);
});

// Math.asinh() --- returns the hyperbolic arcsine of a number
export const asinh = Metho.add(target, function asinh() {
  return Math.asinh(this);
});

// Math.atan() --- returns the arctangent (in radians) of a number
export const atan = Metho.add(target, function atan() {
  return Math.atan(this);
});

// Math.atan2() --- returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (this, x)
export const atan2 = Metho.add(target, function atan2(x) {
  return Math.atan2(this, x);
});

// Math.atanh() --- returns the hyperbolic arctangent of a number
export const atanh = Metho.add(target, function atanh() {
  return Math.atanh(this);
});

// Math.cbrt() --- returns the cube root of a number
export const cbrt = Metho.add(target, function cbrt() {
  return Math.cbrt(this);
});

// Math.ceil() --- returns a number rounded up to the next largest integer
export const ceil = Metho.add(target, function ceil() {
  return Math.ceil(this);
});

// Math.clz32() --- returns the number of leading zero bits in the 32-bit binary representation of a number
export const clz32 = Metho.add(target, function clz32() {
  return Math.clz32(this);
});

// Math.cos() --- returns the cosine of the specified angle, which must be specified in radians
export const cos = Metho.add(target, function cos() {
  return Math.cos(this);
});

// Math.cosh() --- returns the hyperbolic cosine of a number, that can be expressed using the constant e
export const cosh = Metho.add(target, function cosh() {
  return Math.cosh(this);
});

// Math.exp() --- returns e^x, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms
export const exp = Metho.add(target, function exp() {
  return Math.exp(this);
});

// Math.expm1() ---  returns e^x - 1, where x is the argument, and e the base of the natural logarithms
export const expm1 = Metho.add(target, function expm1() {
  return Math.expm1(this);
});

// Math.floor() --- returns the largest integer less than or equal to a given number
export const floor = Metho.add(target, function floor() {
  return Math.floor(this);
});

// Math.fround() --- returns the nearest 32-bit single precision float representation of a number
export const fround = Metho.add(target, function fround() {
  return Math.fround(this);
});

// Math.hypot() --- returns the square root of the sum of squares of its arguments
export const hypot = Metho.add(target, function hypot(...n) {
  return Math.hypot(this, ...n);
});

// Math.imul() --- returns the result of the C-like 32-bit multiplication of the two parameters
export const imul = Metho.add(target, function imul(n) {
  return Math.imul(this, n);
});

// Math.log() --- returns the natural logarithm (base e) of a number
export const log = Metho.add(target, function log() {
  return Math.log(this);
});

// Math.log10() --- returns the base 10 logarithm of a number
export const log10 = Metho.add(target, function log10() {
  return Math.log10(this);
});

// Math.log1p() --- returns the natural logarithm (base e) of 1 + a number
export const log1p = Metho.add(target, function log1p() {
  return Math.log1p(this);
});

// Math.log2() --- returns the base 2 logarithm of a number
export const log2 = Metho.add(target, function log2() {
  return Math.log2(this);
});

// Math.max() --- returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one
export const max = Metho.add([target, Array.prototype], function max(...n) {
  return Array.isArray(this) ? Math.max(...this, ...n) : Math.max(this, ...n);
});

// Math.min() --- returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one
export const min = Metho.add([target, Array.prototype], function min(...n) {
  return Array.isArray(this) ? Math.min(...this, ...n) : Math.min(this, ...n);
});

// Math.pow() --- given two arguments, base and exponent, returns base ** exponent
export const pow = Metho.add(target, function pow(n) {
  return Math.pow(this, n);
});

// Math.random() --- returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user
export const random = Metho.add(target, function random() {
  return Math.floor(Math.random() * this);
});

// Math.round() --- returns the value of a number rounded to the nearest integer
export const round = Metho.add(target, function round() {
  return Math.round(this);
});

// Math.sign() --- returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. If the number passed into Math.sign() is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will not be returned
export const sign = Metho.add(target, function sign() {
  return Math.sign(this);
});

// Math.sin() --- returns the sine of a number
export const sin = Metho.add(target, function sin() {
  return Math.sin(this);
});

// Math.sinh() --- returns the hyperbolic sine of a number, that can be expressed using the constant e
export const sinh = Metho.add(target, function sinh() {
  return Math.sinh(this);
});

// Math.sqrt() --- returns the square root of a number
export const sqrt = Metho.add(target, function sqrt() {
  return Math.sqrt(this);
});

// Math.tan() --- returns the tangent of a number
export const tan = Metho.add(target, function tan() {
  return Math.tan(this);
});

// Math.tanh() --- returns the hyperbolic tangent of a number
export const tanh = Metho.add(target, function tanh() {
  return Math.tanh(this);
});

// Math.trunc() --- returns the integer part of a number by removing any fractional digits
export const trunc = Metho.add(target, function trunc() {
  return Math.trunc(this);
});
