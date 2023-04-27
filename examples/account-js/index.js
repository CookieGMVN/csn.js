const csnjs = require("csn.js");

const CSNClient = new csnjs.Client();

CSNClient.on("login", async function() {
    const song = await client.search.song("Shape of you");
    const links = await song[0].getAudioUrl();
    console.log(links);
});

CSNClient.login({ email: "Your email", password: "Your password" });