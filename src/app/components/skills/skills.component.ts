import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  hardSkills = ['Git', 'GitHub', 'Docker', 'TypeScript', 'Angular', 'Tailwind CSS', 'Spring Boot'];
  programmingLanguages = ['C++', 'Python', 'Java', 'SQL (MySQL)', 'HTML', 'CSS', 'JavaScript', 'Bash', 'MongoDB'];
  coursework = ['Data Structures and Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS', 'OOPs'];
  softSkills = ['Problem Solving', 'Critical Thinking', 'Decision Making', 'Teamwork'];

  skillProgress = [
    { name: 'Angular', level: 85, tooltip: 'Web framework for building SPAs' },
    { name: 'TypeScript', level: 80, tooltip: 'Typed superset of JavaScript' },
    { name: 'Python', level: 90, tooltip: 'High-level programming language' },
    { name: 'Spring Boot', level: 75, tooltip: 'Java framework for building microservices' },
    { name: 'Docker', level: 70, tooltip: 'Containerization tool for app deployment' }
  ];
}
