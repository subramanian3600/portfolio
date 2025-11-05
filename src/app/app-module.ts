import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WhatPeopleSayComponent } from './what-people-say/what-people-say.component';
import { ItSkills } from './it-skills/it-skills';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    WhatPeopleSayComponent,
    ItSkills,
    WorkExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
