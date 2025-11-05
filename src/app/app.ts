import { Component, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { environment } from '../environments/environment';

interface Statistic {
  icon: string;
  number: string;
  label: string;
}

interface GithubProfile {
  bio: string;
}

interface Project {
  visible?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');
  protected githubBio = signal<string>('Angular/React Developer | Graphic Designer | Programmer | Data Science | UI & UX Designer');

  protected statistics: Statistic[] = [
    { icon: 'timer', number: environment.years_of_experience?.toString() + "+", label: 'Years of Experience' },
    { icon: 'code', number: "0", label: 'Projects Worked' },
    { icon: 'people', number: environment.linkedin_connections?.toString() + "+", label: 'LinkedIn Connections' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.fetchGithubBio();
    this.fetchProjectCount();
  }

  private fetchProjectCount(): void {
    this.http.get<Project[]>('/data/projects.json').subscribe({
      next: (projects) => {
        const visibleProjects = projects.filter(p => p.visible !== false);
        const projectCount = visibleProjects.length;
        this.statistics[1].number = projectCount.toString() + "+";
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
        // Fallback to environment value
        this.statistics[1].number = environment.projects_worked?.toString() + "+";
      }
    });
  }

  private async fetchGithubBio(): Promise<void> {
    try {
      const { data } = await axios.get<GithubProfile>('https://api.github.com/users/subramanian3600');
      if (data.bio) this.githubBio.set(data.bio);
    } catch (error) {
      console.error('Error fetching GitHub bio:', error);
    }
  }
}

