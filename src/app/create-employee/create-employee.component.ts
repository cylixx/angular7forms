import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup; //Utilizamos la forma de Reactive Form
  fullNameLength = 0;

  //contiene todas las validaciones posibles por campo
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.'
    },
    'phone': {
      'required': 'Phone is required.'
    },
    'skillName': {
      'required': 'Skill Name is required'
    },
    'experienceInYears': {
      'required': 'Experience is required'
    },
    'proficiency': {
      'required': 'Proficiency is required'
    }
  };

  formErrors = {
    'fullName': '',
    'email': '',
    'phone': '',
    'skillName': '',
    'experienceInYears':'',
    'proficiency': ''
  };

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    /* Forma larga para definir el FormGrup
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
    */
   //Reactive Form
   //Esta forma reducida es mejor y permite asignar valores por defauld
   this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference: ['email'],
      email: ['', Validators.required],
      phone: [''],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
   });

   //Observable -  Funcion que se ejecuta cada que cambien el valor del campo
   //this.employeeForm.get('fullName').valueChanges.subscribe((value: string) => {
   //   this.fullNameLength = value.length;
   //});
  
    //Para poner un Observable en un FormGroup (en este caso en un nested FormGroup)
   // this.employeeForm.get('skills').valueChanges.subscribe((value: any) => {
   //   console.log(JSON.stringify(value));
    //});

    //un observador para cuando cambie en formGroup contactPreference
    this.employeeForm.get('contactPreference').valueChanges.subscribe((data: string) => {
      this.onContactPreferenceChange(data);
    });

    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });

  }

  onContactPreferenceChange(selectedValue: string) {
    const phoneControl = this.employeeForm.get('phone');
    const emailControl = this.employeeForm.get('email');
    if (selectedValue === 'phone') {
      emailControl.clearValidators();
      phoneControl.setValidators(Validators.required)
    } else {
      phoneControl.clearValidators();
      emailControl.setValidators(Validators.required)
    }
    emailControl.updateValueAndValidity();
    phoneControl.updateValueAndValidity();
  }

  //obtiene las llaves de los FormControls
  //logKeyValuePairs(group: FormGroup): void {
  //  console.log(Object.keys(group.controls));
  //}
  /*
  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
        //abstractControl.disable(); //dehabilita los campos
      } else {
        console.log('key=' + key + ', value=' + abstractControl.value);
        //abstractControl.disable(); //dehabilita los campos
        //abstractControl.markAsDirty();  //marca todos los campos del formGroup as dirty
      }
    });
  }}*/
  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          //console.log(messages);
          //console.log(abstractControl.errors);
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }

        }
      }
    });
  }

  onLoadDataClick(): void {
    //this.logKeyValuePairs(this.employeeForm);
    //this.logValidationErrors(this.employeeForm);  //invoca la validacion de campos
    //console.log(this.formErrors)
    /* carga datos en los campos */
    //this.employeeForm.setValue({ //setValue() - to update all form controls
    this.employeeForm.patchValue({ //patchValue() - to update sub-set form controls  
      fullName: 'Marco Hinojosa',
      email: 'mhinojosa@domain.com',
      skills: { 
        skillName: 'Java', 
        experienceInYears: 8, 
        proficiency: 'advanced'
       }
    });
  }

  validateForm(): void {
    this.logValidationErrors(this.employeeForm);  //invoca la validacion de campos
    console.log(this.formErrors);
  }

  onSubmit(): void {
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);

    console.log('this.employeeForm.controls.fullName.touched=' + this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

}
