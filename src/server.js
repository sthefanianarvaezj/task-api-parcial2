const express = require('express');
const InMemoryTaskRepository = require('./repositories/InMemoryTaskRepository');
const TaskService = require('./services/TaskService');
const createTaskRouter = require('./controllers/taskRoutes');


const repository = new InMemoryTaskRepository();
const taskService = new TaskService(repository);
const taskRouter = createTaskRouter(taskService);


const app = express();
app.use(express.json());
app.use('/api', taskRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}/api/tasks`);
});

module.exports = app;
