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

function findSteps(id) {
    return db('schemes as sc')
    .join('steps as st', 'sc.id', 'st.scheme_id')
    .select('sc.id', 'sc.scheme_name', 'st.step_number', 'st.instructions' )
    .where({'sc.id': id})
    .orderBy('st.step_number')
    
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

