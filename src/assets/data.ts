import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    title: "Rule Book",
    thumbnail: "/images/Rulebook.gif",
    description:
      "Rule Book allows the community to propose rules, vote on them, and even oppose accepted rules, all decentralised.",
    techstack:
      "Next.js TypeScript Tailwind CSS Redux Web3Modal Wagmi Framer Motion Graph Hardhat",
    liveLink: "https://rule-book.vercel.app/",
    repo: "https://github.com/Harman-singh-waraich/RuleBook",
  },
  {
    title: "Docthereum",
    thumbnail: "/images/docthereum.gif",
    description:
      "A healthcare d-App that manages health records anonymously and provides research data for medical researchers.",
    techstack: "React Ethereum Web3 Graph Hardhat IPFS Chainlink Remix",
    liveLink: "https://docthereum.web.app/",
    repo: "https://github.com/Harman-singh-waraich/Docthereum",
  },
  {
    title: "Pixel Paths",
    thumbnail: "/images/pixelpaths.gif",
    description: "A game based dfs and bfs algorithm visualiser",
    techstack: "React Firebase Tile",
    liveLink: "https://pixel-paths.web.app/",
    repo: "https://github.com/Harman-singh-waraich/PixelPaths",
  },
  {
    title: "Goal Setter",
    thumbnail: "/images/goalsetter.gif",
    description:
      "An auth based goal setter using Netlify's serverless functions",
    techstack: "React JWT Redux ExpressJs Netlify MongoDB",
    liveLink: "https://shiny-dusk-d5d8e5.netlify.app/",
    repo: "https://github.com/Harman-singh-waraich/Goal-Setter-App",
  },
  {
    title: "Portfolio",
    thumbnail: "/images/portfolio.gif",
    description: "My Portfolio site. Your on it right now ;)",
    techstack: "NextJS Typescript Tailwind Appwrite",
    liveLink: "https://turbancoder.dev",
    repo: "https://github.com/Harman-singh-waraich/harman-portfolio",
  },
];
export const smallProjects = [
  {
    title: "Polaroid",
    thumbnail: "/images/Polaroid.gif",
    description: "A 3d website made with spline and webflow",
    techstack: "Spline Webflow",
    liveLink: "https://polaroid-spline.webflow.io/",
    repo: undefined,
  },
  {
    title: "B-healthy",
    thumbnail: "/images/bhealthy.png",
    description: "A Decentralised Healthcare App",
    techstack: "React Ethereum Web3 IPFS Material-UI Firebase Axios",
    liveLink: "https://b-healthy721.web.app",
    repo: "https://github.com/Harman-singh-waraich/B-Healthy",
  },
  {
    title: "Ticketer",
    thumbnail: "/images/ticketer.png",
    description: "A incentivised content creation platform",
    techstack: "React Ethereum Web3 Firebase React-lifecycles Material-UI",
    liveLink: "https://ticketer-demo.web.app",
    repo: "https://github.com/Harman-singh-waraich/Ticketer",
  },
  {
    title: "Vesting",
    thumbnail: "/images/vesting.png",
    description:
      "A fork of sushi-swap's staking contract with progressive releases.",
    techstack: "React Ethereum Web3 Hardhat",
    liveLink: "https://vesting321.netlify.app/",
    repo: "https://github.com/Harman-singh-waraich/Vesting",
  },
  {
    title: "Chit fund",
    thumbnail: "/images/chitfund.png",
    description: "A Decentralised rotatory savings contract.",
    techstack: "Solidity Aion-Scheduler Hardhat",
    liveLink: undefined,
    repo: "https://github.com/Harman-singh-waraich/Chit-Fund",
  },
];
export const achievements = [
  "Won bounties at Ethernals Hackathon",
  "2nd place at Starkware's Veedo Hackathon",
  "1st place at Bizthon organised by ITT Kharagpur.",
  "Bounty Winner at Polkadot's Hello world hackathon",
];

export const skills: Skill[] = [
  {
    field: "Frameworks",
    technologies: [
      "React.js",
      "Next",
      "Express",
      "Ethereum",
      "Kafka",
      "Hardhat",
      "Redux",
    ],
  },
  {
    field: "Tools",
    technologies: [
      "Git",
      "Postman",
      "NGINX",
      "Truffle",
      "Ganache",
      "Remix",
      "Rive",
      "Three.js",
      "Framer motion",
    ],
  },
  {
    field: "Languages",
    technologies: [
      "C++",
      "Javascript",
      "Python",
      "Solidity",
      "Typescript",
      "Rust",
    ],
  },
  {
    field: "Databases",
    technologies: ["Mongodb", "Appwrite"],
  },
  {
    field: "Others",
    technologies: ["HTML", "CSS", "Node.js", "REST"],
  },
];

export const SOCIAL_LINKS: { [key: string]: string } = {
  Github: "https://github.com/Harman-singh-waraich",
  Linkedin: "https://www.linkedin.com/in/turban-coder/",
  Discord: "https://discord.com/users/705450070161621004",
  Twitter: "https://twitter.com/TurbanCoder",
  Email: "mailto:waraichharman68@gmail.com",
};
