export interface ContactGroup {
  socialHandle: string;
  links: Links[];
}

interface Links {
  icon: string;
  href: string;
}
