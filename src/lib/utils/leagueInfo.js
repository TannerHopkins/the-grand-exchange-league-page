/*   STEP 1   */
export const leagueID = "959944165654151168"; // your league ID
export const leagueName = "The Grand Exchange"; // your league name
export const dues = 25; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>The Grand Exchange is a Superflex, full-PPR dynasty league where 10 runescape degenerates try to remember to set their lineups in between herb runs.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "name": "TengoUnchained",
    "managerID": "82566924864995328",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Nashville, TN (CT)", // (optional)
    "bio": "League Commish. Just here to max my team. IGN: priffindor (ironman).",
    "photo": "/managers/shadowwyrm.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2009, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    // "rival": {
    //   name: "TODO", // Can be anything (usually your rival's name)
    //   link: 2, // manager array number within this array, or null to link back to all managers page
    //   // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    // },
    "favoritePlayer": 5872, // Deebo Samuel, WR // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Make Nieve proud.",
    "tradingScale": 7, // 1 - 10
    // "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "name": "Yed95",
    "managerID": "427094779021504512",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    // "location": "TODO", // (optional)
    // "bio": "TODO.",
    // "photo": "/managers/TODO.jpg", // square ratio recommended (no larger than 500x500)
    // "fantasyStart": TODO, // (optional) when did the manager start playing fantasy football
    // "favoriteTeam": "TODO", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    // "rival": {
    //   name: "TODO", // Can be anything (usually your rival's name)
    //   link: 2, // manager array number within this array, or null to link back to all managers page
    //   // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    // },
    // "favoritePlayer": TODO, // Deebo Samuel, WR // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    // "valuePosition": "TODO", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    // "rookieOrVets": "TODO", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    // "philosophy": "TODO.",
    // "tradingScale": TODO, // 1 - 10
    // "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "name": "WookHunter",
    "managerID": "468641947918004224",
  },
  {
    "name": "rockerbug",
    "managerID": "469956414815596544",
  },
  {
    "name": "MrR3dmaa",
    "managerID": "731364048112820224",
  },
  {
    "name": "Sh1tMyPants",
    "managerID": "915369314524626944",
  },
  {
    "name": "JRooney1998",
    "managerID": "915772453522366464",
  },
  {
    "name": "Gopherpaws",
    "managerID": "915781031142748160",
  },
  {
    "name": "NickFlo99",
    "managerID": "917664391141892096",
  },
  {
    "name": "scubasteveswag",
    "managerID": "978363850770714624",
  }
]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    