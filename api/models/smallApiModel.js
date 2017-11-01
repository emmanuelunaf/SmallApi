'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var UserSchema  = new Schema({
	name: {
		type: String,
		required: 'The name for a new user is required'
	},
	_is: {
		type: String,
		required: 'The IS is required for a new user'
	},
	imei: {
		type: String,
		default: null
	}
});

var EventSchema = new Schema({
	description: {
		type: String,
		required: 'Description of event is required'
	},
	bgcolor: {
		type: String,
		default: "FFFFFF"
	},
	fgcolor: {
		type: String,
		default: "000000"
	},
	invitados:[],
	asistentes:[],
	fecha: {
		type:Date,
		default:Date.now
	},
	img: String,
	location: String
});

module.exports = mongoose.model('Tasks', TaskSchema);

module.exports = mongoose.model('Users', UserSchema);

module.exports = mongoose.model('Events', EventSchema);