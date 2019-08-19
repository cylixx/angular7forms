import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  title = 'angular7forms';
  user = {
    name: ''
  }

  public frameworks: string[] = ['Angular', 'React', 'Ember'];

  constructor() { }

  ngOnInit() {
  }


  onSubmit(e) {
 // onSubmit(form: NgForm) {
    // console.log(e);
    //console.log(e.controls['username'].status);
    //console.log(e.value.username);  //obtiene el valor del DOOM object
    console.log("e.controls['username'].value=" + e.controls['username'].value);
    console.log("this.user.name=" + this.user.name);  //obtiene el valor del data bind object declarado
  }

  resetForm(form)  {
    form.resetForm();  
  }
}
