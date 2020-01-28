const db = require('../data/db.config.js')

module.exports = {
    getProj,
    getAll, 
    getResc, 
    getTasks, 
    addProj,
    addTask, 
    addResc, 
    getPR, 
}

function getProj(){ 
    return db('Proj')
}
function addProj(input){
    return db('Proj')
    .insert(input)
    .then(([id]) => { 
        return getAll(id)
    });
}

function addTask(input){
    return db('Tasks')
    .insert(input)
    .then(([id]) => { 
        return getAll(id)
    });
}
function addResc(input){
    return db('Resc')
    .insert(input)
}




function getAll(id) {
    return db('Proj as P')
    .join('Tasks as T',  'T.project_id', 'P.id')
    .join('Resc as R')
    .join('Project_Resources as PR',  'PR.resource_id', 'R.id')
    // .join('Proj as P', 'P.project_id', 'R.Resource_id')
    // .select('PR.task_id', 'P.Tasks', 'P.name', 'P.description', 'R.Resources', 'P.completed')
    .select('P.name as Project_name', 'P.description as Project_description', 'P.completed', 'T.description as Task_description', 'T.notes as Task_notes', 'T.completed','R.name as Resource_name', 'R.description as Resource_description')
    .where('T.project_id', id)
    .where('PR.project_id', id)
    

}
function getPR(id){
    return db('Project_Resources as PR')
    .join('Resc as R', 'PR.resource_id', 'R.id')
    .join('Proj as P', 'PR.project_id', 'P.id')
    .select('PR.id', 'P.name', 'P.description', 'P.completed', 'R.name', 'R.description')
    .where('PR.project_id', id)
}
function getTasks(){
    return db('Tasks')
}

function getResc() { 
    return db('Resc'); 
}