import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  standalone: false,
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  displayedRole = "";
  private roles = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: any;

  ngOnInit(): void {
    this.typeRole();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  private typeRole(): void {
    const current = this.roles[this.roleIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.displayedRole = current.slice(0, this.charIndex);
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.typeRole(), 1800);
        return;
      }
    } else {
      this.charIndex--;
      this.displayedRole = current.slice(0, this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.timer = setTimeout(() => this.typeRole(), this.deleting ? 60 : 100);
  }
}
