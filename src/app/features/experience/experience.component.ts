import { Component } from "@angular/core";
import { Experience } from "../../models/experience.model";

@Component({
  selector: "app-experience",
  standalone: false,
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  openIndex: number | null = 0;

  experiences: Experience[] = [
    {
      company: "Cybersoft S.A de C.V.",
      role: "Ingeniero de Software",
      type: "Contrato temporal · Híbrido",
      period: "abr. 2026 — actualidad",
      location: "México",
      description:
        "Desarrollo de una aplicación para la gestión interna empresarial, orientada al monitoreo y análisis de indicadores de desempeño del personal. Se implementó un módulo para el control y registro de ingresos y gastos, optimizando la administración financiera.",
      techs: [
        "Angular",
        "Node.js",
        "Desarrollador Full Stack",
        "MariaDB",
        "JavaScript",
        "TypeScript",
        "Ionic",
      ],
      current: true,
    },
    {
      company: "Cybersoft S.A de C.V.",
      role: "Desarrollador — Prácticas",
      type: "Contrato de prácticas · Presencial",
      period: "ene. 2026 — abr. 2026",
      location: "San Miguel de Allende, Guanajuato, México",
      description:
        "Desarrollo de una aplicación para la gestión interna empresarial, orientada al monitoreo y análisis de indicadores de desempeño del personal. Se implementó un módulo para el control y registro de ingresos y gastos, optimizando la administración financiera.",
      techs: [
        "Angular",
        "Node.js",
        "Desarrollador Full Stack",
        "JavaScript",
        "TypeScript",
        "MariaDB",
        "Ionic",
      ],
    },
    {
      company: "Grupo Financiero Inmtec",
      role: "Desarrollador de Software — Prácticas",
      type: "Contrato de prácticas · Presencial",
      period: "may. 2024 — ago. 2024",
      location: "Área metropolitana de Querétaro",
      description:
        "Desarrollo de Software de Procesos de Negocio, manejo de Base de Datos. Backend en JavaScript con Node.js y Express.",
      techs: [
        "Angular",
        "Node.js",
        "Express",
        "JavaScript",
        "PostgreSQL",
        "Desarrollador Backend",
      ],
    },
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
