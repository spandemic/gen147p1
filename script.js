const fillers = {
    adventurer: ["Derrick Rose", "Dirk Nowitzky", "Jason Kidd", "John Stockton", "Joel Embiid", "Charles Barkley", "Damian Lillard", "Ray Allen", "Jeremy Lin", "Carmelo Anthony", "Paul George", "Dwayne Wade", "Luka Doncic", "Chris Paul", "Russell Westbrook", "Blake Griffin", "Jayson Tatum", "Reggie Miller", "Jimmy Butler", "James Harden", "Kevin Durant", "Patrick Ewing", "Steve Nash", "Allen Iverson", "Yao Ming", "Tracy McGrady"],
    bball: ["Steph Curry", "Giannis Antetokounmpo", "Michael Jordan", "Shaquille O' Neal", "Nikola Jokic", "LeBron James", "Kobe Bryant", "Magic Johnson", "Larry Bird", "Tim Duncan", "Bill Russell", "Wilt Chamberlain", "George Mikan"],
    coach: ["Steve Kerr", "Pat Riley", "Doc Rivers", "Phil Jackson", "Ty Lue", "Gregg Popovich", "Brad Stevens", "Eric Spolstra", "Monty Williams", "Chuck Daly", "KC Jones", "Tom Thibodeau", "Mike D'Antoni", "Frank Vogel"],
    referee: ["Tony Brothers", "Zach Zarba", "Bill Kennedy", "Darrell Garretson", "Earl Strom", "Dick Bavetta", "Joey Crawford", "Tim Donaghy", "Stephen A. Smith", "Max Kellerman"],
    verb: ["eviscerating", "ravaging", "pillaging", "vaporizing", "eliminating", "executing", "mutilating", "trampling", "gaslighting"],
    city: ["Boston", "Los Angeles", "Seattle", "Detroit", "Brooklyn", "Portland", "Dallas", "San Antonio", "Pheonix", "New Orleans", "Sacramento"],
    adjective: ["windy", "desolate", "barren", "hopeless", "thriving", "esteemed", "racist", "bigoted", "distraught", "war-torn", "cherished", "respected", "forgotten"],
    people: ["kindly", "meek", "brave", "wise", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "racist", "bigoted", "trashy", "disrespectful"],
    item: ["arm sleeves", "Jordans", "Headband", "face mask", "ankle wraps", "mouthguard"],
    stat: ["points", "rebounds", "assists", "steals", "blocks", "deflections"],
    statNum: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    time: ["2", "3", "4", "5", "6"],
    shots: ["three point shots", "dunks", "midrange shots", "free throws", "layups", "buzzer beaters", "defence"],
    GOAT: ["Maurice Podoloff", "J. Walter Kennedy", "Larry O'Brien", "David Stern", "Adam Silver"]
    };
  
  const template = `$adventurer, where do you think you're going?!?
  
  $bball was just seen in the direction you're currently heading in, $verb all of the $people fans in his wake!!!

  He was just named a $time time league MVP, and his teammate $adventurer is averaging over $statNum $stat per game, you stand no chance!

  Led by $coach, no city escapes unscathed.
  
  If you are so persistent in going; I, $referee, will guide you to the $adjective city of $city.
  
  Bring your most enchanted $item, and may we bring glorious championship pedigree to $city.

  May $GOAT bless our $shots. 
  
  AMEN
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
