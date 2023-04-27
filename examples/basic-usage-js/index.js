(async() => {
const csnjs = require("csn.js");

const client = new csnjs.Client();
const song = await client.search.song("Shape of you");
const audioURL = song[0].getAudioUrl();
const lyrics = song[0].getLyrics();

console.log(audioURL);
console.log(lyrics);
})();