const readline = require('readline-sync')
const state = require('./state.js')

function robot(){
    const content =  {
        maximumSentences: 7
    }
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    state.save(content)

    function askAndReturnSearchTerm() {
        return readline.question('Escreva a busca na Wikipedia: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Quem é', 'O que é', 'A historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }
}

module.exports = robot