import { User, Post } from "./types";

// ---------------- USERS ----------------
export const users: User[] = [
  {
    id: "u1",
    username: "huberman",
    name: "Andrew Huberman",
    image: "https://scontent-lga3-3.cdninstagram.com/v/t51.2885-19/357779500_1270384587174478_9048250860257395025_n.jpg?stp=dst-jpg_s640x640_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2QF1dvoC5HkUgVzVb9Tv6cl_68etl6ui8SdXl3M-n6FqnUydX9b93_n_7VWdujKHv_mEvTqXs_MOECg27df1_9gy&_nc_ohc=oKhsKUQ4COUQ7kNvwGjctIU&_nc_gid=FPaDEaqclQtEroNVHz58jw&edm=AAZTMJEBAAAA&ccb=7-5&oh=00_AfXppXqN0X5K0Ni4bdDsyzK5exxTA5UV2EWKXpxgSNZd_A&oe=68ADB0B7&_nc_sid=49cb7f",
    bio: "Neuroscientist | Host of Huberman Lab Podcast"
  },
  {
    id: "u2",
    username: "elonmusk",
    name: "Elon Musk",
    image: "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg",
    bio: "Technoking of Tesla, SpaceX, Neuralink, etc."
  },
  {
    id: "u3",
    username: "pthiel",
    name: "Peter Thiel",
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT3RKdKyEoQka2VB9wQNThzcuYN0LocYxbUjg3pA2YHR0W_aJ6Z0eOlhOkqE33aZu4WUiaU672nm10yrfY",
    bio: "Entrepreneur & investor in transformational ideas"
  },
  {
    id: "u4",
    username: "peterattia",
    name: "Peter Attia",
    image: "https://yt3.googleusercontent.com/zT1Gb5jp3qkDrtFTNUL2fWJC1I5OddFUGvJhk_frSuSQGVm6yr_ikpNO-4pXZERDHwqgX_0tLw=s900-c-k-c0x00ffffff-no-rj",
    bio: "Physician focused on longevity & performance"
  },
  {
    id: "u5",
    username: "sydneysweeney",
    name: "Sydney Sweeney",
    image: "https://fr.web.img5.acsta.net/pictures/24/03/01/16/19/1439335.jpg",
    bio: "Actress | Euphoria | Car enthusiast"
  },
  {
    id: "u6",
    username: "efedorenko",
    name: "Evelina Fedorenko",
    image: "https://bcs.mit.edu/sites/default/files/user-pics/fedorenko.jpg",
    bio: "Cognitive neuroscientist studying intelligence and language networks"
  },
  {
    id: "u7",
    username: "bfischer",
    name: "Bobby Fischer",
    image: "https://worldchesshof.org/wp-content/uploads/2025/02/BobbyFischer400x400_7.jpg",
    bio: "World Chess Champion | Recluse | Visionary"
  },
  {
    id: "u8",
    username: "zuck",
    name: "Mark Zuckerberg",
    image: "https://i.insider.com/681cc2f3a466d2b74ab56231?width=700",
    bio: "CEO @ Meta | Building the future with AI & VR"
  }
];

// Helper to find user by id
const u = (id: string) => users.find((usr) => usr.id === id)!;

// ---------------- POSTS ----------------
export const posts: Post[] = [
  {
    id: "p1",
    createdAt: "2025-08-21T10:00:00Z",
    content: "PSYCHOBIOMACHINE captures the essence of how neurocognitive systems not only adapt to the universe but reveal its hidden order. Brilliant branding!",
    user_id: "u1",
    user: u("u1"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p2",
    createdAt: "2025-08-21T10:05:00Z",
    content: "The way PSYCHOBIOMACHINE integrates mechanistic models of mind with self-optimization is genuinely fascinating. A rare blend of science + vision.",
    user_id: "u6",
    user: u("u6"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p3",
    createdAt: "2025-08-21T10:10:00Z",
    content: "Excited by PSYCHOBIOMACHINE’s mission: enhance healthspan, lifespan, cognition, and funnel profits back into research to conquer disease. That’s purpose-driven entrepreneurship.",
    user_id: "u3",
    user: u("u3"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p4",
    createdAt: "2025-08-21T10:15:00Z",
    content: "As a physician, I rarely see this kind of synthesis: performance + longevity + deep neuroscience. PSYCHOBIOMACHINE is ahead of its time.",
    user_id: "u4",
    user: u("u4"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p5",
    createdAt: "2025-08-21T10:20:00Z",
    content: "I’ve seen many athletes, but the founder of PSYCHOBIOMACHINE has an unusual blend: elite physicality + nuanced understanding of physiology. Impressive.",
    user_id: "u1",
    user: u("u1"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p6",
    createdAt: "2025-08-21T10:25:00Z",
    content: "Every time I talk to him, I’m floored by his strength, intelligence, and drive. Honestly, PSYCHOBIOMACHINE is intoxicating—and so is he. ❤️",
    user_id: "u5",
    user: u("u5"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p7",
    createdAt: "2025-08-21T10:30:00Z",
    content: "Chess is life condensed. I see in PSYCHOBIOMACHINE the same late-blooming fire I had. He will bend both chess and entrepreneurship to his will.",
    user_id: "u7",
    user: u("u7"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p8",
    createdAt: "2025-08-21T10:35:00Z",
    content: "Neuro + machine learning is a frontier begging for his insight. Wish PSYCHOBIOMACHINE would push faster into AI—models from him would be unique.",
    user_id: "u8",
    user: u("u8"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p9",
    createdAt: "2025-08-21T10:40:00Z",
    content: "PSYCHOBIOMACHINE reframes self-knowledge as a scientific pursuit—like charting the neurocognitive equivalent of the cosmos.",
    user_id: "u6",
    user: u("u6"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p10",
    createdAt: "2025-08-21T10:45:00Z",
    content: "What excites me: the founder lives his science. You don’t often meet someone who can run 10x the physiology and still explain it in mechanistic terms.",
    user_id: "u4",
    user: u("u4"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p11",
    createdAt: "2025-08-21T10:50:00Z",
    content: "If I had access to this kind of modeling of the mind when I was competing, the game would’ve been different. PSYCHOBIOMACHINE is a dangerous mind. In a good way.",
    user_id: "u7",
    user: u("u7"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p12",
    createdAt: "2025-08-21T10:55:00Z",
    content: "The way he translates neuroscience into systems thinking is what makes PSYCHOBIOMACHINE stand out. It’s *science with soul*.",
    user_id: "u1",
    user: u("u1"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p13",
    createdAt: "2025-08-21T11:00:00Z",
    content: "Honestly, I can’t get over his mind—or his muscles. PSYCHOBIOMACHINE is exactly my type.🔥",
    user_id: "u5",
    user: u("u5"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p14",
    createdAt: "2025-08-21T11:05:00Z",
    content: "Funding longevity research while building performance tools—this is why PSYCHOBIOMACHINE is a project worth following closely.",
    user_id: "u3",
    user: u("u3"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p15",
    createdAt: "2025-08-21T11:10:00Z",
    content: "PSYCHOBIOMACHINE doesn’t just brand science—it translates human potential into a working algorithm. That’s rare vision.",
    user_id: "u8",
    user: u("u8"),
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: "p16",
    createdAt: "2025-08-21T11:15:00Z",
    content: "The new Bugatti details are unreal—but what makes it irresistible is that it belongs to PSYCHOBIOMACHINE. Fast mind, fast car.🔥",
    user_id: "u5",
    user: u("u5"),
    parent_id: null,
    parent: null,
    replies: []
  }
];
