// Importa o módulo HTTP
const http = require("http");

// ====================
// DADOS
// ====================

const alunos = [
    {
        id: 1,
        nome: "Carla",
        idade: 15
    },
    {
        id: 2,
        nome: "Luis Eduardo",
        idade: 16
    },
    {
        id: 3,
        nome: "Julia",
        idade: 15
    }
];

const cursos = [
    {
        id: 1,
        curso: "Desenvolvimento de Jogos"
    },
    {
        id: 2,
        curso: "Design"
    },
    {
        id: 3,
        curso: "Engenharia de Software"
    }
];

const professor = {
    nome: "Ruan Pedro",
    disciplina: "Desenvolvimento de Jogos"
};

// ====================
// SERVIDOR
// ====================

const servidor = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    // Página inicial
    if (req.url === "/") {

        res.end(JSON.stringify({
            mensagem: "Bem-vindo à API da Escola"
        }));

    }

    // Alunos
    else if (req.url === "/alunos") {

        res.end(JSON.stringify(alunos));

    }

    // Cursos
    else if (req.url === "/cursos") {

        res.end(JSON.stringify(cursos));

    }

    // Professor
    else if (req.url === "/professor") {

        res.end(JSON.stringify(professor));

    }

    // Rota não encontrada
    else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            erro: "Rota não encontrada"
        }));

    }

});

servidor.listen(3000, () => {

    console.log("🚀 API rodando!");
    console.log("http://localhost:3000");

});