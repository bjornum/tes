import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Task 1', done: false },
      { id: 2, title: 'Task 2', done: false },
      { id: 3, title: 'Task 3', done: false },
    ],
    myName: 'Bjorn',
  }),
  getters: {
    getTasks() {
      return this.tasks;
    },
  },
  actions: {
    addTask(title) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title,
        done: false,
      });
    },
  },
});
