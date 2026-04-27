import { Component } from "@angular/core";
import { Project } from "./models/project.model";

@Component({
  selector: "app-projects",
  standalone: false,
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      tag: "FULLSTACK · EMPRESARIAL",
      name: "iSupport",
      description:
        "Aplicación interna diseñada para optimizar la gestión operativa y administrativa de la empresa. Permite el seguimiento de indicadores clave del desempeño del personal, así como el control eficiente de ingresos y gastos, brindando mayor visibilidad de la información y apoyando la toma de decisiones basada en datos.",
      techs: [
        "Angular",
        "Node.js",
        "Desarrollador Full Stack",
        "MariaDB",
        "JavaScript",
        "TypeScript",
        "Ionic",
      ],
      period: "ene. 2026 — abr. 2026",
      company: "Cybersoft S.A de C.V.",
    },
    {
      tag: "FULLSTACK · WEB",
      name: "La Doña",
      description:
        "Desarrollo de páginas web para el negocio, incluyendo diseño, funcionalidades de gestión y presencia digital. Se desarrollaron múltiples vistas y módulos orientados a mejorar la operación del restaurante, desplegadas en la nube.",
      techs: [
        "Angular",
        "Node.js",
        "Desarrollador Full Stack",
        "MySQL",
        "JavaScript",
        "TypeScript",
        "Cloud Computing",
        "OnRender",
      ],
      live: "https://la-dona.onrender.com/#",
    },
    {
      tag: "DESARROLLO WEB",
      name: "Páginas Web para Negocios",
      description:
        "Desarrollo de múltiples páginas web para distintos negocios y clientes, desde el diseño hasta el despliegue. Cada sitio orientado a mejorar la presencia digital y operación del cliente.",
      techs: ["HTML", "JavaScript", "CSS", "Cloud Computing"],
    },
  ];
}
