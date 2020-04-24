import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
