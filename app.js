const express = require('express');
const app = express();
// const Label = require('./model/Labels');
const cors = require('cors');

require('./config/config');
app.use(express.json());
app.use(cors());


app.use(require('./api/external/lableController'));



// // app.delete('/delete', async (req, res) => {
// // 	try {
// // 		const deleted = await Label.deleteMany();

// // 		res.status(200).json(deleted);
// // 	} catch (error) {
// // 		console.log(error);
// // 		res.status(400).json(error);
// // 	}
// // });


app.listen(3500);
