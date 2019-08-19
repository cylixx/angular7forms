import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7forms';
  user = {
    name: ''
  }

  onSubmit(e) {
    // console.log(e);
    //console.log(e.controls['username'].status);
    //console.log(e.value.username);  //obtiene el valor del DOOM object
    console.log(this.user.name);  //obtiene el valor del data bind object declarado
  }
}
