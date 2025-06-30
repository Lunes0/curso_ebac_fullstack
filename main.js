class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    aprovado() {
        return this.nota >= 6;
    }
}

const alunos = []

alunos.push(new Aluno("João", 7));
alunos.push(new Aluno("Maria", 5));
alunos.push(new Aluno("Pedro", 6));
alunos.push(new Aluno("Ana", 9));
alunos.push(new Aluno("Lucas", 5));
alunos.push(new Aluno("Carla", 10));
alunos.push(new Aluno("Fernanda", 4));

const aprovados = alunos.filter(aluno => aluno.aprovado());

console.log(aprovados)