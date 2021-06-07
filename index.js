const tmi = require("tmi.js")
const channel = "slovakmax"

const config = {
    options: { 
        debug: true
    },
    connection: { 
        cluster: "aws",
        reconnect: true
    },
    identity: { 
        username: "slovakmax",
        password: "oauth:zuv167g4028cxjztxju8e6nt2vwd0f"
    },
    channels: [channel]
}

const client = new tmi.client(config)
client.connect();

client.on("Connected!", (adress, port) => {
    client.action(channel, `the bot has connected on` + adress + ":" + port)
})

client.on("chat", (channel, user, message, self) => {
    if (message == "!hi") {
        client.say(channel, "hey pal.")
    }
})