import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured?: boolean;
  visible?: boolean;
  type?: 'personal' | 'client' | 'corporate';
}

@Component({
  selector: 'project-showcase',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = ['All'];
  selectedCategory: string = 'All';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.http.get<Project[]>('/data/projects.json').subscribe({
      next: (data) => {
        // Filter only visible projects
        this.projects = data.filter(p => p.visible !== false);
        this.filteredProjects = this.projects;
        this.extractCategories();
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        // Fallback to sample data
        this.projects = this.getFallbackProjects();
        this.filteredProjects = this.projects;
        this.extractCategories();
        this.cdr.markForCheck();
      }
    });
  }

  getFallbackProjects(): Project[] {
    return [
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with payment integration and inventory management.',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'Web Application',
        featured: true,
        visible: true
      },
      {
        title: 'Task Management App',
        description: 'Real-time collaborative task management with drag-and-drop interface.',
        technologies: ['React', 'Firebase', 'Material-UI'],
        category: 'Web Application',
        featured: false,
        visible: true
      }
    ];
  }

  extractCategories(): void {
    const uniqueCategories = new Set(this.projects.map(p => p.category));
    this.categories = ['All', ...Array.from(uniqueCategories)];
  }

  filterProjects(category: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.selectedCategory = category;
      this.filteredProjects = category === 'All' 
        ? this.projects 
        : this.projects.filter(p => p.category === category);
      this.cdr.markForCheck();
    }
  }

  openLink(url: string | undefined): void {
    if (url && isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }
}
