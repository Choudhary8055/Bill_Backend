const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const PrevDataSchema = mongoose.Schema({
	lable: {
		type: String,
		require: true
	},
	amount: {
		type: String
	},
	updatefrom: {
		type: String
	}
});

module.exports = mongoose.model('olddata', PrevDataSchema);
