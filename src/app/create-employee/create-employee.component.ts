import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup; //Utilizamos la forma de Reactive Form

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }

  onLoadDataClick(): void {
    //this.employeeForm.setValue({ //setValue() - to update all form controls
    this.employeeForm.patchValue({ //patchValue() - to update sub-set form controls  
      fullName: "Marco Hinojosa",
      email: "mhinojosa@domain.com"
    })
  }

  onSubmit(): void {
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);

    console.log('this.employeeForm.controls.fullName.touched=' + this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

}
