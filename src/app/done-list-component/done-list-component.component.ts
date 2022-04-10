import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.css']
})
export class DoneListComponentComponent implements OnInit {
   // Pass data parent to child
  @Input() dataForDoneList:any;
   // Pass data child to parent
  @Output() addInToDoList:EventEmitter<any> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeData(idNumber:any){
    let data = this.dataForDoneList[idNumber];
    this.addInToDoList.emit(data);
    this.dataForDoneList.splice(idNumber, 1);

  }

}
