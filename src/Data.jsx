import Candidate2 from './assets/Candidate2.jpg'
import Candidate3 from './assets/Candidate3.jpg'
import Candidate4 from './assets/Candidate4.jpg'
import Candidate5 from './assets/Candidate5.jpg'
import Candidate6 from './assets/Candidate6.jpg'
import Candidate8 from './assets/Candidate8.jpg'
import JohnAdewale from './assets/JohnAdewale.jpg'
import AishaMusa from './assets/AishaMusa.jpg'
import BlessingJohn from './assets/BlessingJohn.jpg'
import ChibuzorOkeke from './assets/ChibuzorOkeke.jpg'
import FatimaAdamu from './assets/FatimaAdamu.jpg'
import FemiBalogun from './assets/FemiBalogun.jpg'
import GraceNwosu from './assets/GraceNwosu.jpg'
import HauwaSuleiman from './assets/HauwaSuleiman.jpg'
import JamesUdo from './assets/JamesUdo.jpg'
import KemiOjo from './assets/KemiOjo.jpg'
import MichaelDanjuma from './assets/MichaelDanjuma.jpg'
import SamuelKing from './assets/SamuelKing.jpg'
import SarahOladipo from './assets/SarahOladipo.jpg'
import TundeBello from './assets/TundeBello.png'
import YusufAli from './assets/YusufAli.jpg'
export const elections = [
  {
    id: "presidential-2023",
    title: "2023 Presidential Election",
    status: "ongoing",
    description: "Your vote can shape the future of our nation! Be part of the change and choose the leader who will lead with vision and integrity.",
    candidates: [
      { id: "c1", name: "John Adewale", party: "Progressive Party (PP)", votes: 0, image: JohnAdewale, },
      { id: "c2", name: "Sarah Oladipo", party: "Green Unity Party (GUP)", votes: 0, image: SarahOladipo},
      { id: "c3", name: "Michael Danjuma", party: "National Alliance (NA)", votes: 0, image: MichaelDanjuma},
    ],
    thumbnail: Candidate8,
    totalVotes: 0 + 0 + 0
    
  },
  {
    id: "governor-lagos-2024",
    title: "2024 Lagos Governorship Election",
    status: "ongoing",
    description: "Lagos is growing rapidly — your vote matters! Elect a governor who will prioritize progress, security, and opportunity for all residents.",
    candidates: [
      { id: "c1", name: "Femi Balogun", party: "Unity Democratic Party (UDP)", votes: 0, image: FemiBalogun },
      { id: "c2", name: "Tunde Bello", party: "New People Party (NPP)", votes: 0, image: TundeBello },
      { id: "c3", name: "Kemi Ojo", party: "Future Movement (FM)", votes: 0, image: KemiOjo },
    ],
    totalVotes: 0 + 0 + 0,
    thumbnail: Candidate5
  },
  {
    id: "school-election-2025",
    title: "2025 University Student Union Election",
    status: "pending",
    description: "Shape the future of your university! Vote for leaders who will bring innovation, transparency, and real change to student governance.",
    candidates: [
      { id: "c1", name: "Hauwa Suleiman", party: "Team Vision", votes: 0, image: HauwaSuleiman },
      { id: "c2", name: "Chibuzor Okeke", party: "Youth Reform Team", votes: 0, image: ChibuzorOkeke },
      { id: "c3", name: "Aisha Musa", party: "Campus Progress Front", votes: 0, image: AishaMusa },
    ],
    totalVotes: 0,
   thumbnail: Candidate3,
  },

  {
    id: "local-council-2023",
    title: "2023 Local Government Council Election",
    status: "completed",
    description: "Strong local leadership starts here! Your vote empowers leaders who will improve local infrastructure, education, and community welfare.",
    candidates: [
      { id: "c1", name: "James Udo", party: "People First Party (PFP)", votes: 0, image: JamesUdo },
      { id: "c2", name: "Grace Nwosu", party: "Renewal Action Party (RAP)", votes: 0, image: GraceNwosu },
      { id: "c3", name: "Yusuf Ali", party: "Community Alliance (CA)", votes: 0, image: YusufAli },
    ],
    totalVotes: 0,
    thumbnail: Candidate6
  },
  {
    id: "youth-election-2025",
    title: "2025 Youth Leadership Conference Election",
    status: "ongoing",
    description: "The youth are the future — make your voice count! Vote for leaders who will champion innovation, opportunity, and progress for young people.",
    candidates: [
      { id: "c1", name: "Fatima Adamu", party: "Youth Empower Party", votes: 0, image: FatimaAdamu },
      { id: "c2", name: "Samuel King", party: "Change Makers", votes: 0, image: SamuelKing },
      { id: "c3", name: "Blessing John", party: "NextGen Force", votes: 0, image: BlessingJohn },
    ],
    totalVotes: 0 + 0 + 0,
    thumbnail: Candidate2
  },
];

