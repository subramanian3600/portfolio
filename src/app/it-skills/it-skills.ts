import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-it-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './it-skills.html',
  styleUrl: './it-skills.scss',
})
export class ItSkills {
  
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90, category: 'Frontend', icon: 'fab fa-angular' },
        { name: 'React', level: 85, category: 'Frontend', icon: 'fab fa-react' },
        { name: 'TypeScript', level: 88, category: 'Frontend', icon: 'fas fa-code' },
        { name: 'JavaScript', level: 92, category: 'Frontend', icon: 'fab fa-js' },
        { name: 'HTML/CSS', level: 95, category: 'Frontend', icon: 'fab fa-html5' },
        { name: 'SCSS', level: 87, category: 'Frontend', icon: 'fab fa-sass' },
        { name: 'D3.js', level: 80, category: 'Frontend', icon: 'fas fa-chart-line' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, category: 'Backend', icon: 'fab fa-node-js' },
        { name: 'Python', level: 80, category: 'Backend', icon: 'fab fa-python' },
        { name: 'PostgreSQL', level: 82, category: 'Backend', icon: 'fas fa-database' },
        { name: 'MongoDB', level: 80, category: 'Backend', icon: 'fas fa-leaf' },
        { name: 'REST APIs', level: 88, category: 'Backend', icon: 'fas fa-server' },
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, category: 'Tools', icon: 'fab fa-git-alt' },
        { name: 'GitHub Copilot', level: 95, category: 'Tools', icon: 'fab fa-github' },
        { name: 'Docker', level: 78, category: 'Tools', icon: 'fab fa-docker' },
        { name: 'AWS', level: 75, category: 'Tools', icon: 'fab fa-aws' },
        { name: 'CI/CD', level: 80, category: 'Tools', icon: 'fas fa-sync' },
        { name: 'Jest/Testing', level: 83, category: 'Tools', icon: 'fas fa-vial' }
      ]
    }
  ];

  // Flatten all skills for infinite scroll
  allSkills: Skill[] = this.skillCategories.flatMap(category => category.skills);
}
