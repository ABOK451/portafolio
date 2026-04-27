import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  standalone: false,
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"], // ← plural y array
})
export class NavbarComponent {
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
