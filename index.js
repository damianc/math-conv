(function () {
  Object.defineProperties(Math, {
    BIN: { value: 2 },
    OCT: { value: 8 },
    DEC: { value: 10 },
    HEX: { value: 16 }
  });

  Object.defineProperty(Math, 'conv', {
    value: conv
  });

  function conv(_from, _to, value) {
    const decValue = parseInt(value, _from);
    return decValue.toString(_to);
  }
})()