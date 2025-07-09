import { StaticImageData } from "next/image";
import profileImage from "../../assets/images/Profile.jpg";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const IMAGES = {
  imgProfile: profileImage,
};

interface TabDataItem {
  date: string;
  content: string;
}

export const TABS_DATA: TabDataItem[] = [
  {
    date: "2025.03.03 - Now",
    content: "Intern at Venturo, focusing on mobile programming.",
  },
  {
    date: "2024.09.04 - 2024.12.31",
    content:
      "Intern at PT Telekomunikasi Indonesia (Telkom), working on Developer.",
  },
  {
    date: "2023.08.01 - 2023.12.31",
    content: "Mentee at Bangkit Academy 2023, specializing in Cloud Computing.",
  },
];

interface ExperienceDataItem {
  title: string;
  company_name: string;
  image: StaticImageData;
  date: string;
  points: string;
}

export const EXPERIENCE_DATA: ExperienceDataItem[] = [
  {
    title: "Mobile Developer",
    company_name: "Venturo",
    image: IMAGES.imgProfile,
    date: "March 2025 - Present",
    points:
      "Developing and maintaining mobile applications using React Native and Flutter. Collaborating with cross-functional teams to define, design, and ship new features. Implementing responsive and user-friendly interfaces. Participating in code reviews and ensuring code quality.",
  },
  {
    title: "Developer",
    company_name: "Telkom Indonesia",
    image: IMAGES.imgProfile,
    date: "Sept 2024 - Dec 2024",
    points:
      "Involved in Telkom DDB projects, especially those that support Telkom Digital's Leap product",
  },
  {
    title: "Cloud Computing",
    company_name: "Bangkit Academy ",
    image: IMAGES.imgProfile,
    date: "Aug 2023 - Dec 2023",
    points:
      "In 2023, I graduated with Distinction in Cloud Computing from Bangkit led by Google, Goto, and Traveloka Batch 2.",
  },
];

export const SECTION_IDS = {
  HERO: "hero-section",
  PROFILE: "profile-section",
  EXPERIENCE: "experience-section",
  LAST: "last-section",
};

export const ANIMATION_CLASSES = {
  HERO_TEXT: "hero-text-once",
  SCROLL_ANIMATE: "scroll-animate",
};

interface NavDataItem {
  name: string;
  href: string;
}

export const NAVITEM: NavDataItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Galery", href: "/galery" },
  { name: "Contact", href: "/contact" },
];

interface SocialDataItem {
  name: string;
  href: string;
  icon: IconDefinition;
}

export const SOCIAL_DATA: SocialDataItem[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nugrohoadi11/",
      icon: faLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/NUGROHOADI11/",
      icon: faGithub,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/adi.ngrh._/",
      icon: faInstagram,
    },
    {
      name: "Email",
      href: "mailto:deeforce112002@gmail.com",
      icon: faEnvelope,
    },
  ];
