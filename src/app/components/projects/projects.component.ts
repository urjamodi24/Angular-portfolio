import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedProject: any = null;

  projects = [
    {
      title: 'Anomaly Detection in Road Accidents (YOLOv8 + CNN)',
      summary: 'Real-time road accident detection system with hybrid YOLOv8 + CNN model.',
      details: `
        - Developed a real-time road accident detection system using YOLOv8, achieving 97.3% accuracy.
        - Collected and annotated CCTV footage via Roboflow and processed video frames to identify accidents.
        - Integrated a hybrid YOLOv8 + CNN model to detect car positions and classify car type, make, and model.
        - Built a web app with Flask for live monitoring and emergency service notifications.
        - Tools: Python, OpenCV, PyTorch, YOLOv8, HTML, CSS, Bootstrap, React.js, Roboflow.
      `
    },
    {
      title: 'Sensitive Data Detection Tool (Flask + Docker)',
      summary: 'A tool to scan files for PII and PCI data using Flask and Docker.',
      details: `
        - Backend system scans files for Personally Identifiable Information (PII) and Payment Card Information (PCI).
        - Designed Flask API endpoints for secure file uploads and data retrieval.
        - Used Python regex to detect patterns like PAN, SSN, and credit card numbers.
        - Deployed with Docker Compose for seamless orchestration.
        - Tools: Flask, SQLAlchemy, SQLite, Bootstrap, Docker.
      `
    },
    {
      title: 'Fitness Tracking App',
      summary: 'Monitor and manage your fitness journey with personalized goal setting and tracking.',
      details: `
        - Track daily food intake, exercise routines, and set fitness goals.
        - Log progress, plan meals, and access an exercise library.
        - Built using Streamlit, MySQL, Pandas, Seaborn, and Matplotlib for data analysis.
      `
    },
    {
      title: 'Job Portal Application (Spring Boot + Angular)',
      summary: 'A full-stack job portal for job seekers and recruiters.',
      details: `
        - Developed a job portal with full CRUD functionality for job listings and applications.
        - Backend with Spring Boot (MySQL for listings, MongoDB for applications).
        - Responsive Angular frontend with Bootstrap and real-time updates via Angular services.
        - Tools: Spring Boot, Angular, Bootstrap, Postman, MySQL, MongoDB.
      `
    }
  ];

  showDetails(project: any) {
    this.selectedProject = this.selectedProject === project ? null : project;
  }
}
