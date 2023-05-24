import { Briefcase } from "lucide-react";
import { Users2 } from "lucide-react";
import { Zap } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Target } from "lucide-react";
import { Globe } from "lucide-react";

export const navLinks = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Courses",
    link: "/courses",
  },
  {
    page: "About us",
    link: "/about",
  },
  {
    page: "Contact us",
    link: "/contact",
  },
];

export const features = [
  {
    id: "1",
    feature: "Students",
    number: "56",
  },
  {
    id: "2",
    feature: "Years",
    number: "5+",
  },
  {
    id: "3",
    feature: "Faculties",
    number: "15",
  },
  {
    id: "4",
    feature: "Alumnis",
    number: "200+",
  },
];

export const faqLeft = [
  {
    id: 1,
    question: "How long does it take to complete CATLAM?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
  {
    id: 2,
    question: "What are the benefits of studying CATLAM ?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
  {
    id: 3,
    question: "Which course is better, CA or CMA ?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
  {
    id: 4,
    question: "What is the difference between CA & CMA ?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
];

export const faqRight = [
  {
    id: 5,
    question: "Does this institute provide any scholorships ?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
  {
    id: 6,
    question: "What is expected salary after  CA or CMA  ?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
  {
    id: 7,
    question: "Can a student after 12th study, CA or CMA ?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
  {
    id: 8,
    question: "Can i get job abroad if i study CATLAM or IFRS ?",
    answer:
      "Fringilla dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat faucibus bibendum hac vulputate.",
  },
];

export const courses = [
  {
    id: 1,
    title: "IFRS",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
    slug: "ifrs",
    isImportant: true,
  },
  {
    id: 2,
    title: "CATLAM",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
    slug: "catlam",
    isImportant: true,
  },
  {
    id: 3,
    title: "CA",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
    slug: "ca",
    isImportant: false,
  },
  {
    id: 4,
    title: "CMA",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
    slug: "cma",
    isImportant: false,
  },
  {
    id: 5,
    title: "CS",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
    slug: "cs",
    isImportant: false,
  },
];

export const ImportantCourses = [
  {
    id: 1,
    title: "IFRS",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
    slug: "ifrs",
    isImportant: true,
  },
  {
    id: 2,
    title: "CATLAM",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
    slug: "catlam",
    isImportant: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ashfaq Ahammed",
    title:
      '"The best campus course available to power up your accounting skills"',
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, aliquet duis pellentesque pretium mattis orci. Vestibulum nunc diam tellus ac tempor. Nulla a commod.",
    image: "/assets/avatar.jpg",
    place: "Kozhikode",
  },
  {
    id: 2,
    name: "Kishore Krishna",
    title:
      '"The best campus course available to power up your accounting skills"',
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, aliquet duis pellentesque pretium mattis orci. Vestibulum nunc diam tellus ac tempor. Nulla a commod.",
    image: "./assets/avatar.jpg",
    place: "Tirur",
  },
  {
    id: 3,
    name: "Thahini Bandar",
    title:
      '"The best campus course available to power up your accounting skills"',
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, aliquet duis pellentesque pretium mattis orci. Vestibulum nunc diam tellus ac tempor. Nulla a commod.",
    image: "./assets/avatar.jpg",
    place: "Perinthalmanna",
  },
];

export const offering = [
  {
    id: 1,
    icon: <Target color="white" strokeWidth={1} size={48} />,
    title: "Thrive for Results",
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
  },
  {
    id: 2,
    icon: <Zap color="white" strokeWidth={1} size={48} />,
    title: "Move Fast",
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
  },
  {
    id: 3,
    icon: <Globe color="white" strokeWidth={1} size={48} />,
    title: "Connect with the world",
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
  },
  {
    id: 4,
    icon: <Users2 color="white" strokeWidth={1} size={48} />,
    title: "Community building",
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
  },
  {
    id: 5,
    icon: <Briefcase color="white" strokeWidth={1} size={48} />,
    title: "Job placement assistance",
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
  },
  {
    id: 6,
    icon: <BookOpen color="white" strokeWidth={1} size={48} />,
    title: "Industry driven curriculum",
    desciption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac euet ac elit senectus mauris blandit tempore gestas.",
  },
];
