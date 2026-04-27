import { Component } from "@angular/core";
import { Certification } from "../../models/certification.model";

@Component({
  selector: "app-certifications",
  standalone: false,
  templateUrl: "./certifications.component.html",
  styleUrls: ["./certifications.component.scss"],
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "abr. 2024",
      credentialId: "84d7244098f4",
      credentialUrl: "https://www.hackerrank.com/certificates/84d7244098f4",
      icon: "🐍",
    },
    {
      name: "Introducción a Ciberseguridad",
      issuer: "Cisco Networking Academy",
      date: "sept. 2024",
      credentialId: "b894bc04-1303-4a39-b16b-1642e728f233",
      credentialUrl:
        "https://www.credly.com/badges/b894bc04-1303-4a39-b16b-1642e728f233",
      icon: "🔒",
    },
    {
      name: "Mendix Rapid Developer",
      issuer: "Mendix",
      date: "ago. 2025",
      credentialId: "96667",
      icon: "⚡",
    },
    {
      name: "Scrum Fundamentals Certified",
      issuer: "Upskill with SCRUMStudy",
      date: "ago. 2025",
      credentialId: "1097088",
      credentialUrl:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=1097088",
      icon: "🏃",
    },
    {
      name: "English for Developers & IT Professionals",
      issuer: "Desafío Latam",
      date: "ago. 2025",
      credentialId: "eytmfaehcb",
      credentialUrl: "https://verify.desafiolatam.com/eytmfaehcb",
      icon: "🌎",
    },
    {
      name: "IT Essentials + NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "2024",
      icon: "🖥️",
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "2024",
      icon: "🌐",
    },
    {
      name: "Microsoft Office 2019",
      issuer: "Microsoft",
      date: "2024",
      icon: "📊",
    },
    {
      name: "Certificación en Testing",
      issuer: "Instituto / Plataforma",
      date: "2024",
      icon: "🧪",
    },
  ];
}
