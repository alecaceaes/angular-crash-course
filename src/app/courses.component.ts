import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', 
    template: `         
    <input #email (keyup.enter)="onKeyUp(email.value)" />
    `
    // <input (keyup.enter)="onKeyUp($event)" />
})

export class CoursesComponent {   
    onKeyUp(email) {
        console.log(email)
    }  

    // onKeyUp($event) {
    //     console.log($event.target.value)
    // }  
}