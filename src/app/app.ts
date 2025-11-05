import { Component, signal, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');
  protected githubBio = signal<string>('Full Stack Web Developer');

  protected statistics: Statistic[] = [
    { icon: 'timer', number: environment.years_of_experience?.toString() + "+", label: 'Years of Experience' },
    { icon: 'code', number: environment.projects_worked?.toString() + "+", label: 'Projects Worked' },
    { icon: 'people', number: environment.linkedin_connections?.toString() + "+", label: 'LinkedIn Connections' }
  ];

  ngOnInit() {
    // this.fetchGithubBio();
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

