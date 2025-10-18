const Task = require('../models/Task');
const TaskStatus = require('../models/TaskStatus');

class TaskService {
  constructor(repository) {
    this.repository = repository;
  }

  create(title, description, dueDate) {
    if (!title || title.trim() === '') {
      throw new Error('Title is required');
    }

    const task = new Task(null, title, description, dueDate);
    return this.repository.save(task);
  }

  list(status) {
    const validStatuses = Object.values(TaskStatus);
    if (status && !validStatuses.includes(status)) {
      throw new Error(`Invalid status. Valid values: ${validStatuses.join(', ')}`);
    }

    return this.repository.findAll(status);
  }

  updateStatus(id, status) {
    if (!Object.values(TaskStatus).includes(status)) {
      throw new Error('Invalid status');
    }

    const task = this.repository.findById(id);
    if (!task) {
      throw new Error('Task not found');
    }

    task.status = status;
    return this.repository.save(task);
  }

  delete(id) {
    const deleted = this.repository.delete(id);
    if (!deleted) {
      throw new Error('Task not found');
    }
  }

  listOverdue() {
    const today = new Date();
    return this.repository.findOverdue(today);
  }
}

module.exports = TaskService;