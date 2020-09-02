import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import * as faker from 'faker';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoList = [];
  inProgressList = [];
  doneList = [];
  constructor() {
    this.toDoList = Array.from({ length: 5 }).map(() => faker.hacker.phrase())
    this.inProgressList = Array.from({ length: 5 }).map(() => faker.hacker.phrase())
    this.doneList = Array.from({ length: 5 }).map(() => faker.hacker.phrase())
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  onEntered(enter) {
    console.log('ee', enter);
  }
}
