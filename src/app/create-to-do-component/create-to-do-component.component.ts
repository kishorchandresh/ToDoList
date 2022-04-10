import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.css']
})
export class CreateToDoComponentComponent implements OnInit {

  // Pass data child to parent
  @Output() addNewTaskInToDoList:EventEmitter<any> =new EventEmitter();
  addToDoForm							  : 	FormGroup;
  

  constructor(private formBuilder: FormBuilder,) { 
    this.addToDoForm = this.formBuilder.group({
      'taskName':['',[Validators.required]],
      'taskDescription':['',[Validators.required]],
			'repeatingTask':['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    
    this.addToDoForm.statusChanges
    .subscribe(selectedValue  => {
      if(selectedValue =="VALID"){
        this.onSubmit();
      }
    })
  }
  
  onSubmit(){

    this.addNewTaskInToDoList.emit(this.addToDoForm.value);
    this.addToDoForm.reset();
  }

}
