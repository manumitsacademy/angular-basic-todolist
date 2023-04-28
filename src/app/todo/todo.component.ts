import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskValue: string = '';
  taskList: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    let taskObj = {
      val: this.taskValue,
      status: false
    };
    this.taskList.push(taskObj);
  }

  deleteTask(index: any) {
    this.taskList.splice(index, 1);
  }

  doneTask(index:any) {
    this.taskList[index].status = true;
  }

  undoTask(index: any) {
    this.taskList[index].status = false;
  }

}
