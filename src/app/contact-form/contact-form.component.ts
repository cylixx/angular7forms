import { Component, OnInit } from '@angular/core';
import { CoursesComponent } from '../courses.component';


export class Contact {
  constructor(
    public firstName: string,
    public email: string,
    public country: number,
    public comment: string
  ) {}
}

export class Country {
  constructor(
    public id: number, 
    public name: string
  ) { }
}

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  courses = [1, 2, 3];
  viewMode = 'map';
  coursesData = [
    {id: 1, name: 'courses1'},
    {id: 2, name: 'courses2'},
    {id: 3, name: 'courses3'}
  ];

  //select
  countries = [
     new Country(1, 'USA' ),
     new Country(2, 'Mexico' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil')
  ];

  contact: Contact; //aqui mapeamos los valores del formulario

  constructor() { }

  ngOnInit() {
    this.contact = new Contact('Marco', 'mhinojosa@domain.com', 2, 'El contacto ya estuvo aqui antes');
  }

  log(x) {
    console.log(x);
  }

  onkeyUp() {
    console.log(this.contact.email);
  }

  onAdd() {
    let newIndex: number = this.coursesData.length + 1;
    this.coursesData.push({
       id: newIndex, 
       name: 'course' + newIndex
    });
  }

  onRemove(course) {
    let index = this.coursesData.indexOf(course);
    this.coursesData.splice(index, 1);
  }

  onUpdate(course) {
    course.name = 'UPDATE';
  }

  /*
  onSelect(countryId) {
    console.log(countryId);
    this.selectedCountry = null;
    for (var i = 0; i < this.countries.length; i++)
    {
      if (this.countries[i].id == countryId) {
        this.selectedCountry = this.countries[i];
        break;
      }
    }
  }
  */
  onSelect($event) {
    console.log($event);
    let countryId = $event.target.value;
    let labelSelected = $event.target[countryId - 1].label;
    console.log("Country selected i[d = " + countryId + ", label = "+labelSelected+"]");
  }


}
