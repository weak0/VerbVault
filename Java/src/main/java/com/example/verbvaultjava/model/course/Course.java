package com.example.verbvaultjava.model.course;

import com.example.verbvaultjava.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseLevel;

    @ManyToMany(mappedBy = "courses")
    private List<User> users = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "course")
    private List<CourseSentence> courseSentences = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "course")
    private List<CourseWord> courseWords = new ArrayList<>();

}
