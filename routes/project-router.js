express = require('express') ; 


const Input = require('./proj-model');

const router = express.Router(); 

router.get('/proj', (req, res) => { 
    Input.getProj()
    
    .then(proj => { 
        res.status(200).json(proj); 
    })
    .catch(proj => { 
        console.log(proj); 
        res.status(500).json({errorMessage: "error getting project"})
    })
})
router.get('/tasks', (req, res) => { 
    Input.getTasks()
    
    .then(proj => { 
        res.status(200).json(proj); 
    })
    .catch(proj => { 
        console.log(proj); 
        res.status(500).json({errorMessage: "error getting project"})
    })
})
router.get('/resc', (req, res) => { 
    Input.getResc()
    
    .then(proj => { 
        res.status(200).json(proj); 
    })
    .catch(proj => { 
        console.log(proj); 
        res.status(500).json({errorMessage: "error getting project"})
    })
})
router.get('/all/:id', (req, res) => { 
    Input.getAll(req.params.id)
    .then(proj => { 
        res.status(200).json(proj);
    })
    .catch(proj => { 
        console.log(proj);
        res.status(500).json({errorMessage: 'error getting all data'})
    })
})

module.exports = router;