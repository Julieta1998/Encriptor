const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const rightInfo = document.getElementById("rightInfo");
const muneco = document.getElementById("muneco");
const right = document.getElementById("right");


let remplazar = [
    ['e', 'enter'], // indice 0
    ['i', 'imes'], // indice 1
    ['a', 'ai'], // indice 2
    ['o', 'ober'], // indice 3
    ['u', 'ufat'], //indice 4
];

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muneco.classList.add("oculto");
    ingresoTexto.value = "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}


botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText){
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
            };
        };
        return newText;
    }
    /*const textoEncriptado = encriptar(texto);*/

    remplace(encriptar(texto));
    
    mensajeFinal.innerHTML = encriptar(texto);


});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0])
            };
        };
        return newText;
    }    
    remplace(desencriptar(texto));

});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);    
    alert('Texto copiado en portapapeles');
    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();

})


