#!/usr/bin/env node

const emoji = require('emoji.json');

async function displayEmoji() {
  const { AutoComplete } = require('enquirer');

  const prompt = new AutoComplete({
    name: 'emoji',
    message: 'Pick emoji',
    limit: 5,
    choices: emoji.map((e) => ({ name: e.name, value: e.char })),
  });

  await prompt
    .run()
    .then((answer) => {
      for (const e of emoji) {
        e.name == answer && console.log(e.char);
      }
    })
    .catch(console.error);
}
displayEmoji();
