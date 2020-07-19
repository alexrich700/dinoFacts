
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Objects
    myDinos = [];

    Dinos.map(dino => {
        const oneDino = new Dino(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact
        );
        myDinos.push(oneDino);
    });
    console.log(myDinos[3].species);


    // Create Human Object
    function Human (name, weight, height, diet) {
        return {
            name: name,
            weight: weight,
            height: height,
            diet: diet
        };
    }

    // Use IIFE to get human data from form

    // Make user variable global
    let user;

    document.getElementById('btn').addEventListener('click', (event) => {
        const human = (function () {

            let name = document.getElementById('name').value;
            let feet = document.getElementById("feet").value;
            let inches = document.getElementById("inches").value;
            let weight = document.getElementById('weight').value;
            let diet = document.getElementById('diet').value;
    
            function getName() {
                return name;
            }
            function getHeight() {
                feet = Number(feet);
                inches = Number(inches);
                finalHeight = ( feet * 12 ) + inches;
                return finalHeight;
            }
            function getWeight() {
                return weight;
            }
            function getDiet() {
                return diet;
            }
            return {
                name: getName(),
                height: getHeight(),
                weight: getWeight(),
                diet: getDiet()
            };
        })();

        // Creating a new human
        user = Human (human.name, human.weight, human.height, human.diet);
        console.log(user);

        // Invoking the function to prepare the infographic
        prepare();
        compare3()
    });

    // Create Dino Compare Method 1 
    function compare1 () {
        myDinos.map(dino => {
            // Get Weight, Height, and Diet to compare & randomize the outcode
            let dinoArray = Object.keys(dino);
            let dinoFacts = [dinoArray[1], dinoArray[2], dinoArray[3]];
            let randomValue = dinoFacts[Math.floor(dinoFacts.length * Math.random())];

            if(randomValue === "weight") {
                if (dino.weight > user.weight) {
                    let dinoWeighsMore = dino.weight - user.weight;
                    console.log(`The ${dino.species} weighs ${dinoWeighsMore} lbs. more than ${user.name}!`);
                } else {
                    let humanWeighsMore = user.weight - dino.weight;
                    console.log(`${user.name} weighs ${humanWeighsMore} lbs. more than the ${dino.species}!`);
                }
            } else if (randomValue === "height") {
                if (dino.height > user.height) {
                    let dinoIsTaller = dino.height - user.height;
                    console.log(`The ${dino.species} is ${dinoIsTaller} inches taller than the ${user.name}!`);
                } else {
                    let humanIsTaller = user.height - dino.height;
                    console.log(`The ${user.name} is ${humanIsTaller} inches taller than the ${dino.species}!`);
                }
            } else if (randomValue === "diet") {
                let dinosDiet = dino.diet.charAt(0).toUpperCase() + dino.diet.slice(1)
                if (dinosDiet === user.diet) {
                    console.log(`The ${dino.species} and ${user.name} have the same diet!`);
                } else {
                    console.log(`The ${user.name} is a ${user.diet} while the ${dino.species} is a ${dino.diet}`);
                }
            }
        });
    }

    // Create Dino Compare Method 2
    function compare2 () {
        myDinos.map(dino => {
            // Get Weight, Height, and Diet to compare & randomize the outcode
            let dinoArray = Object.keys(dino);
            let dinoFacts = [dinoArray[1], dinoArray[2], dinoArray[3]];
            let randomValue = dinoFacts[Math.floor(dinoFacts.length * Math.random())];

            randomValue === "weight" ? console.log(`The ${dino.species} is ${dino.weight} lbs. and ${user.name} is ${user.weight} lbs.`)
            : randomValue === "height" ? console.log(`The ${dino.species} is ${dino.height} inches and ${user.name} is ${user.height} inches`)
            : randomValue === "diet" ? console.log(`The ${dino.species} is a ${dino.diet} and ${user.name} is a ${user.diet}`)
            : console.log('Something broke!');

        })
    }
      
    
    // Create Dino Compare Method 3
    function compare3 () {
        myDinos.map(dino => {
            // Get Weight, Height, and Diet to compare & randomize the outcode
            let dinoArray = Object.keys(dino);
            let dinoFacts = [dinoArray[1], dinoArray[2], dinoArray[3]];
            let randomValue = dinoFacts[Math.floor(dinoFacts.length * Math.random())];

            function weightCalled () {
                let weighsMore;
                let winner;
                dino.weight > user.weight ? (weighsMore=dino.weight-user.weight, winner="dino") : (weighsMore=user.weight-dino.weight, winner="user");
                winner === "dino" ? (console.log(`The ${dino.species} weighs ${weighsMore} lbs. more than ${user.name}!`)) : (console.log(`${user.name} weighs ${weighsMore} lbs. more than the ${dino.species}!`));
            }

            function heightCalled () {
                let isTaller;
                let winner;
                dino.height > user.height ? (isTaller=dino.height-user.height, winner="dino") : (isTaller=user.height-dino.height, winner="user");
                winner === "dino" ? (console.log(`The ${dino.species} is ${isTaller} inches taller than ${user.name}!`)) : (console.log(`${user.name} weighs ${isTaller} inches taller than the ${dino.species}!`));
            }

            function dietCalled () {
                dino.diet === user.diet ? (console.log(`The ${dino.species} and ${user.name} have the same diet!`)) : (console.log(`The ${user.name} is a ${user.diet} while the ${dino.species} is a ${dino.diet}`));
            }

            switch (randomValue) {
                case "weight":
                    weightCalled ();
                    break;
                case "height":
                    heightCalled ();
                    break;
                case "diet":
                    dietCalled ();
                    break;
                default:
                    console.log("Something broke!");
            }

        })
    }


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
function prepare() {



}