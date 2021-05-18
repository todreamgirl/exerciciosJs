function verificaTipoDado(dado) {
    if (typeof dado === 'string') {
        console.log(" Este dado é uma string");
    } else if (typeof dado === 'number') {
        console.log("Esse dado é um number");
    } else if (typeof dado === 'boolean') {
        console.log("Esse dado é um boolean");
    }
}

verificaTipoDado(28);
verificaTipoDado(true);
verificaTipoDado("Jacqueline");