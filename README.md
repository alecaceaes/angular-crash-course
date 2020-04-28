# HelloWorld

Angular Crash Course for Busy Developers (Angular 4) by Mosh Hamedani


## Angular CLI

Create Project
```
ng new project-name
```
Run Application 
```
ng serve
```
Generate Component
```
ng generate component component-name
```
Generate Service
```
ng generate service service-name
```
## Angular Fundamentals

### Templates
```
{{ string }}
```

## Displaying Data / Handling Events

### Property Binding
works only one-way Component to DOM.
```html
<h2 [textContent]="title"></h2> // use double curly syntax for text {{ title }} 
<img [src]="imageUrl" />
```
### Attribute Binding
There are HTML attributes that doesn't have representation to the DOM 
```html
<table>
  <tr>
    <td [colspan]="colSpan"></td> // fix this by using [attr.colspan]
  </tr>
</table>
```
and properties in DOM  that doesn't have representation in HTML
```
<h1 [textContent]="title"></h1>
```

### Adding Bootstrap
on `styles.css`
```
@import '~bootstrap/dist/css/bootstrap.css'
```

### Class Binding
```html
<button class="btn btn-primary" [class.active]="isActive">Save</button>
```

### Style Binding
```html
<button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
```
[All properties available in style object](https://www.w3schools.com/jsref/dom_obj_style.asp) 

### Event Binding and Event Bubbling
```
<div (click)="onDivClick()">
  <button (click)="onSave($event)">Save</button> // user $event.stopPropagation to stop event bubbling
</div>
```

### Event Filtering
```html
<input (keyup.enter)="onKeyUp($event)" /> // instead of filtering the event with keyCode
```

### Template Variables
```html
<input (keyup.enter)="onKeyUp(email.value)" #email />
```

### Two-way Binding
import `FormsModule` from `@angular/forms` and add to `imports` array in `app.module.ts`
```
import { FormsModule } from '@angular/forms';
```
use as:
```html
<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" >
<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"  />
```
```javascript
email = email@example.com;

onKeyUp() {
  console.log(this.email);
}
```

### Pipes
* uppercase
* lowercase
* decimal
* currency
* percent
```
{{ course.title | lowercase | uppercase }}
{{ course.student | number }}
{{ course.rating | number: '1.2-2' }} // arguments 1 - no of integer, 2-2 - minimum of decimal after decimal points
{{ course.price | currency:'AUD':true:'3.2-2' }} // AUD - name of currency, true - display currency symbol, same as decimal
{{ course.releaseDate | date: 'shortDate }}
```
[list of other date pipes](https://angular.io/api/common/DatePipe)

deprecated from Angular 1.x
* filter
* orderBy

### [Custom Pipe](https://github.com/alecaceaes/angular-crash-course/commit/01dc0d3bb2426868f619a1d71e82df4906edfe1b)
