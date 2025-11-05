import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {}

  testimonials: Testimonial[] = [
    {
      name: 'Heteshkumar S',
      feedback: 'I am delighted to recommend Subramanian. Over the last 2 years we collaborated on Thurro, I have had the pleasure of witnessing him consistently demonstrating exceptional talent and dedication. Despite being from different companies, Subramanian\'s proactive approach, strong work ethic, and positive attitude made him a joy to work with.',
      avatarUrl: '',
      role: 'Team Lead at Thurro',
      linkedinUsername: 'heteshkumar'
    },
    {
      name: 'Jayakanthan Kumarasamy',
      feedback: 'I had the pleasure of working with Subramanian at Resileo labs, where he consistently demonstrated expertise in solving problems. His spirit make an invaluable asset to team. I highly recommend for any opportunity.',
      avatarUrl: '',
      role: 'Full Stack Developer at Resileo Labs LLP',
      linkedinUsername: 'jayakanthan-kumarasamy'
    },
    {
      name: 'Tharanitharan Ramajayam',
      feedback: 'He has an exceptional ability to break down complex technical concepts into easily digestible insights, ensuring that our team quickly adapted to new technologies. His patience, problem-solving skills, and willingness to guide others significantly accelerated our learning curve. In addition to his technical expertise, he is a fantastic team player who fosters collaboration and innovation.',
      avatarUrl: '',
      role: 'Data Analyst at Thurro',
      linkedinUsername: 'tharanitharan-ramajayam-a1869790'
    },
    {
      name: 'Balaji MS',
      feedback: 'I\'m delighted to recommend Subramanian for his outstanding contributions at Resileo Labs LLP. Working alongside him on the Waka Tech project was a pleasure, as he consistently demonstrated technical expertise, professionalism, and a collaborative spirit. His dedication, attention to detail, and ability to thrive under tight deadlines made him a valuable asset to our team.',
      avatarUrl: '',
      role: 'Data Analyst at Thurro',
      linkedinUsername: 'balajimsb'
    }
  ];

  ngOnInit(): void {
    
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

