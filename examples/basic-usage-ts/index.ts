import * as csnjs from "csn.js";

(async() => {
    const client = new csnjs.Client({});

    const song = await client.search.song("Shape of you");
    const links = await song[0].getAudioUrl();

    console.log(links);
})();