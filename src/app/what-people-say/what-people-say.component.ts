import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Testimonial {
  name: string;
  feedback: string;
  avatarUrl?: string;
  role: string;
  linkedinUsername?: string;
}

@Component({
  selector: 'what-people-say',
  templateUrl: './what-people-say.component.html',
  styleUrl: './what-people-say.component.scss',
  imports: [CommonModule]
})
export class WhatPeopleSayComponent implements OnInit, AfterViewInit {
  public activeIndex = 0;
  Math = Math;
  testimonials: Testimonial[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadTestimonials();
  }

  loadTestimonials(): void {
    this.http.get<Testimonial[]>('/data/testimonials.json').subscribe({
      next: (data) => {
        this.testimonials = data;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error loading testimonials:', error);
      }
    });
  }

  ngAfterViewInit(): void {
    
  }

  updateActiveCard(): void {
    
  }


  scrollLeft(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
      this.cdr.markForCheck();
    }
  }

  scrollRight(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
      this.cdr.markForCheck();
    }
  }
}

