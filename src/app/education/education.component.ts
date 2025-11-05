import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Education {
  institution: string;
  logo_url?: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  grade?: string;
  achievements?: string[];
  activities?: string[];
  color?: string;
}

@Component({
  selector: 'education-journey',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];
  selectedCard: number | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation(): void {
    this.http.get<Education[]>('/data/education.json').subscribe({
      next: (data) => {
        this.educationList = data;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error loading education:', error);
        // Fallback to hardcoded data if file doesn't exist
        this.educationList = this.getFallbackEducation();
        this.cdr.markForCheck();
      }
    });
  }

  getFallbackEducation(): Education[] {
    return [
      {
        institution: 'University Name',
        degree: 'Bachelor of Technology',
        field: 'Computer Science Engineering',
        duration: '2015 - 2019',
        location: 'Chennai, India',
        grade: '8.5 CGPA',
        achievements: [
          'Dean\'s List for Academic Excellence',
          'Winner of Coding Competition',
          'Published Research Paper'
        ],
        activities: ['Tech Club Member', 'Event Organizer'],
        color: '#FF6B6B'
      }
    ];
  }

  toggleCard(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      this.selectedCard = this.selectedCard === index ? null : index;
      this.cdr.markForCheck();
    }
  }

  isCardExpanded(index: number): boolean {
    return this.selectedCard === index;
  }
}
