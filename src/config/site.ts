export const GOOGLE_FORM_URL = "https://forms.gle/tcbhHKgMNcecePzC6";

export const siteConfig = {
  name: "VAIORA’26",
  title: "VAIORA’26 | Vaigai College of Engineering",
  description:
    "VAIORA’26 – An Inter Collegiate Symposium organized by the Department of Computer Science and Engineering, Vaigai College of Engineering, Madurai.",
  college: {
    name: "VAIGAI COLLEGE OF ENGINEERING",
    accreditation: "Approved by AICTE, Affiliated to Anna University",
    department: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
    address: "Therkkutheru, Vinayagapuram, Melur, Madurai - 625 122",
  },
  event: {
    name: "VAIORA’26",
    edition: "2026",
    type: "AN INTER COLLEGIATE SYMPOSIUM",
    tagline: "LET IDEAS TAKE FLIGHT",
    venue: "KALAM AUDITORIUM",
    date: "8th OCTOBER, 2026",
    time: "9:00 AM",
    googleFormUrl: GOOGLE_FORM_URL,
  },
  scheduleSlots: [
    {
      slot: "SLOT 1",
      timing: "10:00 AM - 11:00 AM",
      type: "session",
      technical: ["Paper Presentation", "Code Clash"],
      nonTechnical: ["Connection", "Missing Word"],
    },
    {
      slot: "BREAK",
      timing: "11:00 AM - 11:30 AM",
      type: "break",
      title: "Break (Refreshment)",
      detail: "Refreshments & Campus Networking at Cafeteria",
    },
    {
      slot: "SLOT 2",
      timing: "11:30 AM - 1:00 PM",
      type: "session",
      technical: ["Project Expo", "UI / UX Design"],
      nonTechnical: ["IPL Auction", "Video Editing"],
    },
  ],
  technicalEvents: [
    {
      id: "paper-presentation",
      name: "PAPER PRESENTATION",
      subtitle: "PAPER X",
      badge: "TECH 01",
      slot: "SLOT 1",
      timing: "10:00 AM – 11:30 AM",
      venue: "ML-3",
      teamSize: "Maximum 2 members per team",
      theme: "Technical Field (Computer Science & Emerging Tech)",
      description: "Showcase innovative research, technical concepts, and presentation poise with a 5-minute presentation followed by judge Q&A.",
      icon: "FileText",
      posterImage: "/rules/paper-presentation.jpeg",
      rules: [
        "Theme: Open to any Technical Field in Computer Science and Engineering.",
        "Maximum 2 members per team.",
        "Total duration: 7 minutes per team.",
        "Each team member must speak during the presentation.",
        "Time breakup: 5 minutes for presentation and 2 minutes for Q&A.",
        "Participants must bring their presentation slides on a USB drive and bring extra copies of presentation materials.",
        "Evaluation will be based on novelty, technical depth, presentation clarity, and Q&A handling."
      ],
    },
    {
      id: "code-clash",
      name: "CODE CLASH",
      subtitle: "CODE FUEL",
      badge: "TECH 02",
      slot: "SLOT 1",
      timing: "10:00 AM – 11:30 AM",
      venue: "Oracle Lab",
      teamSize: "Team of 2 members",
      theme: "Debugging & Optimal Algorithmic Coding",
      description: "High-octane two-round coding arena testing lightning-fast bug extermination and clean, efficient problem solving.",
      icon: "Terminal",
      posterImage: "/rules/code-clash.jpeg",
      rules: [
        "Participants can participate as a team of 2 members.",
        "Both rounds will be conducted in the Oracle Lab.",
        "Round 1 – Debugging (Duration: 20 minutes): Each team must solve 5 given buggy problems and achieve the expected output.",
        "Round 2 – Solving Problems (Duration: 30 minutes): Teams must solve 2 given algorithmic problems in their preferred language (C / C++ / Python / Java).",
        "Teams must solve Round 2 problems efficiently (minimum number of lines and optimal logic); excessive bloat or improper logic may lead to disqualification.",
        "Decisions made by the event coordinators and judges will be final."
      ],
      rounds: [
        {
          title: "Round 1 – Debugging",
          duration: "20 minutes",
          rules: [
            "Duration: 20 minutes.",
            "Each team should solve the given 5 problems with bugs and result with expected output.",
            "Speed, accuracy, and test-case coverage determine advancement to Round 2."
          ]
        },
        {
          title: "Round 2 – Solving Problems",
          duration: "30 minutes",
          rules: [
            "Duration: 30 minutes.",
            "Teams should solve 2 given problems with their preferred language among C / C++ / Python / Java.",
            "Teams should solve the problem efficiently (minimum number of lines & optimal execution), otherwise they'll be disqualified."
          ]
        }
      ]
    },
    {
      id: "project-expo",
      name: "PROJECT EXPO",
      subtitle: "INNOVA TECH",
      badge: "TECH 03",
      slot: "SLOT 2",
      timing: "11:30 AM – 1:00 PM",
      venue: "CSE Project Lab",
      teamSize: "2 – 3 members per team",
      theme: "Working Hardware & Software Prototypes",
      description: "Exhibit cutting-edge prototypes, IoT systems, AI apps, or full-stack innovations before expert evaluators.",
      icon: "Cpu",
      rules: [
        "Open to both Software and Hardware domain projects.",
        "Teams must consist of 2 to 3 members.",
        "A live, working prototype or software demonstration is mandatory.",
        "Each team will be given 8–10 minutes for project demonstration followed by judge Q&A.",
        "Teams must bring their own laptops, cables, microcontrollers, and peripherals. Power supply will be provided.",
        "Judging criteria: Innovation, real-world utility, technical complexity, working state, and presentation."
      ]
    },
    {
      id: "ui-ux-design",
      name: "UI / UX DESIGN",
      subtitle: "CREATIVE MATRIX",
      badge: "TECH 04",
      slot: "SLOT 2",
      timing: "11:30 AM – 1:00 PM",
      venue: "Multimedia Lab",
      teamSize: "Individual or Team of 2",
      theme: "Futuristic & Human-Centric Interface Design",
      description: "Craft modern, accessible, and sleek user interfaces and digital experiences for on-the-spot design challenges.",
      icon: "Palette",
      rules: [
        "Participation is permitted individually or as a team of 2.",
        "Permitted design tools: Figma, Adobe XD, or Canva.",
        "The problem statement and target persona will be unveiled at the start of the event.",
        "Time limit: 60 minutes for wireframing, visual styling, and interactive prototyping.",
        "Judging criteria: Aesthetic finish, user flow clarity, responsive thinking, usability, and design originality.",
        "Pre-existing design system templates are strictly prohibited; work must be produced on-site."
      ]
    },
  ],
  nonTechnicalEvents: [
    {
      id: "connection",
      name: "CONNECTION",
      subtitle: "THIRIX",
      badge: "NON-TECH 01",
      slot: "SLOT 1",
      timing: "10:00 AM – 11:30 AM",
      venue: "Seminar Hall / Kalam Auditorium",
      teamSize: "Exactly 2 participants per team",
      theme: "Visual Clues, Movie Puzzles & Audio Connection",
      description: "Decipher cryptic image links, decode Kollywood cinema clues, and match visuals in a rapid-fire battle of wits.",
      icon: "Sparkles",
      posterImage: "/rules/connections.jpeg",
      rules: [
        "Each team must consist of exactly 2 participants.",
        "Round 1 – Movie Connect: 3 clues -> Identify the Tamil movie. 10 seconds per question | 20 questions | 10 points each question.",
        "Round 2 – Song Connect: Visual clues -> Identify the song. 10 seconds per question | 15 questions | 10 points each question.",
        "Round 3 – Movie Guessing: 3 clues -> Identify the movie name. Clues revealed one by one. Answer any time after a clue. 10 questions | 10 points each.",
        "No mobile phones or electronic gadgets allowed during rounds.",
        "In case of any disputes, event coordinators' verdict is final."
      ],
      rounds: [
        {
          title: "Round 1 – Movie Connect",
          duration: "10 sec / question",
          points: "10 Points / Question (20 Questions)",
          rules: [
            "3 visual clues will be shown on screen.",
            "Identify the Tamil movie connecting all clues.",
            "10 seconds per question | 20 questions total | 10 points each question."
          ]
        },
        {
          title: "Round 2 – Song Connect",
          duration: "10 sec / question",
          points: "10 Points / Question (15 Questions)",
          rules: [
            "Visual clues will be displayed on screen.",
            "Identify the exact song connected to the visuals.",
            "10 seconds per question | 15 questions total | 10 points each question."
          ]
        },
        {
          title: "Round 3 – Movie Guessing",
          duration: "Rapid Fire",
          points: "10 Points / Question (10 Questions)",
          rules: [
            "3 clues -> Identify the movie name.",
            "Clues are revealed one by one on the screen.",
            "Teams may answer at any time after a clue is revealed.",
            "10 questions total | 10 points each."
          ]
        }
      ]
    },
    {
      id: "missing-word",
      name: "MISSING WORD",
      subtitle: "WORD-QUEST",
      badge: "NON-TECH 02",
      slot: "SLOT 1",
      timing: "11:50 AM – 1:00 PM",
      venue: "ML-1",
      teamSize: "2 or 3 participants per team",
      theme: "Lyric Unscrambling, Iconic Dialogues & Tamil Translation",
      description: "Decode scrambled lyrics, recall famous cinema punchlines, and translate Western songs into meaningful Tamil.",
      icon: "HelpCircle",
      posterImage: "/rules/missing-words.jpeg",
      rules: [
        "2 or 3 participants per team.",
        "Round 1 consists of Phase 1 (decode scrambled lyrics to identify songs) and Phase 2 (complete missing words in iconic dialogues).",
        "In Round 1, one designated member from the team must raise their hand to answer.",
        "The teams with highest scores in Round 1 advance to Round 2.",
        "Round 2: English song lyrics will be displayed on screen. Participants must identify and translate the given lyrics into meaningful Tamil.",
        "In Round 2, one designated member from the team must raise their hand to answer.",
        "First and second place winners will be selected based on aggregate score."
      ],
      rounds: [
        {
          title: "Round 1 – Lyrics & Dialogue Fill",
          rules: [
            "Team size: 2 or 3 participants per team.",
            "Phase 1: Decode the scrambled lyrics and identify the song.",
            "Phase 2: Complete the missing words in iconic dialogues.",
            "One selected member from the team will raise their hand to answer.",
            "The teams with highest scores in this round will advance to Round 2."
          ]
        },
        {
          title: "Round 2 – Lyrics Translation",
          rules: [
            "Selected teams from Round 1 participate in this round.",
            "English song lyrics will be displayed on the screen. Participants must identify and translate the given lyrics into meaningful Tamil.",
            "One selected member from the team will raise their hand to answer.",
            "Finally the first and second place winners will be selected based on their score."
          ]
        }
      ]
    },
    {
      id: "ipl-auction",
      name: "IPL AUCTION",
      subtitle: "BIDON",
      badge: "NON-TECH 03",
      slot: "SLOT 2",
      timing: "10:00 AM – 11:30 AM",
      venue: "CP-2 Lab",
      teamSize: "Maximum of 3 participants per team",
      theme: "Cricket Strategy, Purse Management & Bidding Wars",
      description: "Master the auction gavel: manage a virtual budget, bid for cricket superstars, draft a legendary lineup, and build the ultimate franchise.",
      icon: "Trophy",
      posterImage: "/rules/ipl-auction.jpeg",
      rules: [
        "A maximum of 3 participants per team.",
        "Each team will be given a virtual budget to bid for players and form a complete squad.",
        "Required team composition after the auction must strictly be: 5 Batsmen, 4 Bowlers, 1 All-rounder, 1 Legend (from any category), 1 Wicketkeeper.",
        "Teams not following the composition guidelines will be disqualified.",
        "Players who remain unsold can be re-auctioned based on team requests.",
        "Player lists will be shared during registration, and player rankings will only be revealed at the auction table.",
        "All participants must maintain decorum and only registered team members are allowed to bid.",
        "Winner Determination: The team with the most points wins.",
        "Tiebreaker: In case of a tie, the remaining money for both teams will be compared. The team with more left-over funds will win.",
        "Secondary Tiebreaker: If tied money remains, teams will nominate their best lower-order player. A comparison of the nominated player's ODI stats will determine the winner."
      ],
      squadComposition: [
        { role: "Batsmen", count: "5" },
        { role: "Bowlers", count: "4" },
        { role: "All-rounder", count: "1" },
        { role: "Legend (Any category)", count: "1" },
        { role: "Wicketkeeper", count: "1" }
      ]
    },
    {
      id: "video-editing",
      name: "VIDEO EDITING",
      subtitle: "REEL CRASH",
      badge: "NON-TECH 04",
      slot: "SLOT 2",
      timing: "11:30 AM – 1:00 PM",
      venue: "CP-1 Media Lab",
      teamSize: "Individual or Team of 2",
      theme: "Cinematic Transitions, Audio Sync & Storytelling",
      description: "Transform raw clips into a fast-paced, thumb-stopping 30–60 second cinematic reel under timed arena conditions.",
      icon: "Film",
      rules: [
        "Participation is open to individuals or teams of up to 2 members.",
        "Raw footage and sound assets will be provided at the venue.",
        "Permitted editing software: Adobe Premiere Pro, DaVinci Resolve, After Effects, CapCut, VN Editor.",
        "Time limit: 60 to 90 minutes to complete the edit and render.",
        "Final export: MP4 format (1080p, vertical 9:16 or cinematic 16:9).",
        "Judging criteria: Pacing, beat-sync, color grading, sound design, and creative storytelling impact."
      ]
    },
  ],
  pillars: [
    {
      title: "INNOVATE",
      description: "Explore ideas and emerging technology.",
      badge: "01",
    },
    {
      title: "COMPETE",
      description: "Challenge yourself through engaging events.",
      badge: "02",
    },
    {
      title: "CONNECT",
      description: "Meet students and innovators from different colleges.",
      badge: "03",
    },
    {
      title: "CREATE",
      description: "Turn creativity into meaningful solutions.",
      badge: "04",
    },
  ],
  journey: [
    { step: "01", title: "REGISTER", detail: "Secure your entry pass online" },
    { step: "02", title: "EXPLORE", detail: "Experience technical realms" },
    { step: "03", title: "COMPETE", detail: "Put skills to the ultimate test" },
    { step: "04", title: "CONNECT", detail: "Build lifelong network" },
    { step: "05", title: "CREATE", detail: "Shape future breakthroughs" },
  ],
  coordinators: {
    chief: {
      name: "Dr. Sivaranjani Rajamanickam",
      role: "Chief Coordinator",
      designation: "Principal",
      institution: "Vaigai College of Engineering, Madurai",
    },
    faculty: [
      {
        name: "N. Roobika",
        role: "Faculty Coordinator",
        designation: "AP / CSE",
      },
      {
        name: "S. Shamli",
        role: "Faculty Coordinator",
        designation: "AP / CSE",
      },
    ],
    students: [
      {
        name: "Hari Vignesh",
        role: "Student Coordinator",
        phone: "8110885955",
        displayPhone: "+91 81108 85955",
      },
      {
        name: "Afrin Sahana",
        role: "Student Coordinator",
        phone: "7094181668",
        displayPhone: "+91 70941 81668",
      },
    ],
  },
};
