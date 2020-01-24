const db = require('../data/db.config.js')

module.exports = {
    getProj
}

function getProj(){ 
    return db('Proj')
}