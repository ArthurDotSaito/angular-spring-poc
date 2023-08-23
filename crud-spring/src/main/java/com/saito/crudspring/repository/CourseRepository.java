package com.saito.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saito.crudspring.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
