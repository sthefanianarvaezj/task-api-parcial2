const express = require('express');
const InMemoryTaskRepository = require('./repositories/InMemoryTaskRepository');
const TaskService = require('./services/TaskService');
const createTaskRouter = require('./controllers/taskRoutes');

// Configurar dependencias (Dependency Injection)
const repository = new InMemoryTaskRepository();
const taskService = new TaskService(repository);
const taskRouter = createTaskRouter(taskService);

// Crear aplicación Express
const app = express();
app.use(express.json());
app.use('/api', taskRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📋 API available at http://localhost:${PORT}/api/tasks`);
});

module.exports = app;
