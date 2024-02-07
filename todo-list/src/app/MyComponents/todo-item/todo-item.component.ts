import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // taking from parent
  @Input() todo: Todo;
  @Input() i: number;
  //paasing to parent
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  constructor() {
    this.i = 0;
    this.todo = { sno: 0, title: '', desc: '', active: false };
  }


  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onclick event triggered")
  }

  onCheckboxClick(todo: any) {
    this.todoCheckbox.emit(todo);
  }
}
