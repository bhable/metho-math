Metho Math

A set of wrapper functions makeing JS' Math object available for use with
Metho. This is just a 1:1 interface to Math's methods, now new, updated
or omited methods:

Usage

import {
abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos,
cosh, exp, expm1, floor, fround, hypot, imul, log, log10, log1p, log2, max,
min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc
} from "metho-math"

// abs
-3[abs] // 3

// acos
-1[acos] // 3.141592653589793

// acosh
2[acosh] // 1.3169578969248166

// asin
1[asin] // 1.5707963267948966 (pi/2)

// asinh
1[asinh] // 0.881373587019543

// atan
1[atan] // 0.7853981633974483

// atan2
15[atan2(90)] // 0.16514867741462683

// atanh
0.5[atanh] // 0.5493061443340548

// cbrt
64[cbrt] // 4

// ceil
7.004[ceil] // 8

// clz32
2[clz32] // 30

// cos
Math.PI[cos] // -1

// cosh
1[cosh] // 1.5430806348152437

// exp
1[exp] // 2.718281828459045

// expm1
1[expm1] // 1.718281828459045

// floor
45.05[floor] // 45

// fround
5.05[fround] // 5.050000190734863

// hypot
3[hypot(4)] // 5

// imul
3[imul(5)] // 15

// log
10[log] // 2.302585092994046

// log10
1e6[log10] // 6

// log1p
1[log1p] // 0.6931471805599453

// log2
3[log2] // 1.584962500721156

// max
[1, 5, 3][max] // 5
[1, 5, 3][max(7, 4)] // 4
5[max(2, 1)] // 5

// min
[1, 5, 3][min] // 1
[1, 5, 3][min(7, 4)] // 1
5[min(2, 1)] // 1

// pow
2[pow(10)] // 1024

// random
1000[random] // random \* 1000

// round
20.49[round] // 20

// sign
3[sign] // 1

// sin
(Math.PI / 2)[sin] // 1

// sinh
1[sinh] // 1.1752011936438014

// sqrt
9[sqrt] // 3

// tan
1[tan] // 1.5574077246549023

// tanh
1[tanh] // 0.7615941559557649

// trunc
13.37[trunc] // 13
