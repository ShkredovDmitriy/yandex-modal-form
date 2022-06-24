const maskPhone = id => {
  var element = document.querySelector(id);
  var maskOptions = { mask: "+{7}(900)0000000" };
  var mask = IMask(element, maskOptions);
};

const maskDate = id => {
  var element = document.querySelector(id);
  var maskOptions = {
    mask: Date,
    overwrite: true,
    autofix: true,
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: IMask.MaskedRange,
        from: 1930,
        to: 2029,
        maxLength: 4
      }
    }
  };
  var mask = IMask(element, maskOptions);
};

const maskTime = id => {
  var element = document.querySelector(id);
  var maskOptions = {
    overwrite: true,
    autofix: true,
    mask: "HH:MM",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        placeholderChar: "HH",
        from: 0,
        to: 23,
        maxLength: 2
      },
      MM: {
        mask: IMask.MaskedRange,
        placeholderChar: "MM",
        from: 0,
        to: 59,
        maxLength: 2
      }
    }
  };
  var mask = IMask(element, maskOptions);
};

const maskPrice = id => {
  var element = document.querySelector(id);
  var maskOptions = {
    mask: Number,
    min: 1,
    max: 100000,
    scale: 2,
    normalizeZeros: true,
    padFractionalZeros: true,
    overwrite: true
    // autofix: true
  };
  var mask = IMask(element, maskOptions);
};

const maskNumbers = id => {
  var element = document.querySelector(id);
  var maskOptions = {
    mask: Number,
    // min: 1,
    // max: 9999999999,
    // scale: 0,
    // normalizeZeros: true,
    // padFractionalZeros: true,
    overwrite: true
    // autofix: true
  };
  var mask = IMask(element, maskOptions);
};

export { maskPhone, maskDate, maskTime, maskPrice, maskNumbers };
