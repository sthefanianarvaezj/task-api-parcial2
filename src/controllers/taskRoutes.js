const express = require('express');
const TaskDTO = require('../dto/TaskDTO');

function createTaskRouter(taskService) {
  const router = express.Router();

  // POST /tasks - Crea tarea
  router.post('/tasks', (req, res) => {
    try {
      const { title, description, dueDate } = req.body;
      const task = taskService.create(title, description, dueDate);
      const dto = new TaskDTO(task);
      res.status(201).json(dto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // GET /tasks?status=... - Lista/filtra
  router.get('/tasks', (req, res) => {
    try {
      const { status } = req.query;
      const tasks = taskService.list(status);
      const dtos = tasks.map(t => new TaskDTO(t));
      res.json(dtos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // PATCH /tasks/:id/status - Actualiza estado
  router.patch('/tasks/:id/status', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      const task = taskService.updateStatus(id, status);
      const dto = new TaskDTO(task);
      res.json(dto);
    } catch (error) {
      const statusCode = error.message === 'Task not found' ? 404 : 400;
      res.status(statusCode).json({ error: error.message });
    }
  });

  // DELETE /tasks/:id - Elimina
  router.delete('/tasks/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      taskService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  // GET /tasks/overdue - Vencidas (Opcional)
  router.get('/tasks/overdue', (req, res) => {
    try {
      const tasks = taskService.listOverdue();
      const dtos = tasks.map(t => new TaskDTO(t));
      res.json(dtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}

module.exports = createTaskRouter;