const db = require('../data/db.config.js')

module.exports = {
    getProj,
    getAll, 
    getResc, 
    getTasks, 
}

function getProj(){ 
    return db('Proj')
}


function getAll(id) {
    return db('Proj as P')
    .join('Tasks as T',  'T.project_id', 'P.id')
    // .join('Project_Resources as PR',  'PR.project_id', 'P.id')
    // .join('Proj as P', 'P.project_id', 'R.Resource_id')
    // .select('PR.task_id', 'P.Tasks', 'P.name', 'P.description', 'R.Resources', 'P.completed')
    .select('P.name', 'P.description', 'P.completed', 'T.description', 'T.notes', 'T.completed')
    .where('T.project_id', id)

}
function getTasks(){
    return db('Tasks')
}

function getResc() { 
    return db('Resc'); 
}