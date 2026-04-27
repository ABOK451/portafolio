import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeroComponent } from "./features/hero/hero.component";
import { AboutComponent } from "./features/about/about.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { ProjectCardComponent } from "./features/projects/components/project-card/project-card.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ContactComponent } from "./features/contact/contact.component";
import { CertificationsComponent } from "./features/certifications/certifications.component";
import { ExperienceComponent } from './features/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectCardComponent,
    SkillsComponent,
    ContactComponent,
    CertificationsComponent,
    ExperienceComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
