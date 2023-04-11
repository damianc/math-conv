# `math-conv`

Adds new method - `Math.conv()`, converting numbers between different numeral systems.

```
Math.conv(sourceSystem, targetSystem, value)
```

## Installation

```
npm i -P math-conv
```

## Examples

```
Math.conv(Math.DEC, Math.HEX, 24)
// '18'

Math.conv(Math.HEX, Math.OCT, 18)
// '30'

Math.conv(Math.DEC, Math.OCT, 24)
// '30'
```

## Built-ins

* `Math.BIN` for base `2`
* `Math.OCT` for base `8`
* `Math.DEC` for base `10`
* `Math.HEX` for base `16`