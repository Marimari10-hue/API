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
        curso:"Design"
    },
    {
        id: 3,
        curso:"Engenheiro de sortware"
    }
];
const professor = [
    {
        id: 1,
        nome:"Ruan Pedro"
        diciplina: "Desenvolvimento de Jogos"
    },
    {
        id: 2,
        nome:"Aline Rodriguez"
        diciplina:"Design"
    },
    {
        id: 3,
        nome:"Carlota Joaquina"
        diciplina:"Engenheiro de sortware"
    }
];

const escola = {
    nome: "Iris High Technology",
    cidade: "Recife",
    segmento: "Tecnologia"
};

// ====================
// SERVIDOR
// ====================

const servidor = http.createServer((req, res) => {

    // Permite acesso da página HTML
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Define que a resposta será JSON
    res.setHeader("Content-Type", "application/json");

    // Rota inicial
    if (req.url === "/") {

        res.end(JSON.stringify({
            mensagem: "Bem-vindo à API da Escola"
        }));

    }

    // Rota alunos
    else if (req.url === "/alunos") {

        res.end(JSON.stringify(alunos));

    }

    // Rota produtos
    else if (req.url === "/curso") {

        res.end(JSON.stringify(produtos));

    }

    // Rota empresa
    else if (req.url === "/empresa") {

        res.end(JSON.stringify(empresa));

    }

    // Rota não encontrada
    else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            erro: "Rota não encontrada"
        }));

    }

});

// Inicia servidor
servidor.listen(3000, () => {

    console.log("🚀 API rodando!");
    console.log("http://localhost:3000");

});