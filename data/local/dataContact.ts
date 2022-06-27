import { ContactGroup } from "../models/contactGroup";

export function getContacts(): ContactGroup[] {
  return [
    {
      socialHandle: "mhmitra.mh@gmail.com",
      links: [
        {
          icon: "fa-regular fa-envelope",
          href: "mailto: mhmitra.mh@gmail.com",
        },
      ],
    },
    {
      socialHandle: "@mhmitramh",
      links: [
        {
          icon: "fa-brands fa-pinterest",
          href: "https://www.pinterest.com/mhmitramh",
        },
        {
          icon: "fa-brands fa-behance-square",
          href: "https://www.behance.com/mhmitramh",
        },
        {
          icon: "fa-brands fa-linkedin",
          href: "https://www.linkedin.com/in/mhmitramh",
        },
        {
          icon: "fa-brands fa-instagram",
          href: "https://www.instagram.com/mhmitramh",
        },
      ],
    },
  ];
}
