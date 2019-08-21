# Angular7forms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



------------------------------------------------------------
**RESUME:**

## Template Reference Variable
    Is often a reference to a DOM element within a template. It can also be a reference to an Angular component
    or directive or a web component.
  
    You can simply use the hash symbol (#) to create a reference variable in your template which 
    will be only available in that template.

## NgForm

    It's simply a directive exported from FormsModule which gets automatically added to all <form> tags 
    in your Angular templates once you import the module.
    example:    `#myForm="ngForm"`
    properties:
      myform.value: It will provides you with the aggregated form value of all the fields used in your <form> tag,
      myform.valid: It will provides you with a boolean value indicating if the form is valid or not,
      myform.touched: It will provides you with a boolean value indicating if the user has entered value at least in one field,
      myform.submitted: It will provides with a boolean value indicating if the form was submitted.
      
## ngModel
    Two-way data binding
      Is the combination of both property binding and event binding along with the ngModel built-in directive
```
      [(ngModel)] = "component-property"
```

**Built-in directives**
      

Built-in directives | Description |
---------|----------|
 ngModel |  |
 ngIf | Is used for adding or removing elements from DOM dinamically `<element *ngIf="condition"> content </element>` |
 ngForA3 | B3 |
ngSwitch |



**Built-in attribute directive**

Built-in attribute directive | Column B |
---------|----------|
 ngStyle | B1 |
 ngClass | B2 |
 A3 | B3 |


-----------------------------------------------------------------------------------------------------------
## Two ways to create forms in Angular
* Template Driven Forms
* Reactive Forms (Also called Model Driven Forms)  (This is better offer more control)  

## Classes for creating a form control tree
* FormGroup
* FormControl


