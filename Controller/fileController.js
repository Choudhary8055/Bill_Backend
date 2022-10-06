
const csv = require('csvtojson');
const { storeToDb } = require('../dao/fileDeo');

exports.uploadCsv = async (req,res)=>{
    const dataFromCsv = [];
    try{
        const jsonData = await csv().fromFile(req.file.path);
        for(let i=0; i<jsonData.length; i++){
            let createJSON = {};
            createJSON.lable = jsonData[i]['lable'];
            createJSON.amount = jsonData[i]['amount'];
           dataFromCsv.push(createJSON);
        }
       res.status(200).json(await storeToDb(dataFromCsv));
    }catch(err){
     console.log(err);
     return res.status(400).json({message: err});

    }
}

