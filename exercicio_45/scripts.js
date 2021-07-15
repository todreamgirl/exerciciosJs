const validaNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaNomeUsuario.test("todream_girl"));
console.log(validaNomeUsuario.test("jacque-19"));
console.log(validaNomeUsuario.test("ab"));
console.log(validaNomeUsuario.test("5"));
