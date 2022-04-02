#!/usr/bin/env node

const emoji = require('emoji.json')
const { AutoComplete } = require('enquirer')

function displayEmoji () {
  const prompt = new AutoComplete({
    name: 'emoji',
    message: 'Pick emoji',
    limit: 5,
    choices: emoji.map(({ name, char }) => ({ name, value: char }))
  })

  prompt
    .run()
    .then((answer) => emoji.find(({ name }) => name === answer))
    .catch(console.error)
}
displayEmoji()
