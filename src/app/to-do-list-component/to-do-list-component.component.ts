import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {
   // Pass data parent to child
  @Input() dataForToDoList:any;
   // Pass data child to parent
  @Output() addToDoneList:EventEmitter<any> =new EventEmitter();
  constructor() { }
  

  ngOnInit(): void {
  }

  onChangeData(idNumber:any){
    let data = this.dataForToDoList[idNumber];
    this.addToDoneList.emit(data);
    this.dataForToDoList.splice(idNumber, 1);

  }

}
