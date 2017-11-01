'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/smallApiController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
	
  app.route('/users')
	.get(todoList.list_all_users)
	.post(todoList.create_user);
	
  app.route('/events')
	.get(todoList.list_all_events)
	.post(todoList.create_event);
	
  app.route('/events/today')
	.get(todoList.list_today_event);
	
  app.route('/events/:eventId')
	.get(todoList.read_an_event)
	.put(todoList.update_an_event)
	.delete(todoList.delete_an_event);
	
  

  app.route('/events/:eventId/:userId')
	.put(todoList.add_guest)
  
 
};