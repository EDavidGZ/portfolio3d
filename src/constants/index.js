import { meta, shopify, tesla } from "../assets/images";
import ctb from "../assets/images/ctb.jpg";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    python,
} from "../assets/icons";

export const skills = [{
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Frontend",
    },

];

export const experiences = [{
    title: "Frelancer",
    company_name: "CBT",
    icon: ctb,
    iconBg: "#accbe1",
    date: "March 2024 - April 2024",
    points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
    ],
}, ];

export const socialLinks = [{
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [{
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Asesor-Contable-y-Fiscal',
        description: 'Soy un Asesor Contable y Fiscal dedicado a brindar soluciones financieras personalizadas. Mi objetivo es ayudarte a gestionar tus impuestos y contabilidad de manera eficiente, asegurando que cumplas con todas tus obligaciones fiscales mientras optimizas tus recursos. Con experiencia en la elaboración de contabilidad general, análisis de estados financieros y manejo de nóminas, me esfuerzo por ofrecer un servicio confiable y adaptado a tus necesidades.',
        link: 'https://github.com/EDavidGZ/Asesor-Contable-y-Fiscal',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Game Blocks',
        description: 'Game Blocks is a fun and educational platform where kids learn basic programming and logic by building their own games. Through interactive challenges, they develop problem-solving skills and explore coding in an engaging, hands-on way.',
        link: 'https://github.com/EDavidGZ/gameblock',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Kingdom',
        description: 'We’re here to help you master English with engaging, interactive classes.',
        link: 'https://github.com/EDavidGZ/kingdome-cb',
    },

];