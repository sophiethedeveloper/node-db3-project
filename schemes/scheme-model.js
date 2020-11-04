// scheme-model
const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first()
}

function findSteps() {
    return console.log('wired')
}

function add() {
    return console.log('wired')
}

function update() {
    return console.log('wired')
}

function remove() {
    return console.log('wired')
}

