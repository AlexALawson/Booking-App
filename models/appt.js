const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


const ApptSchema = new Schema({
	apptDate: {
		type: Date,
		required: true
	}, 
	startTime: Date, 
	clientName: {
		type: String,
		required: true
	}, 
	description: String, 
	apptType: String
}); 

module.exports = mongoose.model('Appt', ApptSchema); 