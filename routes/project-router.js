express = require('express') ; 


const Input = require('./proj-model');

const router = express.Router(); 

router.get('/', (req, res) => { 
    Input.getProj()
    
    .then(proj => { 
        res.status(200).json(proj); 
    })
    .catch(proj => { 
        console.log(proj); 
        res.status(500).json({errorMessage: "error getting project"})
    })
})
router.get('/projresc/:id', (req, res) => { 
    Input.getTaskId(req.params.id)
    
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

module.exports = router;