import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    title: "Docthereum",
    thumbnail: "/images/docthereum.png",
    description: "A Decentralised Healthcare App",
    techstack: "React Ethereum Web3 Graph Hardhat IPFS Chainlink",
    liveLink: "https://docthereum.web.app/",
    repo: "https://github.com/Harman-singh-waraich/Docthereum",
  },
  {
    title: "Pixel Paths",
    thumbnail: "/images/docthereum.png",
    description: "An algorithm visualiser",
    techstack: "React Firebase",
    liveLink: "https://pixel-paths.web.app/",
    repo: "https://github.com/Harman-singh-waraich/PixelPaths",
  },
  {
    title: "Goal Setter",
    thumbnail: "/images/docthereum.png",
    description: "An auth based goal setter",
    techstack: "React JWT Redux",
    liveLink: "https://splendorous-cassata-b0c6d5.netlify.app/login",
    repo: "https://docthereum.web.app/",
  },
  {
    title: "Portfolio",
    thumbnail: "/images/docthereum.png",
    description: "My Portfolio site",
    techstack: "NextJS Typescript Tailwind",
    liveLink: "https://docthereum.web.app/",
    repo: "https://docthereum.web.app/",
  },
];
const smallProjects = [
  {
    title: "B-healthy",
    thumbnail: "/images/docthereum.png",
    description: "A Decentralised Healthcare App",
    techstack: "React Ethereum Web3 IPFS Material-UI Firebase Axios",
    liveLink: "https://docthereum.web.app/",
    repo: "https://github.com/Harman-singh-waraich/Docthereum",
  },
  {
    title: "Ticketer",
    thumbnail: "/images/docthereum.png",
    description: "A incentivised content creation platform",
    techstack: "React Ethereum Web3 Firebase React-lifecycles Material-UI",
    liveLink: "https://docthereum.web.app/",
    repo: "https://github.com/Harman-singh-waraich/Docthereum",
  },
  {
    title: "Vesting",
    thumbnail: "/images/docthereum.png",
    description:
      "A fork of sushi-swap's staking contract with progressive releases.",
    techstack: "React Ethereum Web3 Hardhat",
    liveLink: "https://vesting321.netlify.app/",
    repo: "https://github.com/Harman-singh-waraich/Docthereum",
  },
  {
    title: "Chit fund",
    thumbnail: "/images/docthereum.png",
    description: "A Decentralised rotatory savings contract.",
    techstack: "Solidity Aion-Scheduler Hardhat",
    liveLink: "https://docthereum.web.app/",
    repo: "https://github.com/Harman-singh-waraich/Docthereum",
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
    technologies: ["Git", "Postman", "NGINX", "Truffle", "Ganache", "Remix"],
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
    technologies: ["Mongodb"],
  },
  {
    field: "Others",
    technologies: ["HTML", "CSS", "Node.js", "REST"],
  },
];

export const SOCIAL_LINKS: { [key: string]: string } = {
  Github: "https://github.com/Harman-singh-waraich",
  LinkedIn: "https://www.linkedin.com/in/turban-coder/",
  Discord: "https://discord.com/users/705450070161621004",
  Twitter: "https://twitter.com/Harmeet68057757",
  Email: "mailto:waraichharman68@gmail.com",
};
