import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  standalone: false,
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  socials = [
    {
      icon: "💼",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/alan-omar-venegas-cadena-618511312/",
    },
    {
      icon: "📞",
      label: "+52 415 118 8574",
      url: null,
    },
    {
      icon: "📍",
      label: "San Miguel de Allende, Gto. México",
      url: null,
    },
  ];
}
