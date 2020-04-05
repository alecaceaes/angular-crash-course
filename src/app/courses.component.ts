import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses> "courses"
                         // <div class="courses"> ".courses"
                         // <div id="courses"> "#courses"
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>        
    `
})

export class CoursesComponent {
    title = 'List of Courses'

    courses = ["course1", "course2", "course3"]
}