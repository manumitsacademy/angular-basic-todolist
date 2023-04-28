import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskObj: any;
  @Input() index: any;
  @Output() delEvent = new EventEmitter();
  @Output() doneTask = new EventEmitter();
  @Output() undoTask = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  del() {
    this.delEvent.emit(this.index);
  }

  done() {
    this.doneTask.emit(this.index);
  }

  undo() {
    this.undoTask.emit(this.index);
  }

}
