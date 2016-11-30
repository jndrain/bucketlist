var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true},
	wish_list: [{type: mongoose.Schema.Types.ObjectId, ref: 'Wish'}]
})

mongoose.model('User', UserSchema)