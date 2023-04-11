(function () {
  (function () {
    const systems = {};

    function addSystem(code, base, addMathConstant = false) {
      code = code.toLowerCase();

      if (!(code in systems)) {
        systems[code] = base;

        if (addMathConstant) {
          Object.defineProperty(Math, code.toUpperCase(), {
            value: base
          });
        }
      }
    }

    function conv(_from, _to, value) {
      const decValue = parseInt(value, _from);
      return decValue.toString(_to);
    }

    Object.defineProperty(conv, 'addSystem', {
      value: addSystem
    });

    const proxy = new Proxy(conv, {
      get(target, key) {
        const systemsCodes = Object.keys(systems);
        const systemsCapCodes = systemsCodes.map(
          code => code[0].toUpperCase() + code.slice(1)
        );
        const methodNameRe = new RegExp(
          '(' + systemsCodes.join('|') + ')' +
          'To' +
          '(' + systemsCapCodes.join('|') + ')'
        );

        if (methodNameRe.test(key)) {
          const matchedSystems = key.match(methodNameRe);

          if (matchedSystems) {
            const [, fromCode, toCode] = matchedSystems;
            const fromBase = systems[fromCode];
            const toBase = systems[toCode.toLowerCase()];

            if (typeof fromBase !== 'undefined' && typeof toBase !== 'undefined') {
              return value => Math.conv(fromBase, toBase, value);
            }
          } else {
            return Reflect.get(target, key);
          }
        }

        return Reflect.get(target, key);
      }
    });

    Object.defineProperty(Math, 'conv', {
      value: proxy
    });
  })()

  // add built-in systems
  Math.conv.addSystem('bin', 2, true);
  Math.conv.addSystem('dec', 10, true);
  Math.conv.addSystem('hex', 16, true);
})()