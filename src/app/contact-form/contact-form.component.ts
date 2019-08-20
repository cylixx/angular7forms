import { Component, OnInit } from '@angular/core';

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
  email = "me@example.com";
  courses = [1, 2, 3];
  viewMode = 'map';
  coursesData = [
    {id: 1, name: 'courses1'},
    {id: 2, name: 'courses2'},
    {id: 3, name: 'courses3'}
  ];

  //select
  //selectedCountry:Country = new Country(2, 'Mexico');
  selectedCountry: Country = new Country(0, null);
  countries = [
     new Country(1, 'USA' ),
     new Country(2, 'Mexico' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil')
  ];

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  onkeyUp() {
    console.log(this.email);
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
  // let countryId = $event.target.value;
  //console.log(countryId);
}



}
