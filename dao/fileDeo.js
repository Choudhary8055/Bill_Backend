const moduleLable = require('../model/Labels');



exports.sentToDB = async (data) => {
     return (storedData = await TaskModel.insertMany(data));
	
};