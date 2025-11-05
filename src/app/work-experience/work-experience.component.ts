import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Company {
  name: string;
  logo?: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies?: string[];
  website?: string;
}

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class WorkExperienceComponent implements OnInit {
  companies: Company[] = [];
  activeIndex = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.http.get<Company[]>('/data/companies.json').subscribe({
      next: (data) => {
        this.companies = data;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error loading companies:', error);
        // Fallback to hardcoded data if file doesn't exist
        this.companies = this.getFallbackCompanies();
        this.cdr.markForCheck();
      }
    });
  }

  getFallbackCompanies(): Company[] {
    return [
      {
        name: 'Company Name',
        role: 'Full Stack Developer',
        duration: 'Jan 2022 - Present',
        location: 'Chennai, India',
        description: 'Led development of multiple full-stack applications using modern web technologies.',
        technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB']
      }
    ];
  }

  selectCompany(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      this.activeIndex = index;
      this.cdr.markForCheck();
    }
  }

  nextCompany(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.activeIndex = (this.activeIndex + 1) % this.companies.length;
      this.cdr.markForCheck();
    }
  }

  prevCompany(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.activeIndex = (this.activeIndex - 1 + this.companies.length) % this.companies.length;
      this.cdr.markForCheck();
    }
  }
}
