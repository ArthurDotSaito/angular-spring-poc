import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }
  ngOnInit(): void {
    this.service.save(this.form.value);
  }

  onSubmit() {}
  onCancel() {}
}
