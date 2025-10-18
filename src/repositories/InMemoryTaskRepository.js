const ITaskRepository = require('./ITaskRepository');
const TaskStatus = require('../models/TaskStatus');

class InMemoryTaskRepository extends ITaskRepository {
  constructor() {
    super();
    this.store = [];
    this.currentId = 1;
  }

  save(task) {
    if (!task.id) {
      task.id = this.currentId++;
      this.store.push(task);
    } else {
      const index = this.store.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.store[index] = task;
      }
    }
    return task;
  }

  findAll(status) {
    if (status) {
      return this.store.filter(t => t.status === status);
    }
    return [...this.store];
  }

  findById(id) {
    return this.store.find(t => t.id === id) || null;
  }

  delete(id) {
    const index = this.store.findIndex(t => t.id === id);
    if (index !== -1) {
      this.store.splice(index, 1);
      return true;
    }
    return false;
  }

  findOverdue(today) {
    return this.store.filter(t => {
      const dueDate = new Date(t.dueDate);
      return dueDate < today && t.status !== TaskStatus.DONE;
    });
  }
}

module.exports = InMemoryTaskRepository;