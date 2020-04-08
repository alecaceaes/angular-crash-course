import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', 
    template: ` 
        <div (click)="onDivClick()">    
            <button (click)="onSave($event)">Save</button>
        </div>
    `
})

export class CoursesComponent {   
    onDivClick() {
        console.log("Div was clicked.")
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("button was clicked.", $event)
    }
}