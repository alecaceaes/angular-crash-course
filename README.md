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
```typescript
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
```typescript
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
```html
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
```typescript
import { FormsModule } from '@angular/forms';
```
use as:
```html
<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" >
<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"  />
```
```typescript
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
```typescript
{{ course.title | lowercase | uppercase }}
{{ course.student | number }}
{{ course.rating | number: '1.2-2' }} // arguments 1 - no of integer, 2-2 - minimum of decimal after decimal points
{{ course.price | currency:'AUD':true:'3.2-2' }} // AUD - name of currency, true - display currency symbol, 3.2-2 - same as decimal
{{ course.releaseDate | date: 'shortDate' }}
```
[list of other date pipes](https://angular.io/api/common/DatePipe)

deprecated from Angular 1.x
* filter
* orderBy

### [Custom Pipe](https://github.com/alecaceaes/angular-crash-course/commit/01dc0d3bb2426868f619a1d71e82df4906edfe1b)

## Building Reusable Components
### Component API
to make component reusable, add support to property and event binding
```html
<favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange()"></favorite>
```
### Input Properties
to pass input or state
import `Input` from `@angular/core`
use as:
```typescript
@Component({
  inputs: ['isFavorite'] // not advised cos of magic strings
})
```
or
```typescript
@Input () isFavorite: boolean;
```
### Aliasing Input Property
to keep the contact of properties stable
```typescript
@Input ('isFavorite') isFavorite: boolean;
```
### [Output Properties](https://github.com/alecaceaes/angular-crash-course/commit/8fb36220f1a3fcd99a4a40dc7c733ed88fbc838d)
raise event to components
import `Output and EventEmitter` from `@angular/core`
```typescript
@Output () change = new Event Emitter();

onClick() {
  this.change.emit();
}
```
### [Passing Data](https://github.com/alecaceaes/angular-crash-course/commit/8d3f95a766b8e5f8b0934f8f6714ce129bf3446d)
on the component
```typescript
this.change.emit(isFavorite)
```
on the subscriber
```html
<favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChanged($event)"></favorite> 
```
### Aliasing Output Properties
```
@Output ('change') change = new Event Emitter();
```
### Templates
store template externally or use `templateUrl` or `template` metadata of Component

### Styles
use external styles by using `stylesUrls` array or write inline using `styles` property or writing inline on HTML template by using `<style></style>`.

### View Encapsulation (Shadow DOM)
enabled DOM tree and style encapusation, scoped style elements
```typescript
@Component({
  encapsulation: ViewEncapsulation.Emulated
})
```

### [ngContent](https://github.com/alecaceaes/angular-crash-course/commit/657f4d80a1e09578befc6f04b25dde3e2428fa02)
```
<ng-content select=".heading"></ng-content>
<ng-content select=".body"></ng-content>
```
### [ngContainer](https://github.com/alecaceaes/angular-crash-course/commit/db6e9f849e36e4d868aaccfdde0225058b6f9ce7)
```
<ng-container class="heading">Heading</ng-container>
```
