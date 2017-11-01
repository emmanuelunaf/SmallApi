'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
var User = mongoose.model('Users');
var Event = mongoose.model('Events')

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
	
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


exports.list_all_users = function(req, res) {
	User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
}

exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.list_all_events = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.list_today_event = function(req, res) {
	var d = new Date();
	d.setUTCHours(0,0,0,0);
	
  Event.findOne({fecha:d}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.create_event = function(req, res) {
  var new_event = new Event(req.body);
  new_event.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.add_guest = function(req, res) {
	Event.findOneAndUpdate({_id: req.params.eventId}, {$push:{asistentes:req.params.userId}}, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.read_an_event = function(req, res) {
  Event.findById(req.params.eventId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_an_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_an_event = function(req, res) {
  Event.remove({
    _id: req.params.eventId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


exports.remove_guest = function(req, res) {
	
};

