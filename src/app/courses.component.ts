import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', 
    template: `         
        <input (keyup.enter)="onKeyUp()" />
    `
    // <input (keyup)="onKeyUp($event)" />
})

export class CoursesComponent {   
    onKeyUp() {
        console.log("Enter was pressed.")
    }

    // onKeyUp($event) {
    //     if ($event.keyCode == 13) console.log("Enter was pressed.")
    // }    
}