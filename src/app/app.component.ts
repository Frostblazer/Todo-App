import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  listOfTasks: any[] = [];

  addTask(task: string) {
    console.warn(task);
    this.listOfTasks.push({ id: this.listOfTasks.length, name: task });
    console.warn(this.listOfTasks);
  }

  removeTask(id: number) {
    this.listOfTasks = this.listOfTasks.filter((item) => item.id !== id);
  }
}
