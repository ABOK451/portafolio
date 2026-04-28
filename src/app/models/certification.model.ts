export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  icon: string;
  image?: string;
  isSvg?: boolean;
}
