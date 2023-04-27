# CSN.JS

A library that wraps all of Chiasenhac's API.

## Installation

```sh
npm i csn.js
or
yarn add csn.js
```

For further documentation, please visit [docs page](https://csnjs.nezukobot.vn/).

## Example

For more examples, visit [here](./examples/)

CommonJS (no account):

```js
(async() => {
    const csnjs = require("csn.js");

    const client = new csnjs.Client();

    const song = await client.search.song("Shape of you");
    const links = await song[0].getAudioUrl();

    console.log(links);
})();
```

CommonJS (with account):

```js
const csnjs = require("csn.js");

const client = new csnjs.Client();

CSNClient.on("login", async function() {
    const song = await client.search.song("Shape of you");
    const links = await song[0].getAudioUrl();
    console.log(links);
});

CSNClient.login({ email: "Your email", password: "Your password" });
```

Typescript/ESM/ES (no account):

```ts
import * as csnjs from "csn.js";

(async() => {
    const client = new csnjs.Client();

    const song = await client.search.song("Shape of you");
    const links = await song[0].getAudioUrl();

    console.log(links);
})();
```

Typescript/ESM/ES (with account):

```ts
import * as csnjs from "csn.js";

const client = new csnjs.Client();

CSNClient.on("login", async function() {
    const song = await client.search.song("Shape of you");
    const links = await song[0].getAudioUrl();
    console.log(links);
});

CSNClient.login({ email: "Your email", password: "Your password" });
```

## License

Published with MIT license.
