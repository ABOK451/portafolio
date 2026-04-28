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
      icon: "assets/icons/hackerrank.svg",
      isSvg: true,
    },
    {
      name: "Introducción a Ciberseguridad",
      issuer: "Cisco Networking Academy",
      date: "sept. 2024",
      credentialId: "b894bc04-1303-4a39-b16b-1642e728f233",
      credentialUrl:
        "https://www.credly.com/badges/b894bc04-1303-4a39-b16b-1642e728f233",
      icon: "assets/icons/cisco.svg",
      isSvg: true,
    },
    {
      name: "Mendix Rapid Developer",
      issuer: "Mendix",
      date: "ago. 2025",
      credentialId: "96667",
      icon: "assets/icons/mendix.svg",
      isSvg: true,
    },
    {
      name: "Scrum Fundamentals Certified | Fourth Edition",
      issuer: "Upskill with SCRUMStudy",
      date: "ago. 2025",
      credentialId: "1097088",
      credentialUrl:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=1097088",
      icon: "assets/icons/scrum.svg",
      isSvg: true,
    },
    {
      name: "English for Developers & IT Professionals",
      issuer: "Desafío Latam",
      date: "ago. 2025",
      credentialId: "eytmfaehcb",
      credentialUrl: "https://verify.desafiolatam.com/eytmfaehcb",
      icon: "assets/icons/desafio.svg",
      isSvg: true,
    },
    {
      name: "IT Essentials: PC Hardware and Software",
      issuer: "Cisco Networking Academy",
      date: "2022",
      icon: "assets/icons/cisco.svg",
      isSvg: true,
    },
    {
      name: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "2022",
      icon: "assets/icons/cisco.svg",
      isSvg: true,
    },
    {
      name: "Partner: NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "2023",
      icon: "assets/icons/cisco.svg",
      isSvg: true,
    },
    {
      name: "Certificación Microsoft Office 2019 Académico",
      issuer: "Testing Program Académico",
      date: "2022",
      icon: "assets/icons/office.svg",
      isSvg: true,
    },
  ];
}
