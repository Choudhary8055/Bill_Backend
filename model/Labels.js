const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	lable: {
		type: String,
		require: true
	},
	amount: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Lables', ProductSchema);
