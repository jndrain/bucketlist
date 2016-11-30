var mongoose = require('mongoose');

var WishSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	wish_creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	wish_joiner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

},
{
	timestamps: true

})

mongoose.model('Wish', WishSchema)