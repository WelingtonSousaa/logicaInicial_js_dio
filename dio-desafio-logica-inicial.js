
// Gerar uma interface de leitura para receber o nome do Herói
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gerar valor aleatório de XP entre 1 e 1200
function geradorDeXp() {
    var valorAleatorio = Math.random();
    var valorNoIntervalo = valorAleatorio * 11000;
    var valorFinal = Math.floor(valorNoIntervalo) + 1;
    return valorFinal;
}

// Definir a Classificação do Herói
function determinarNivel(xp) {
    var nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return nivel;
}


(function main() {
    rl.question('Digite o nome do Herói: ', (nome) => {
        var xp = geradorDeXp();
        var nivel = determinarNivel(xp);
        console.log(`Quantidade de XP atribuída: ${xp}`)
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        rl.close();
    });
})();

