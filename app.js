const express = require('express');
const app = express();
// const Label = require('./model/Labels');
const cors = require('cors');

require('./connection/config');
app.use(express.json());
app.use(cors());


app.use(require('./routes/lable'));


//Labels Api

//Update Api

// app.put('/update/:id', async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const data = await Label.findOne({ _id: id });
// 		let oldDataResponse;
// 		if (data) {
// 			const olddata = new preData({
// 				lable: data.lable,
// 				amount: data.amount,
// 				updatefrom: id
// 			});

// 			oldDataResponse = await olddata.save();
// 		}

// 		const updated = await Label.findByIdAndUpdate(id, req.body, { new: true });

// 		res.status(200).json({ success: true, updated, oldDataResponse });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// });

// //Search Api
//searchByLable
// app.get('/serach/:lable', async (req, res) => {
// 	try {
// 		const { lable } = req.params;

// 		const searchData = await Label.find({ lable });

// 		res.status(200).json({ success: true, searchData });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// });


// app.get('/getlable', async (req, res) => {
// 	try {
// 		const data = await Label.find();
// 		res.status(200).json(data);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// });

// app.get('/getolddata', async (req, res) => {
// 	try {
// 		const data = await preData.find();
// 		res.status(200).json(data);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// });  

// app.get('/getDataById/:id', async (req, res) => {
// 	try {
// 		const { id } = req.params;

// 		const data = await Label.findOne({ _id: id });
// 		res.status(200).json({
// 			success: true,
// 			data
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// });

// // app.delete('/delete', async (req, res) => {
// // 	try {
// // 		const deleted = await Label.deleteMany();

// // 		res.status(200).json(deleted);
// // 	} catch (error) {
// // 		console.log(error);
// // 		res.status(400).json(error);
// // 	}
// // });

// app.get('/serachbydate/:date', async (req, res) => {
// 	try {
// 		const { date } = req.params;

// 		const searchData = await Label.find({ createdAt: date });

// 		res.status(200).json({ success: true, searchData });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// });
app.listen(3500);
