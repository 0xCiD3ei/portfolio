import {
	FaBootstrap,
	FaCss3Alt,
	FaGithub,
	FaHtml5,
	FaNpm,
	FaReact,
	FaSass,
	FaYarn,
	FaFigma,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import {
	SiAdobephotoshop,
	SiTailwindcss,
	SiNextdotjs,
	SiTypescript,
	SiFirebase,
	SiStyledcomponents,
	SiFramer,
	SiMaterialformkdocs,
	SiRedux
} from "react-icons/si";

interface ISkillsData {
  name: string;
  icon: React.ReactElement
}

export const SkillsData: ISkillsData[] = [
	{
		name: "HTML",
		icon: <FaHtml5 />,
	},
	{
		name: "CSS",
		icon: <FaCss3Alt />,
	},
	{
		name: "Javascript",
		icon: <DiJavascript1 />,
	},
	{
		name: "TypeScript",
		icon: <SiTypescript />,
	},
	{
		name: "React Js",
		icon: <FaReact />,
	},
	{
		name: "Next Js",
		icon: <SiNextdotjs />,
	},
	{
		name: "Redux",
		icon: <SiRedux />,
	},
	{
		name: "Firebase",
		icon: <SiFirebase />,
	},
	{
		name: "JSON",
		icon: <VscJson />,
	},
	{
		name: "Bootstrap",
		icon: <FaBootstrap />,
	},
	{
		name: "Tailwind",
		icon: <SiTailwindcss />,
	},
	{
		name: "Material UI",
		icon: <SiMaterialformkdocs />,
	},
	{
		name: "Sass",
		icon: <FaSass />,
	},
	{
		name: "Styled Components",
		icon: <SiStyledcomponents />,
	},
	{
		name: "Framer Motion",
		icon: <SiFramer />,
	},
	{
		name: "Git",
		icon: <FaGithub />,
	},
	{
		name: "Npm",
		icon: <FaNpm />,
	},
	{
		name: "Yarn",
		icon: <FaYarn />,
	},
	{
		name: "Figma",
		icon: <FaFigma />,
	},
	{
		name: "Photoshop",
		icon: <SiAdobephotoshop />,
	},
];

interface IWorkData {
	title: string,
	desc: string,
	tech: string[],
	gitlink: string,
	site: string
}

export const WorkData: IWorkData[] = [
	{
		title: "Monokai Toolkit",
		desc: "MonokaiToolkit (Extension) is a set of various tools for improving your experience while using social network.",
		tech: ["React.js", "Redux Toolkit", "Typescript", "Vite", "Ant Design", ],
		gitlink: "#",
		site: "https://chromewebstore.google.com/detail/monokaitoolkit-extension/dagbggkfgebkmlmnlidioknbhilfnngn",
	},
	{
		title: "Internal Manage",
		desc: "Manage and build work, human resources and exchange information within the company. ",
		tech: ["React.js", "Redux Toolkit", "Typescript", "Ant Design"],
		gitlink: "#",
		site: "#",
	},
	{
		title: "U2U Bio",
		desc: "Users can create custom profiles, contacts, and links to share connections with just a short link.",
		tech: ["React.js", "Redux Toolkit", "Typescript", "Ant Design", "TailwindCSS"],
		gitlink: "#",
		site: "https://u2u.bio",
	},
	{
		title: "U2U Music Desktop",
		desc: "Build a free music listening application from many sources such as Youtube, Soundcloud,...",
		tech: ["React.js", "Redux Toolkit", "Typescript", "ElectronJS", "TailwindCSS"],
		gitlink: "#",
		site: "#",
	},
	{
		title: "NFT Marketplace",
		desc: "Build an NFT market so everyone can buy and sell freely on the market.",
		tech: ["Next.js", "ContextAPI", "TailwindCSS", "Solidity", "Openzeppelin", ],
		gitlink: "https://github.com/0xCiD3ei/nft-marketplace",
		site: "https://nft-fullstack.vercel.app",
	},
];