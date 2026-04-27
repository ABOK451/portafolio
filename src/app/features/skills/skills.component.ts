import { Component } from "@angular/core";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

@Component({
  selector: "app-skills",
  standalone: false,
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  frontend: Skill[] = [
    { name: "Angular", icon: "🅰️", level: 90 },
    { name: "JavaScript", icon: "🟨", level: 92 },
    { name: "TypeScript", icon: "🔷", level: 88 },
    { name: "Flutter", icon: "📱", level: 80 },
    { name: "Ionic", icon: "⚡", level: 75 },
    { name: "Unity", icon: "🎮", level: 60 },
  ];

  backend: Skill[] = [
    { name: "Node.js", icon: "🟢", level: 85 },
    { name: "Linux", icon: "🐧", level: 80 },
    { name: "Docker", icon: "🐋", level: 75 },
    { name: "Azure", icon: "☁️", level: 70 },
    { name: "Railway", icon: "🚂", level: 78 },
    { name: "Android", icon: "📱", level: 72 },
  ];

  databases: Skill[] = [
    { name: "MySQL", icon: "🐬", level: 88 },
    { name: "MariaDB", icon: "🦭", level: 85 },
    { name: "PostgreSQL", icon: "🐘", level: 80 },
    { name: "MongoDB", icon: "🍃", level: 82 },
  ];
}
