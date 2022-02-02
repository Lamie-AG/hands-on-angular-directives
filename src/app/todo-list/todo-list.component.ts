import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos = [
    { checked: true, text: "Installing Angular", class: "important"},
    { checked: false, text: "Getting started with Angular", class: "important"},
    { checked: true, text: "Having a coffee", class: "super-important"},
    { checked: false, text: "Pet my cat", class: "not-important"},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
