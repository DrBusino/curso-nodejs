const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Bem vindo ao meu site");
  } else if (req.url === "/about") {
    res.end("Sobre mim");
  } else {
    res.end(`<h1>Ops</h1>
        <p>Acho que você está no lugar errado</p>
        <a href="/">Pagina principal</a>`);
  }
});

server.listen(3000);
