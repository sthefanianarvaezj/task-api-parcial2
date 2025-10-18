class ITaskRepository {
  save(task) {
    throw new Error('save() must be implemented');
  }

  findAll(status) {
    throw new Error('findAll() must be implemented');
  }

  findById(id) {
    throw new Error('findById() must be implemented');
  }

  delete(id) {
    throw new Error('delete() must be implemented');
  }

  findOverdue(today) {
    throw new Error('findOverdue() must be implemented');
  }
}

module.exports = ITaskRepository;