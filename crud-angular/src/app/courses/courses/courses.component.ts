import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private readonly coursesService: CoursesService) {}
  ngOnInit(): void {
    this.courses = this.coursesService.findAll();
  }
}
