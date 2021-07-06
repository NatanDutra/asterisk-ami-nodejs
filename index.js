const app = require("express")();
const http = require("http").createServer(app);
const asteriskManager = require("asterisk-manager");
const connection = require("./secure_data/connection")

let ami = asteriskManager(connection.port, connection.host, connection.username, connection.password);

ami.on("peersstatus", async(evt) => {
    console.log(JSON.stringify(evt));
})

http.listen(5000, function() {
    console.log("App rodando na porta 5000")
})