const validarID= /\d+ID\b/;

console.log(validarID.test("sedeaID"));
console.log(validarID.test("sedea"));
console.log(validarID.test("87ID"));
console.log(validarID.test("87"));