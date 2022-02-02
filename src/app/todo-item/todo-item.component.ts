import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() public checked!: boolean;
  @Input() public text!: string;
  @Input() public class!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
