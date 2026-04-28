import { Component } from "@angular/core";

interface Skill {
  name: string;
  icon: string;
  level: number;
  isSvg?: boolean;
}

@Component({
  selector: "app-skills",
  standalone: false,
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  frontend: Skill[] = [
    { name: "", icon: "assets/icons/angular.svg", level: 90, isSvg: true },
    { name: "", icon: "assets/icons/js.svg", level: 92, isSvg: true },
    { name: "", icon: "assets/icons/ts.svg", level: 88, isSvg: true },
    { name: "", icon: "assets/icons/flutter.svg", level: 80, isSvg: true },
    { name: "", icon: "assets/icons/ionic.svg", level: 75, isSvg: true },
    { name: "", icon: "assets/icons/unity.svg", level: 60, isSvg: true },
  ];

  backend: Skill[] = [
    { name: "", icon: "assets/icons/node.svg", level: 85, isSvg: true },
    { name: "", icon: "assets/icons/linux.svg", level: 80, isSvg: true },
    { name: "", icon: "assets/icons/docker.svg", level: 75, isSvg: true },
    { name: "", icon: "assets/icons/azure.svg", level: 70, isSvg: true },
    { name: "", icon: "assets/icons/railway.svg", level: 78, isSvg: true },
    { name: "", icon: "assets/icons/android.svg", level: 72, isSvg: true },
  ];

  databases: Skill[] = [
    { name: "", icon: "assets/icons/mysql.svg", level: 88, isSvg: true },
    { name: "", icon: "assets/icons/sql.svg", level: 85, isSvg: true },
    { name: "", icon: "assets/icons/mariadb.svg", level: 85, isSvg: true },
    { name: "", icon: "assets/icons/postgresql.svg", level: 80, isSvg: true },
    { name: "", icon: "assets/icons/mongodb.svg", level: 82, isSvg: true },
  ];
}
