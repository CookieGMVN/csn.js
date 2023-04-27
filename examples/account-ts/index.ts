import * as csnjs from "csn.js";

const client = new csnjs.Client({});

client.on("login", async function() {
    const song = await client.search.song("Shape of you");
    const links = await song[0].getAudioUrl();
    console.log(links);
});

client.login({ email: "Your email", password: "Your password" });