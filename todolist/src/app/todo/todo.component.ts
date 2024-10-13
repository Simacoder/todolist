// src/app/todo/todo.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Task {
  title: string;
  dueDate: string; // or Date if you want to use Date objects
  priority: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: Task = {
    title: '',
    dueDate: '',
    priority: 'Medium',
    completed: false
  };
  
  tasks: Task[] = [];

  addTask(): void {
    if (this.newTask.title.trim() && this.newTask.dueDate) {
      this.tasks.push({ ...this.newTask, completed: false });
      this.newTask = { title: '', dueDate: '', priority: 'Medium', completed: false };
    }
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'black';
    }
  }
}
