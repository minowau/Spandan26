export const sportsData = [
  /* ===================== MAJOR SPORTS ===================== */

  

  {
    id: 'basketball',
    name: 'Basketball',
    category: 'major',
    image: 'images/Sports/BasketBall.webp',
    description: 'Fast-paced basketball matches showcasing teamwork, agility, and shooting precision.',
    rules: [
      'Team size: 5 players + substitutes',
      'Match duration: 4 quarters of 10 minutes',
      'Standard FIBA rules apply',
      'Fouls and free throws strictly enforced',
      'Referee decisions are final'
    ],
    teamSize: '5 players',
    format: 'League + Knockout',
    gif_image: 'images/Gifs/Basketball.gif',
    registerLink: 'https://forms.google.com/basketball',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'volleyball',
    name: 'Volleyball',
    category: 'major',
    image: 'images/Sports/VolleyBall.avif',
    description: 'Competitive volleyball games showcasing teamwork and athleticism.',
    rules: [
      'Team size: 6 players',
      'Best of 3 sets',
      '25 points per set',
      'Rotation mandatory',
      'Standard volleyball rules apply'
    ],
    teamSize: '6 players',
    format: 'League + Knockout',
    gif_image: 'images/Gifs/Volleyball.gif',
    registerLink: 'https://forms.google.com/volleyball',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'badminton',
    name: 'Badminton',
    category: 'major',
    image: 'images/Sports/Badminton.png',
    description: 'High-intensity badminton matches testing speed, reflexes, and stamina.',
    rules: [
      'Singles and Doubles categories',
      'Best of 3 games (21 points)',
      'Knockout format',
      'Standard BWF rules apply',
      'Players must bring their own rackets'
    ],
    teamSize: 'Singles / Doubles',
    format: 'Knockout',
    gif_image: 'images/Gifs/Badminton.gif',
    registerLink: 'https://forms.google.com/badminton',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'cricket',
    name: 'Cricket',
    category: 'major',
    image: 'images/Sports/Cricket.png',
    description: 'Action-packed cricket tournament highlighting batting, bowling, and fielding skills.',
    rules: [
      'Team size: 11 players + substitutes',
      'Match format: Limited overs',
      'League followed by knockouts',
      'Standard cricket rules apply',
      'Umpire decisions are final'
    ],
    teamSize: '11 players',
    format: 'League + Knockout',
    gif_image: 'images/Gifs/Cricket.gif',
    registerLink: 'https://forms.google.com/cricket',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'table-tennis',
    name: 'Table Tennis',
    category: 'major',
    image: 'images/Sports/TableTennis.png',
    description: 'Fast reflexes and sharp spins define this table tennis championship.',
    rules: [
      'Singles and Doubles categories',
      'Best of 5 games',
      '11 points per game',
      'ITTF rules followed',
      'Knockout format'
    ],
    teamSize: 'Singles / Doubles',
    format: 'Knockout',
    gif_image: 'images/Gifs/TableTennis.gif',
    registerLink: 'https://forms.google.com/tabletennis',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },


  {
    id: 'football',
    name: 'Football',
    category: 'major',
    image: 'images/Sports/FootBall.png',
    description: 'Competitive football matches emphasizing teamwork, tactics, and endurance.',
    rules: [
      'Team size: 7 players + substitutes',
      'Match duration: Two halves',
      'Knockout format',
      'Standard football rules apply',
      'Referee decisions are binding'
    ],
    teamSize: '7 players',
    format: 'Knockout',
    gif_image: 'images/Gifs/Football.gif',
    registerLink: 'https://forms.google.com/football',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'chess',
    name: 'Chess',
    category: 'major',
    image: 'images/Sports/Chess.jpg',
    description: 'A battle of strategy and intellect on the chessboard.',
    rules: [
      'Individual participation only',
      'Time control decided by organizers',
      'Swiss league format',
      'FIDE rules followed',
      'Fair play is mandatory'
    ],
    teamSize: 'Individual',
    format: 'Swiss League',
    registerLink: 'https://forms.google.com/chess',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },


  {
    id: 'tennis',
    name: 'Tennis',
    category: 'major',
    image: 'images/Sports/Tennis.png',
    description: 'Singles tennis tournament focusing on technique, stamina, and consistency.',
    rules: [
      'Singles matches only',
      'Best of 3 sets format',
      'Standard tennis scoring',
      'Knockout tournament',
      'Players must bring racquets'
    ],
    teamSize: 'Individual',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/tennis',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'throwball',
    name: 'Throwball',
    category: 'major',
    image: 'images/Sports/ThrowBall.png',
    description: 'Team-based throwball matches focusing on coordination and quick reflexes.',
    rules: [
      'Team size: 7 players',
      'Best of 3 sets',
      'Catch-and-throw rules apply',
      'No running with the ball',
      'Standard throwball rules followed'
    ],
    teamSize: '7 players',
    format: 'League + Knockout',
    registerLink: 'https://forms.google.com/throwball',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },


  /* ===================== MINOR SPORTS ===================== */

  {
    id: 'gully-cricket',
    name: 'Gully Cricket',
    category: 'minor',
    image: 'images/Sports/GullyCricket.png',
    description: 'Street-style cricket with simplified rules and high energy.',
    rules: [
      'Smaller teams',
      'Limited overs',
      'No hard ball',
      'One pitch catch rules apply',
      'Umpire decision is final'
    ],
    teamSize: '6 players',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/gullycricket',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'carrom',
    name: 'Carrom',
    category: 'minor',
    image: 'images/Sports/Carroms.png',
    description: 'Precision-based indoor board game competition.',
    rules: [
      'Singles matches',
      'Knockout format',
      'Standard carrom rules',
      'Queen cover mandatory',
      'No foul tolerance'
    ],
    teamSize: 'Individual',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/carrom',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'tug-of-war',
    name: 'Tug of War (Gym)',
    category: 'minor',
    image: 'images/Sports/TugOfWar.png',
    description: 'Strength-based team competition testing coordination and power.',
    rules: [
      'Fixed team size',
      'Best of 3 pulls',
      'No sitting or lying',
      'Footwear mandatory',
      'Referee decision final'
    ],
    teamSize: 'Team',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/tugofwar',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'pentathlon',
    name: 'Pentathlon (Gym)',
    category: 'minor',
    image: 'images/IIITB_Logo.png',
    description: 'Multi-discipline fitness challenge testing overall athletic ability.',
    rules: [
      'Five fitness events',
      'Points-based scoring',
      'Individual participation',
      'Time limits enforced',
      'Proper sportswear required'
    ],
    teamSize: 'Individual',
    format: 'Points Based',
    registerLink: 'https://forms.google.com/pentathlon',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  /* ===================== ESPORTS ===================== */

  {
    id: 'clash-royale',
    name: 'Clash Royale',
    category: 'esports',
    image: 'images/Sports/Esports/CLashRoyale.jpeg',
    description: 'Real-time strategy battles in Clash Royale.',
    rules: [
      '1v1 matches',
      'Knockout format',
      'Fair play mandatory',
      'Own accounts only',
      'Stable internet required'
    ],
    teamSize: 'Individual',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/clashroyale',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'smash-karts',
    name: 'Smash Karts',
    category: 'esports',
    image: 'images/Sports/Esports/SmashKarts.png',
    description: 'Fast-paced kart combat game with multiplayer battles.',
    rules: [
      'Solo participation',
      'Multiple rounds',
      'Points-based ranking',
      'No external mods',
      'Organizer rules apply'
    ],
    teamSize: 'Individual',
    format: 'League',
    registerLink: 'https://forms.google.com/smashkarts',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'fifa',
    name: 'FIFA',
    category: 'esports',
    image: 'images/Sports/Esports/Fifa.png',
    description: 'Competitive FIFA matches showcasing football gaming skills.',
    rules: [
      '1v1 matches',
      'Standard match settings',
      'Knockout format',
      'No custom teams',
      'Controller only'
    ],
    teamSize: 'Individual',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/fifa',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'codm',
    name: 'CODM',
    category: 'esports',
    image: 'images/Sports/Esports/CODM.jpg',
    description: 'Call of Duty Mobile competitive multiplayer battles.',
    rules: [
      '5v5 team format',
      'Search & Destroy / Hardpoint',
      'Knockout rounds',
      'No emulators allowed',
      'Anti-cheat enforced'
    ],
    teamSize: '5 players',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/codm',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'valorant',
    name: 'Valorant',
    category: 'esports',
    image: 'images/Sports/Esports/Valorant.png',
    description: 'Tactical FPS esports tournament.',
    rules: [
      '5v5 matches',
      'Standard competitive rules',
      'Knockout format',
      'No cheats or exploits',
      'Admin decision final'
    ],
    teamSize: '5 players',
    format: 'Knockout',
    registerLink: 'https://forms.google.com/valorant',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'bgmi',
    name: 'BGMI',
    category: 'esports',
    image: 'images/Sports/Esports/BGMI.webp',
    description: 'Battle royale esports competition.',
    rules: [
      'Squad format',
      'Multiple matches',
      'Points-based ranking',
      'No emulators allowed',
      'Fair play mandatory'
    ],
    teamSize: '4 players',
    format: 'League',
    registerLink: 'https://forms.google.com/bgmi',
    rulesLink: 'https://example.com/athletics-rules.pdf'
  }
];
