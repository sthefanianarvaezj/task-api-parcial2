class TaskDTO {
  constructor(task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.dueDate = task.dueDate;
    this.status = task.status;
  }
}

module.exports = TaskDTO;
