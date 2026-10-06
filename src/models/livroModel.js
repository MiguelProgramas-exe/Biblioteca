let tarefas = [
 { id: 2, titulo: 'Estudar', feita: 0},
];
// Funções para manipular as tarefas
const getTodasTarefas = () => tarefas;
const getTarefaId = (id) => tarefas.find(task => tarefas.id === id);
const getFeitas = () => {
 return tarefas.find(item => item.feita === 1);
};
const criarTarefa = (taskData) => {
 const newTask = {
 id: tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) + 1 : 1,
 title: taskData.titulo,
 completed: taskData.feita || false
 };
 tarefas.push(newTask);
 return newTask;
};
module.exports = {
 getTodasTarefas ,
 getTarefaId ,
 getFeitas ,
 criarTarefa
}