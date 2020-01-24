express = require('express') ; 


const Input = require('./proj-model');

const router = express.Router(); 

router.get('/', (req, res) => { 
    Input.getProj()
    console.log(Proj)
    .then(proj => { 
        res.status(200).json(proj); 
    })
    .catch(proj => { 
        console.log(proj); 
        res.status(500).json({errorMessage: "error getting project"})
    })
})