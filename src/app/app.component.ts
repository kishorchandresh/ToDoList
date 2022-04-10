import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoListData:any  = [];
  doneListData:any  = [];
  title = 'ToDoList';

  addNewTaskInToDoList(toDoFormData:any){
    this.toDoListData.push(toDoFormData);

  }

  addToDoneList(toDoFormData:any){
    this.doneListData.push(toDoFormData);
  }
}
