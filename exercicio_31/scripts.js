let nums = [1, 2, 3, 4, 5, 6, 7];
let nums2 = [2, 9, 7];

function verificaElementos(arr) {
    if (arr.length >= 5) {
        console.log("Muitos Elementos");
    } else {
        console.log("Poucos Elementos");
    }
}

verificaElementos(nums);
verificaElementos(nums2);