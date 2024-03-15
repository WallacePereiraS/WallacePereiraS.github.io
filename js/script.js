const textoInicial = document.querySelector(".texto__inicial")
const textoResultado = document.querySelector(".texto__resultado")
const figura = document.getElementById("figura")


const botaoEncriptar = () => {
    const textoEncriptado = criptografar(textoInicial.value)
    textoResultado.value = textoEncriptado
    textoInicial.value = ''
    figura.style.visibility = 'collapse'
}

const criptografar = (string) => {
    const resultado = string
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat')

    return resultado
}

const botaoDescriptar = () => {
    const descriptado = descriptografar(textoInicial.value)
    textoResultado.value = descriptado
    textoInicial.value = ''
    figura.style.visibility = 'collapse'
}

const descriptografar = (string) => {
    const resultado = string
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')

    return resultado
}

const botaoCopiar = () => {
    navigator.clipboard.writeText(textoResultado.value)
}