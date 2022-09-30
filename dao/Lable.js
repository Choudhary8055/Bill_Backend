const Label = require('../model/Labels');

const preData = require('../model/prevData');

exports.addLable = async (req, resp) => {
	try {
		let user = new Label({
			lable: req.body.lable,
			amount: req.body.amount
		});

		let result = await user.save();

		console.log(result);
		resp.send(result);
	} catch (error) {
		console.log(error);
		resp.status(400).json(error);
	}
};

exports.getData = async (req, res) => {
	try {
		const data = await Label.find();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};


exports.updateById = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await Label.findOne({ _id: id });
		let oldDataResponse;
		if (data) {
			const olddata = new preData({
				lable: data.lable,
				amount: data.amount,
				updatefrom: id
			});

			oldDataResponse = await olddata.save();
		}

		const updated = await Label.findByIdAndUpdate(id, req.body, { new: true });

		res.status(200).json({ success: true, updated, oldDataResponse });
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};

exports.deleteLable = async (req, res)=>{
	try{
		
		const {id} = req.params.id;
		// const deleteData = await Labels.deleteOne({'id':tempid});
        console.log(deleteData);
		const deleteData = await Label.deleteOne({ _id: id });
		res.status(200).json(deleteData);

	}catch(error){
     res.status(400).json(error);
	}
     
}

 
exports.searchByLable = async (req, res) => {
		try {
			const { lable } = req.params;
	
			const searchData = await Label.find({ lable });
	
			res.status(200).json({ success: true, searchData });
		} catch (error) {
			console.log(error);
			res.status(400).json(error);
		}
	};

exports.searchByDate =  async (req, res) => {
		try {
			const { date } = req.params;
	
			const searchData = await Label.find({ createdAt: date });
	
			res.status(200).json({ success: true, searchData });
		} catch (error) {
			console.log(error);
			res.status(400).json(error);
		}
	};

	exports.getOldData =  async (req, res) => {
			try {
				const data = await preData.find();
				res.status(200).json(data);
			} catch (error) {
				console.log(error);
				res.status(400).json(error);
			}
		};

    exports.getDataById = async (req, res) => {
				try {
					const { id } = req.params;
			
					const data = await Label.findOne({ _id: id });
					res.status(200).json({
						success: true,
						data
					});
				} catch (error) {
					console.log(error);
					res.status(400).json(error);
				}
			};