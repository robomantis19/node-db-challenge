const db = require('../data/db.config.js')

module.exports = {
    getProj,

    getResc, 
    getTaskId, 
}

function getProj(){ 
    return db('Proj')
}


function getTaskId(id) {
    return db('Project_Resources as PR')
    .join('Proj as P', 'P.project_id', 'PR.project_id')
    .join('Resc as R', 'R.Resource_id', 'PR.resource_id')
    // .join('Proj as P', 'R.Resources', 'PR.task_id')
    .select('PR.task_id', 'P.Tasks', 'P.name', 'P.description',  'P.completed')
    .where('P.project_id', id)
}

function getResc() { 
    return db('Resc'); 
}