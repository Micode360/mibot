const router = require('express').Router();
let botModel = require('../models/botdata.model');



/*READ*/
//Finding a stored data throught it's id
router.route('/data').get((req,res)=>{
    botModel.find() //find is a mongoose method
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*ADD*/
router.route('/add').post((req,res)=>{
    const question = req.body.question;
    const answer = req.body.answer;

    const newBotData = new botModel({
       question,
       answer, 
    });

    newBotData.save()
    .then(()=> res.json('Bot knowledge enhanced'))
    .catch(err => res.status(400).json('Error'+ err));
});


/*UPDATE*/
router.route('/update').post((req,res)=>{
    botModel.findById(req.params.id)
    .then(data => {
        data.question = req.body.question;
        data.answer = req.body.answer;

        data.save()
        .then(()=> res.json('Bot knowledge updated'))
        .catch(err => res.status(400).json('Error'+ err));
    })

    .catch(err => res.status(400).json('Error'+ err));
});


/*DELETE*/
router.route((req,res)=>{
    botModel.findByIdAndDelete(req.params.id)
    .then(()=>res.json('File has benn deleted'))
    .catch(err => res.status(400).json('Error'+ err));
});




module.exports = router;