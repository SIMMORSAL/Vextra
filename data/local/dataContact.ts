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
    {
      socialHandle: "+1 243-555-2394",
      links: [
        {
          icon: "fa-brands fa-twitch",
          href: "https://www.pinterest.com/mhmitramh",
        },
        {
          icon: "fa-brands fa-snapchat",
          href: "https://www.pinterest.com/mhmitramh",
        },
        {
          icon: "fa-brands fa-facebook-messenger",
          href: "https://www.pinterest.com/mhmitramh",
        },
        {
          icon: "fa-brands fa-telegram",
          href: "https://www.behance.com/mhmitramh",
        },
        {
          icon: "fa-brands fa-whatsapp",
          href: "https://www.linkedin.com/in/mhmitramh",
        },
      ],
    },
  ];
}
