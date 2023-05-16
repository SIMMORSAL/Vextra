import { ContactGroup } from "../models/local-data/contactGroup";

export function getContacts(): ContactGroup[] {
  return [
    {
      socialHandle: "mhmitra.mh@gmail.com",
      links: [
        {
          icon: "fa-solid fa-envelope",
          href: "mailto: hi@janesmith.com",
          showInHome: true,
        },
      ],
    },
    {
      socialHandle: "+98 936 748 2561",
      links: [
        {
          icon: "fa-solid fa-phone",
          href: "tel: +98 936 748 2561",
          showInHome: false,
        },
      ],
    },
    {
      socialHandle: "@mitra-khar",
      links: [
        {
          icon: "fa-brands fa-pinterest",
          href: "https://www.pinterest.com/",
        },
        {
          icon: "fa-brands fa-behance-square",
          href: "https://www.behance.com/",
          showInHome: true,
        },
        {
          icon: "fa-brands fa-linkedin",
          href: "https://www.linkedin.com/",
          showInHome: true,
        },
        {
          icon: "fa-brands fa-instagram",
          href: "https://www.instagram.com/",
        },
        {
          icon: "fa-solid fa-phone",
          href: "tel: +1 243-555-2394",
        },
        {
          icon: "fa-brands fa-twitch",
          href: "https://www.pinterest.com/",
        },
        {
          icon: "fa-brands fa-snapchat",
          href: "https://www.pinterest.com/",
        },
        {
          icon: "fa-brands fa-facebook-messenger",
          href: "https://www.pinterest.com/",
        },
        {
          icon: "fa-brands fa-telegram",
          href: "https://www.behance.com/",
        },
        {
          icon: "fa-brands fa-whatsapp",
          href: "https://www.linkedin.com/",
          showInHome: true,
        },
      ],
    },
  ];
}
