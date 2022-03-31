#!/usr/bin/env node

const emoji = require('emoji.json');
const { AutoComplete } = require('enquirer');

function displayEmoji() {
  const prompt = new AutoComplete({
    name: 'emoji',
    message: 'Pick emoji',
    limit: 5,
    choices: emoji.map(({ name, char }) => ({ name: name, value: char })),
  });

  prompt
    .run()
    .then((answer) => emoji.find((e) => e.name === answer))
    .catch(console.error);
}
displayEmoji();
