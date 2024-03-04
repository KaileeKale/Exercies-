// 1a
const jedi = [];
// 1b
jedi[0] = "Luke";
// 1c
jedi.push("Obi-Wan Kenobi");
// 1d
jedi.unshift("Yoda");
// 1e
console.log(jedi[0]);
// 1f
jedi.pop();
// 1g 
jedi.shift();
console.log(jedi);
// 2a 
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
// 2c ["Darth Vader", "Darth Sidious", "Count Dooku"];
const bountyHunters = ["Boba Fett", "Cad Bane"];
a 
const starWarsVillains = sithLords.concat(bountyHunters);
console.log(starWarsVillains);
// 2d
const selectedVillains = starWarsVillains.slice(1, 3);
console.log(selectedVillains);
// 3a-d
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
  };
  
  console.log(droids["astromech"]); // Accessing "R2-D2" using square brackets
  console.log(droids.protocol); // Accessing "C-3PO" using dot notation
  
  droids.assassin = "IG-11"; // Changing the value of "IG-88" to "IG-11" 
// no bonus