const validMethod = (name, reg, ms) => {
  $.validator.addMethod(
    name,
    function(value, element) {
      return this.optional(element) || reg(value);
    },
    ms
  );
};

export default validMethod;
