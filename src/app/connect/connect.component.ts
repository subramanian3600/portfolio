import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
  username?: string;
  visible?: boolean;
}

interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
}

@Component({
  selector: 'connect-section',
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class ConnectComponent {
  contactInfo: ContactInfo = {
    email: 'svsubramanian3600@gmail.com',
    // phone: '+91 1234567890',
    location: 'Chennai, India'
  };

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/svsubramanian',
      color: '#0A66C2',
      username: '@svsubramanian',
      visible: true
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/subramanian3600',
      color: '#171515',
      username: '@subramanian3600',
      visible: true
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/username',
      color: '#1DA1F2',
      username: '@username',
      visible: false
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/subramanian_s_v',
      color: '#E4405F',
      username: '@subramanian_s_v',
      visible: true
    }
  ];

  get visibleSocialLinks(): SocialLink[] {
    return this.socialLinks.filter(link => link.visible !== false);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  openLink(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }

  copyEmail(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.contactInfo.email).then(() => {
        alert('Email copied to clipboard!');
      });
    }
  }
}
