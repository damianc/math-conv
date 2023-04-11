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
Math.conv(Math.DEC, Math.BIN, 4)
// '100'

Math.conv(Math.BIN, Math.DEC, 100)
// '4'
```

## Specialized Methods

The `Math.conv` contains a getter that provides an interface to utilize specialized methods:

* `binToDec()`
* `decToBin()`
* `hexToDec()`
* `decToHex()`
* `binToHex()`
* `hexToBin()`

```
Math.conv.decToBin(4)
// '100'

Math.conv.binToDec(100)
// '4'
```

## Custom Systems

To add a new system use `Math.conv.addSystem()` method:

```
Math.conv.addSystem(code, base)
```

First line in the code below will cause new methods will be accessible:

* value-taking: `octToBin()`, `octToDec()` and `octToHex()`
* value-giving: `binToOct()`, `decToOct()` and `hexToOct()`

```
Math.conv.addSystem('oct', 8);

const DEC = 24;

Math.conv.decToHex(DEC)
// '18'

Math.conv.hexToOct(18)
// '30'

Math.conv.decToOct(DEC)
// '30'
```

## Built-ins

### Constants

* `Math.BIN` for base `2`
* `Math.DEC` for base `10`
* `Math.HEX` for base `16`

### Methods

