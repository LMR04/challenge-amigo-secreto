let amigos = []

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    } else{
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let listaHTML = document.createElement('li');
        listaHTML.textContent = amigo;
        lista.appendChild(listaHTML);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultadoHTML = document.querySelector('#resultado');
    document.getElementById('listaAmigos').innerHTML = '';
    resultadoHTML.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
}