import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', 
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
    // <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
})

export class CoursesComponent {   
    email = "me@example.com"
    
    onKeyUp() {
        console.log(this.email)
    } 
}