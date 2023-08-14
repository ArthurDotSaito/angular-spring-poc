import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private readonly coursesService: CoursesService) {
    this.courses$ = this.coursesService.findAll().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
  ngOnInit(): void {}
}
