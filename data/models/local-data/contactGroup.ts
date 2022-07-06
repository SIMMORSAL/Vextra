export interface ContactGroup {
  socialHandle: string;
  links: Links[];
}

export interface Links {
  icon: string;
  href: string;
  showInHome?: boolean;
}
