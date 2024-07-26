import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Aadil's Site", // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aadil B. Mufti',
  subtitle: 'Welcome to my site!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me2.jpg',
  paragraphOne:
    "Hi, I'm Aadil and I am currently a Solutions Engineer at Y42 and a graduate of New York University majoring in Computer Science.",
  paragraphTwo:
    'I have a keen interest in various fields within Computer Science including Data Analytics, Cybersecurity and Web Development. I have had multiple internships accross these fields, and I am always looking for ways to integrate them with each other!',
  paragraphThree:
    "Aside from coding, I love to make music. Lately, I've been looking into Audio Programming and the intersection between code + music has been eye-opening! I'm also a massive tennis head, ¡Vamos Rafa!",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'btl.jpg',
    title: 'Break The Love Tennis Maps',
    info:
      'In one of my classes at NYU, we had the opportunity to work with a company called Break The Love, whose mission is to create a one-stop-shop for everything tennis related.',
    info2:
      'Our team was tasked with creating a tennis maps interface in which users could filter through various fields including location, fees, lighted, etc. I primarily worked on data ingestion and backend development.',
    url: 'https://www.breakthelove.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'net.jpg',
    title: 'net-cli',
    info:
      'I have always found CLIs to be really elegant tools. At the same time, I wanted to get a better grasp of the Go Programming Language.',
    info2:
      'As a result, I built a simple CLI to query NS, IP, CNAME, MX, and TXT for a given host.',
    url: 'https://github.com/aadilmufti/simple-website-cli',
    repo: 'https://github.com/aadilmufti/simple-website-cli', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tabl.jpg',
    title: 'Tableau Dashboards',
    info:
      'While I was intern at company called Incorta, who develops Data Analytics Software, I was tasked with testing the Incorta platform with Tableau.',
    info2:
      'The project primarily revolved around writing and revising SQL queries, and verifying whether the data between both platforms was sound.',
    url: 'https://public.tableau.com/profile/aadil.mufti#!/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chao.jpg',
    title: 'Chaotify [In Progress]',
    info:
      'As someone who loves to listen to music, I am always trying to discover new stuff. I find that there is a beauty in using randomness when you want to discover new music.',
    info2:
      'So, I am working on a project called Chaotify which generates a random word, and gives you a 30-second preview of a song based on that word. I have found some great music this way! It will be done soon!',
    url: 'https://github.com/aadilmufti/chaotify',
    repo: 'https://github.com/aadilmufti/chaotify', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to chat some time!',
  btn: '',
  email: 'aadilmufti@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'spotify',
      url: 'https://open.spotify.com/user/aadilmufti',
    },
    {
      id: nanoid(),
      name: 'bandcamp',
      url: 'https://mseahaze.bandcamp.com/album/sketches-from-the-shower',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aadil-mufti/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aadilmufti',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