export const candidates = [
  {
    id: 1,
    name: "Amara Johnson",
    party: "Progressive Unity Party",
    age: 42,
    votes: 0,
    motto: "Focused on education reform, job creation, and gender equality.",
    election: "e1",
    thumbnail: Candidate4
  },
  {
    id: 2,
    name: "David Mensah",
    party: "People’s Voice Alliance",
    age: 50,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    votes: 0,
    manifesto: "Advocates for affordable healthcare, youth empowerment, and rural development.",
    election: "e2"
  },
  {
    id: 3,
    name: "Fatima Bello",
    party: "Democratic Renewal Movement",
    age: 37,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    votes: 0,
    motto: "Plans to strengthen agricultural productivity and improve digital literacy.",
    election: "e3"
  },
  {
    id: 4,
    name: "Kelechi Obi",
    party: "National Reform Coalition",
    age: 46,
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    votes: 0,
    motto: "Aims to modernize infrastructure and reduce unemployment through innovation.",
    election: "e4"
  },
  {
    id: 5,
    name: "Zainab Yusuf",
    party: "Green Future Alliance",
    age: 35,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    votes: 0,
    motto: "Committed to environmental sustainability and renewable energy investment.",
    election: "e5"
  },
  {
    id: 6,
    name: "Tunde Adigun",
    party: "People’s Progressive Front",
    age: 48,
    election: "e6",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    votes: 0,
    motto: "Supports tech startups, better education, and transparent governance."
  },
  {
    id: 7,
    name: "Nkechi Eze",
    party: "United Democratic Forum",
    age: 40,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    votes: 0,
    election: "e7",
    motto: "Focused on women empowerment, entrepreneurship, and accessible healthcare."
  },
  {
    id: 8,
    name: "Michael Okoro",
    party: "National People's Congress",
    age: 52,
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    votes: 0,
    election: "e8",
    motto: "Plans to strengthen national security and promote agricultural exports."
  },
  {
    id: 9,
    name: "Aisha Garba",
    party: "Youth Vision Party",
    age: 29,
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    votes: 0,
    election: "e9",
    motto: "Advocates for youth inclusion, innovation, and affordable housing.",
  },
  {
    id: 10,
    name: "Chinedu Nwosu",
    party: "Justice and Equity Party",
    age: 44,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    votes: 0,
    motto: "Dedicated to justice reform, equality, and job opportunities for all citizens.",
    election: "e10"
  }
];
export const voters = [
  {
    id: "v1",
    fullName: "Emeka Okafor",
    email: "emeka.okafor@example.com",
    password: "password123",
    isAdmin: false,
    votedElections: ["presidential-2023", "youth-election-2025"],
  },
  {
    id: "v2",
    fullName: "Aisha Bello",
    email: "aisha.bello@example.com",
    password: "securepass456",
    isAdmin: false,
    votedElections: [],
  },
  {
    id: "v3",
    fullName: "Chinedu Nwosu",
    email: "chinedu.nwosu@example.com",
    password: "mypassword789",
    isAdmin: false,
    votedElections: ["governor-lagos-2024"],
  },
  {
    id: "v4",
    fullName: "Fatima Yusuf",
    email: "fatima.yusuf@example.com",
    password: "adminpass001",
    isAdmin: true,
    votedElections: ["local-council-2023", "school-election-2025"],
  },
  {
    id: "v5",
    fullName: "Tunde Adewale",
    email: "tunde.adewale@example.com",
    password: "tunde123",
    isAdmin: false,
    votedElections: [],
  },
  {
    id: "v6",
    fullName: "Mary Johnson",
    email: "mary.johnson@example.com",
    password: "mary456",
    isAdmin: false,
    votedElections: ["presidential-2023"],
  },
  {
    id: "v7",
    fullName: "Segun Alabi",
    email: "segun.alabi@example.com",
    password: "segun789",
    isAdmin: false,
    votedElections: ["governor-lagos-2024", "youth-election-2025"],
  },
  {
    id: "v8",
    fullName: "Blessing Eze",
    email: "blessing.eze@example.com",
    password: "blessing321",
    isAdmin: false,
    votedElections: [],
  },
  {
    id: "v9",
    fullName: "Lekan Adeyemi",
    email: "lekan.adeyemi@example.com",
    password: "lekan654",
    isAdmin: true,
    votedElections: ["school-election-2025"],
  },
  {
    id: "v10",
    fullName: "Hauwa Suleiman",
    email: "hauwa.suleiman@example.com",
    password: "hauwa987",
    isAdmin: false,
    votedElections: ["local-council-2023"],
  },
];
