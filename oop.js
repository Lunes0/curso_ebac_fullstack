function Animal(nome) {
    this.nome = nome;
    this.emitirSom = function() {
        console.log(this.nome + ' faz um som.');
    };
}

function Cachorro(nome) {
    Animal.call(this, nome);
    this.emitirSom = function() {
        console.log(this.nome + ' late: Au Au!');
    };
}

function Gato(nome) {
    Animal.call(this, nome);
    this.emitirSom = function() {
        console.log(this.nome + ' mia: Miau!');
    };
}

const cachorro1 = new Cachorro('Rex');
const gato1 = new Gato('Mimi');
const gato2 = new Gato('Luna');

cachorro1.emitirSom();
gato1.emitirSom();
gato2.emitirSom();