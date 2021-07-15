const validaMarcas= /Marca: (Nike|Adidas|Puma|Asics)/;
console.log(validaMarcas.test("Marca: Nike"));
console.log(validaMarcas.test("New Ballance"));
console.log(validaMarcas.test("5465"));
console.log(validaMarcas.test("Marca: "));