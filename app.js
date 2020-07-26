
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

        // Invoking the function to prepare the infographic
        prepare();
    });
    

    // Random fact constructor. Used to store the random facts so that I can loop through and display them.
    function DinosInformation(species, image, fact) {
        this.species = species;
        this.image = image;
        this.fact = fact;
    }
    myGridInfo = [];

    function createNewDinoItem (species, fact) {
        let speciesLowerCase = species.charAt(0).toLowerCase() + species.slice(1);
        let image = `images/${speciesLowerCase}.png`;
        let dinosFact = species === "Pigeon" ? Dinos[7].fact : fact;

        const oneFact = new DinosInformation(
            species,
            image,
            dinosFact
        );
        myGridInfo.push(oneFact);
    }

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
                    let fact = `The ${dino.species} weighs ${dinoWeighsMore} lbs. more than ${user.name}!`;
                    createNewDinoItem (dino.species, fact);
                } else {
                    let humanWeighsMore = user.weight - dino.weight;
                    let fact = `${user.name} weighs ${humanWeighsMore} lbs. more than the ${dino.species}!`;
                    createNewDinoItem (dino.species, fact);
                }
            } else if (randomValue === "height") {
                if (dino.height > user.height) {
                    let dinoIsTaller = dino.height - user.height;
                    let fact = `The ${dino.species} is ${dinoIsTaller} inches taller than the ${user.name}!`;
                    createNewDinoItem (dino.species, fact);
                } else {
                    let humanIsTaller = user.height - dino.height;
                    let fact = `The ${user.name} is ${humanIsTaller} inches taller than the ${dino.species}!`;
                    createNewDinoItem (dino.species, fact);
                }
            } else if (randomValue === "diet") {
                let dinosDiet = dino.diet.charAt(0).toUpperCase() + dino.diet.slice(1)
                if (dinosDiet === user.diet) {
                    let fact = `The ${dino.species} and ${user.name} have the same diet!`;
                    createNewDinoItem (dino.species, fact);
                } else {
                    let fact = `The ${user.name} is a ${user.diet} while the ${dino.species} is a ${dino.diet}`;
                    createNewDinoItem (dino.species, fact);
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

            let fact = randomValue === "weight" ? `The ${dino.species} is ${dino.weight} lbs. and ${user.name} is ${user.weight} lbs.`
            : randomValue === "height" ? `The ${dino.species} is ${dino.height} inches and ${user.name} is ${user.height} inches`
            : randomValue === "diet" ? `The ${dino.species} is a ${dino.diet} and ${user.name} is a ${user.diet}`
            : console.log('Something broke!');
            createNewDinoItem (dino.species, fact);
        });
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
                let fact = winner === "dino" ? `The ${dino.species} weighs ${weighsMore} lbs. more than ${user.name}!` : `${user.name} weighs ${weighsMore} lbs. more than the ${dino.species}!`;
                createNewDinoItem (dino.species, fact);
            }

            function heightCalled () {
                let isTaller;
                let winner;
                dino.height > user.height ? (isTaller=dino.height-user.height, winner="dino") : (isTaller=user.height-dino.height, winner="user");
                let fact = winner === "dino" ? `The ${dino.species} is ${isTaller} inches taller than ${user.name}!` : `${user.name} is ${isTaller} inches taller than the ${dino.species}!`;
                createNewDinoItem (dino.species, fact);
            }

            function dietCalled () {
                let dinosDiet = dino.diet.charAt(0).toUpperCase() + dino.diet.slice(1)
                let fact = dinosDiet === user.diet ? `The ${dino.species} and ${user.name} have the same diet!` : `${user.name} is a ${user.diet} while the ${dino.species} is a ${dino.diet}`;
                createNewDinoItem (dino.species, fact);
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

        });
    }

    // Suffles the grid array
    function shuffleGrid(myGridInfo) {
        for (let i = myGridInfo.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [myGridInfo[i], myGridInfo[j]] = [myGridInfo[j], myGridInfo[i]];
        }
        addHumanToGrid ();
    }
    // Adds a human to the grid array
    function addHumanToGrid () {
        myGridInfo.splice(4,0,user);
    }

    // Generate Tiles for each Dino in Array
    function createGrid () {
        const myGrid = document.getElementById("grid");
        // Suffles the grid array and then calls addHumanToGrid
        shuffleGrid(myGridInfo);

        // Add tiles to DOM
        myGridInfo.map(grid => {
            function displayDino () {
                const gridCode = `<div class="grid-item"><h3>${grid.species}</h3><img src="${grid.image}"><p>${grid.fact}</p></div>`;
                myGrid.innerHTML += gridCode;
            }
            function displayHuman () {
                const gridCode = `<div class="grid-item"><h3>${grid.name}</h3><img src="images/human.png"></div>`;
                myGrid.innerHTML += gridCode;
            }

            // Checks if the item is a human
            grid.name === user.name ? displayHuman()
            : displayDino();
        });

        // Remove form from screen
        (function () {
            let myForm = document.getElementById('dino-compare');
            myForm.style.display = 'none';
        })();

    }



// On button click, prepare and display infographic
function prepare () {
    compare3();
    createGrid();
}