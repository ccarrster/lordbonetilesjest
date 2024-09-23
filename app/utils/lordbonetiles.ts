export class terrainGroupScore {
    terrain: string;
    crowns: number;
    count: number;
    constructor(domainTile: concreteSquare){
        this.terrain = domainTile.square.terrainType;
        this.crowns = 0;
        this.count = 0;
    }
}

class terrainGroup {
    group: concreteSquare[];
    meeple?: string;
    score: terrainGroupScore[];
    number: number;
    constructor(){
        this.group = [];
        this.meeple;
        this.score = [];
        this.number = 0;
    }
}
export class concreteSquare{
    tLocation: terrainLocation;
    square: terrainSquare;
    visited: boolean;
    constructor(tLocation: terrainLocation, square: terrainSquare){
        this.tLocation = tLocation;
        this.square = square;
        this.visited = false;
    }
}
export class terrainLocation {
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}
export class terrainSquare {
    terrainType: string;
    countCrowns: number;
    constructor(terrainType: string, countCrowns: number){
        this.terrainType = terrainType;
        this.countCrowns = countCrowns;
    }
}

function makeDomino(number: number, lterrain: string, lcrowns: number, rterrain: string, rcrowns: number){
    var domino = new terrainGroup();
    domino.number = number;
    var leftTerrain = new concreteSquare(new terrainLocation(0, 0), new terrainSquare(lterrain, lcrowns));
    domino.group.push(leftTerrain);
    var rightTerrain = new concreteSquare(new terrainLocation(1, 0), new terrainSquare(rterrain, rcrowns));
    domino.group.push(rightTerrain);
    return domino;
}

export function getInitialDominoStack(state: string){
    
    var index = 1;
    var stack = [];
    stack.push(makeDomino(index++, 'wheat fields', 0, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'forests', 0, 'forests', 0));
    stack.push(makeDomino(index++, 'forests', 0, 'forests', 0));
    stack.push(makeDomino(index++, 'forests', 0, 'forests', 0));
    stack.push(makeDomino(index++, 'forests', 0, 'forests', 0));
    stack.push(makeDomino(index++, 'lakes', 0, 'lakes', 0));
    stack.push(makeDomino(index++, 'lakes', 0, 'lakes', 0));
    stack.push(makeDomino(index++, 'lakes', 0, 'lakes', 0));
    stack.push(makeDomino(index++, 'grasslands', 0, 'grasslands', 0));
    stack.push(makeDomino(index++, 'grasslands', 0, 'grasslands', 0));
    stack.push(makeDomino(index++, 'swamps', 0, 'swamps', 0));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'forests', 0));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'lakes', 0));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'grasslands', 0));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'swamps', 0));
    stack.push(makeDomino(index++, 'forests', 0, 'lakes', 0));
    stack.push(makeDomino(index++, 'forests', 0, 'grasslands', 0));
    stack.push(makeDomino(index++, 'wheat fields', 1, 'forests', 0));
    stack.push(makeDomino(index++, 'wheat fields', 1, 'lakes', 0));
    stack.push(makeDomino(index++, 'wheat fields', 1, 'grasslands', 0));
    stack.push(makeDomino(index++, 'wheat fields', 1, 'swamps', 0));
    stack.push(makeDomino(index++, 'wheat fields', 1, 'mines', 0));
    stack.push(makeDomino(index++, 'forests', 1, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'forests', 1, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'forests', 1, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'forests', 1, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'forests', 1, 'lakes', 0));
    stack.push(makeDomino(index++, 'forests', 1, 'grasslands', 0));
    stack.push(makeDomino(index++, 'lakes', 1, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'lakes', 1, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'lakes', 1, 'forests', 0));
    stack.push(makeDomino(index++, 'lakes', 1, 'forests', 0));
    stack.push(makeDomino(index++, 'lakes', 1, 'forests', 0));
    stack.push(makeDomino(index++, 'lakes', 1, 'forests', 0));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'grasslands', 1));
    stack.push(makeDomino(index++, 'lakes', 0, 'grasslands', 1));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'swamps', 1));
    stack.push(makeDomino(index++, 'grasslands', 0, 'swamps', 1));
    stack.push(makeDomino(index++, 'mines', 1, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'grasslands', 2));
    stack.push(makeDomino(index++, 'lakes', 0, 'grasslands', 2));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'swamps', 2));
    stack.push(makeDomino(index++, 'grasslands', 0, 'swamps', 2));
    stack.push(makeDomino(index++, 'mines', 2, 'wheat fields', 0));
    stack.push(makeDomino(index++, 'swamps', 0, 'mines', 2));
    stack.push(makeDomino(index++, 'swamps', 0, 'mines', 2));
    stack.push(makeDomino(index++, 'wheat fields', 0, 'mines', 3));

    //Short game with only 8 dominos
    if(state == 'setupD8'){
        return stack.slice(0, 8); 
    }

    return stack;
}

class optionGroup{
    turn: string;
    options: terrainGroup[];
    type: string;
    constructor(turn: string, type: string){
        this.turn = turn;
        this.options = [];
        this.type = type;
    }
}

class locationXY{
    x:number;
    y:number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

export class game {
    config: config;
    state: string;
    kingdoms: terrainGroup[];
    randomMeeples: string[];
    placingDominos: terrainGroup[];
    choosingDominos: terrainGroup[];
    dominoStack: terrainGroup[];
    meepleColors: string[];
    turn: string;
    placingIndex: number;

    constructor(config: config, state: string){
        this.config = config;
        this.state = state;
        this.kingdoms = []; //Setup Castle
        this.randomMeeples = []; //Add 1 for each player and 2 each for 2 player game
        this.placingDominos = [];
        this.choosingDominos = [];
        this.dominoStack = getInitialDominoStack(this.state);
        this.meepleColors = ['pink', 'blue', 'green', 'yellow'];
        this.turn = '';
        this.placingIndex = 0;
    }
    setupRandomMeeples(){
        for(var i = 0; i < this.config.countPlayers; i++){
            this.randomMeeples.push(this.meepleColors[i]);
            if(this.config.countPlayers == 2){
                this.randomMeeples.push(this.meepleColors[i]);
            }
        }
    }
    setupKingdoms(){
        for(var i = 0; i < this.config.countPlayers; i++){
            this.kingdoms.push(this.getInitialKingdom(this.meepleColors[i]));
        }
    }
    getInitialKingdom(meeple: string){
        var initialKingdom = new terrainGroup();
        initialKingdom.meeple = meeple;
        var castle = new concreteSquare(new terrainLocation(0, 0), new terrainSquare('castle', 0));
        initialKingdom.group.push(castle);
        return initialKingdom;
    }
    start(){
       if(this.state == 'setupScore'){
        this.kingdoms[0].group.push(new concreteSquare(new terrainLocation(1, 0), new terrainSquare('forests', 1)));
        this.kingdoms[1].group.push(new concreteSquare(new terrainLocation(1, 0), new terrainSquare('forests', 1)));
        this.kingdoms[1].group.push(new concreteSquare(new terrainLocation(1, 1), new terrainSquare('forests', 0)));
        this.kingdoms[2].group.push(new concreteSquare(new terrainLocation(1, 0), new terrainSquare('forests', 1)));
        this.kingdoms[2].group.push(new concreteSquare(new terrainLocation(1, 1), new terrainSquare('forests', 1)));
        this.kingdoms[3].group.push(new concreteSquare(new terrainLocation(1, 0), new terrainSquare('forests', 1)));
        this.kingdoms[3].group.push(new concreteSquare(new terrainLocation(-1, 0), new terrainSquare('forests', 1)));
        this.getScores();
       }
       var randomMeeple = this.getRandomMeeple();
       this.turn = randomMeeple;
       this.state = 'choose';
       this.refeshChoosingDominos();
    }
    getRandomMeeple(){
        var result = this.randomMeeples.splice(Math.floor(this.randomMeeples.length * Math.random()), 1);
        return result[0];
    }
    getOptions(){
        if(this.randomMeeples.length > 0){
            var currentOptions = new optionGroup(this.turn, this.state);
            currentOptions.options = this.choosingDominos.filter((domino) => {
                return domino.meeple == undefined;
            });       
        } else {
            var currentOptions = new optionGroup(this.turn, this.state);
            if(this.state == 'choose'){
                currentOptions.options = this.choosingDominos.filter((domino) => {
                    return domino.meeple == undefined;
                });
            } else if(this.state == 'place'){
                currentOptions.options = this.getPlaceOptions();
            }
        }
        
        
        return currentOptions;
    }
    
    getPlaceOptions(): terrainGroup[] {
        var dominion = this.kingdoms[this.meepleColors.indexOf(this.turn)];
        var emptyAdjacentLeft: locationXY[] = [];
        var emptyAdjacentRight: locationXY[] = [];
        var domino: terrainGroup = this.placingDominos[this.placingIndex];
        dominion.group.forEach((dominionTile) => {
            if(dominionTile.square.terrainType == domino.group[0].square.terrainType || dominionTile.square.terrainType == 'castle'){
            //console.log('Left will match sides with ' + dominionTile.square.terrainType + ' ' + dominionTile.tLocation.x + ', ' + dominionTile.tLocation.y);
            var right = this.findTerrain(dominion, dominionTile.tLocation.x + 1, dominionTile.tLocation.y);
            var left = this.findTerrain(dominion, dominionTile.tLocation.x - 1, dominionTile.tLocation.y);
            var up = this.findTerrain(dominion, dominionTile.tLocation.x, dominionTile.tLocation.y + 1);
            var down = this.findTerrain(dominion, dominionTile.tLocation.x, dominionTile.tLocation.y - 1);
            if(right.length == 0){
                emptyAdjacentLeft.push(new locationXY(dominionTile.tLocation.x + 1, dominionTile.tLocation.y));
            }
            if(left.length == 0){
                emptyAdjacentLeft.push(new locationXY(dominionTile.tLocation.x - 1, dominionTile.tLocation.y));
            }
            if(up.length == 0){
                emptyAdjacentLeft.push(new locationXY(dominionTile.tLocation.x, dominionTile.tLocation.y + 1));
            }
            if(down.length == 0){
                emptyAdjacentLeft.push(new locationXY(dominionTile.tLocation.x, dominionTile.tLocation.y - 1));
            }
            }
            if(domino.group[0].square.terrainType != domino.group[1].square.terrainType && (dominionTile.square.terrainType == domino.group[1].square.terrainType || dominionTile.square.terrainType == 'castle')){
                //console.log('Right will match sides with ' + dominionTile.square.terrainType + ' ' + dominionTile.tLocation.x + ', ' + dominionTile.tLocation.y);
                var right = this.findTerrain(dominion, dominionTile.tLocation.x + 1, dominionTile.tLocation.y);
                var left = this.findTerrain(dominion, dominionTile.tLocation.x - 1, dominionTile.tLocation.y);
                var up = this.findTerrain(dominion, dominionTile.tLocation.x, dominionTile.tLocation.y + 1);
                var down = this.findTerrain(dominion, dominionTile.tLocation.x, dominionTile.tLocation.y - 1);
                if(right.length == 0){
                    emptyAdjacentRight.push(new locationXY(dominionTile.tLocation.x + 1, dominionTile.tLocation.y));
                }
                if(left.length == 0){
                    emptyAdjacentRight.push(new locationXY(dominionTile.tLocation.x - 1, dominionTile.tLocation.y));
                }
                if(up.length == 0){
                    emptyAdjacentRight.push(new locationXY(dominionTile.tLocation.x, dominionTile.tLocation.y + 1));
                }
                if(down.length == 0){
                    emptyAdjacentRight.push(new locationXY(dominionTile.tLocation.x, dominionTile.tLocation.y - 1));
                }
            }
        });
        var placementOptions: terrainGroup[] = [];
        emptyAdjacentLeft.forEach((emptyLocation) => {
            var right = this.findTerrain(dominion, emptyLocation.x + 1, emptyLocation.y);
            var left = this.findTerrain(dominion, emptyLocation.x - 1, emptyLocation.y);
            var up = this.findTerrain(dominion, emptyLocation.x, emptyLocation.y + 1);
            var down = this.findTerrain(dominion, emptyLocation.x, emptyLocation.y - 1);
            if(right.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x + 1, emptyLocation.y), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                placementOptions.push(option);
            }
            if(left.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x - 1, emptyLocation.y), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                placementOptions.push(option);
            }
            if(up.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y + 1), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                placementOptions.push(option);
            }
            if(down.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y - 1), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                placementOptions.push(option);
            }
        });
        emptyAdjacentRight.forEach((emptyLocation) => {
            var right = this.findTerrain(dominion, emptyLocation.x + 1, emptyLocation.y);
            var left = this.findTerrain(dominion, emptyLocation.x - 1, emptyLocation.y);
            var up = this.findTerrain(dominion, emptyLocation.x, emptyLocation.y + 1);
            var down = this.findTerrain(dominion, emptyLocation.x, emptyLocation.y - 1);
            if(right.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x + 1, emptyLocation.y), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                placementOptions.push(option);
            }
            if(left.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x - 1, emptyLocation.y), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                placementOptions.push(option);
            }
            if(up.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y + 1), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                placementOptions.push(option);
            }
            if(down.length == 0){
                var option = new terrainGroup();
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y), new terrainSquare(domino.group[1].square.terrainType, domino.group[1].square.countCrowns)));
                option.group.push(new concreteSquare(new terrainLocation(emptyLocation.x, emptyLocation.y - 1), new terrainSquare(domino.group[0].square.terrainType, domino.group[0].square.countCrowns)));
                placementOptions.push(option);
            }
        });
        var placeableOptions: terrainGroup[] = [];
        placementOptions.forEach((option) => {
            if(this.canPlace(dominion, option)){
                placeableOptions.push(option);
            }
        });
        return placeableOptions;
    }

    place(existingDomains: terrainGroup, newDomains: terrainGroup){
        this.kingdoms[this.meepleColors.indexOf(this.turn)].group = existingDomains.group.concat(newDomains.group);
    }

    canPlace(existingDomains: terrainGroup, newDomains: terrainGroup){
        var maxSize: number = this.config.theMightyDuel?7:5;
        var lowestX = 100;
        var lowestY = 100;
        var highestX = -100;
        var highestY = -100;
        var validPlacement = true;
        var placementErrors = [];
        var oneSideMatches = false;
        existingDomains.group.forEach((existing) => {
          newDomains.group.forEach((newDomain) => {     
            if(existing.tLocation.x < lowestX){
              lowestX = existing.tLocation.x;
            } 
            if(newDomain.tLocation.x < lowestX){
              lowestX = newDomain.tLocation.x;
            }
            if(existing.tLocation.y < lowestY){
              lowestY = existing.tLocation.y;
            } 
            if(newDomain.tLocation.y < lowestY){
              lowestY = newDomain.tLocation.y;
            }
            if(existing.tLocation.x > highestX){
              highestX = existing.tLocation.x;
            } 
            if(newDomain.tLocation.x > highestX){
              highestX = newDomain.tLocation.x;
            }
            if(existing.tLocation.y > highestY){
              highestY = existing.tLocation.y;
            } 
            if(newDomain.tLocation.y > highestY){
              highestY = newDomain.tLocation.y;
            }
            if(existing.tLocation.x == newDomain.tLocation.x && existing.tLocation.y == newDomain.tLocation.y){
              //Overlapping placement
              placementErrors.push('Overlapping');
              validPlacement = false;
            } else {
              if(existing.tLocation.x == newDomain.tLocation.x && (existing.tLocation.y == newDomain.tLocation.y + 1 || existing.tLocation.y == newDomain.tLocation.y - 1)){
                if(existing.square.terrainType == 'castle' || existing.square.terrainType == newDomain.square.terrainType){
                  oneSideMatches = true;
                }
              }
              if((existing.tLocation.x == newDomain.tLocation.x + 1 || existing.tLocation.x == newDomain.tLocation.x - 1) && existing.tLocation.y == newDomain.tLocation.y){
                if(existing.square.terrainType == 'castle' || existing.square.terrainType == newDomain.square.terrainType){
                  oneSideMatches = true;
                }
              }
            }
          })
        })
      
        if(oneSideMatches == false){
          //Non matching placement no same terrain touching or none touching at all
          placementErrors.push('No matching side');
          validPlacement = false;
        }
        if(Math.abs(lowestX) + highestX >= maxSize){
          //Too wide
          placementErrors.push('Too wide');
          validPlacement = false;
        }
        if(Math.abs(lowestY) + highestY >= maxSize){
          //Too tall
          placementErrors.push('Too tall');
          validPlacement = false;
        }
        if(validPlacement == true){
          return true;
        } else {
          console.log(placementErrors);
          return false;
        }
    }


    findTerrain(domains: terrainGroup, x: number, y: number){
        var setDomain = domains.group.filter((domain) => {
          if(domain.tLocation.x == x && domain.tLocation.y == y){
            return true;
          }
        });
        if(setDomain.length > 0){
          return setDomain;
        } else {
            return setDomain;
        }
      }

    getRandomDomino(){
        var result = this.dominoStack.splice(Math.floor(this.dominoStack.length * Math.random()), 1);
        return result[0];
    }

    refeshChoosingDominos(){
        this.placingDominos = this.choosingDominos;
        for(var i = 0; i < this.placingDominos.length; i++){
            if(this.placingDominos[i].meeple == undefined){
                this.placingDominos.splice(i, 1);
            }
        }
        this.choosingDominos = [];
        if(this.dominoStack.length > 0){
            this.choosingDominos.push(this.getRandomDomino());
            this.choosingDominos.push(this.getRandomDomino());
            this.choosingDominos.push(this.getRandomDomino());
            this.choosingDominos.push(this.getRandomDomino());
            this.choosingDominos.sort((a: terrainGroup, b: terrainGroup) => {
                return a.number - b.number;
            });
        }
    }
    chooseOption(optionIndex: number){
        var optionList = this.getOptions();
        var index = 0;
        var foundIndex = -1;
        this.choosingDominos.forEach((option) => {
            if(option.number == optionIndex){
                foundIndex = index;
            }
            index += 1;
        });
        if(optionList.type == 'choose'){
            if(this.choosingDominos[foundIndex] == undefined || this.choosingDominos[foundIndex].meeple != undefined){
                throw new Error('Invalid choice on choose option');
            }
            this.choosingDominos[foundIndex].meeple = this.turn;
            if(this.randomMeeples.length > 0){
                this.turn = this.getRandomMeeple();
            } else {
                if(this.placingDominos.length == 0 || (this.config.countPlayers == 3 && this.placingIndex == 3) || this.placingIndex == 4){
                    this.refeshChoosingDominos();
                    this.placingIndex = 0;
                }
                this.turn = '' + this.placingDominos[this.placingIndex].meeple;
                this.state = 'place';
            }
        } else if(optionList.type == 'place'){
            if(optionList.options.length == 0 && optionIndex == -1){
                //Can not place, discard
            } else {
                if(optionList.options[optionIndex] == undefined){
                    throw new Error('Invalid choice on place option ' + optionIndex);
                }
                var dominion = this.kingdoms[this.meepleColors.indexOf(this.turn)];
                this.place(dominion, optionList.options[optionIndex]);
            }
            this.placingIndex += 1;
            if(this.choosingDominos.length > 0){
                this.state = 'choose';
            } else {
                if(this.placingIndex == 4 || (this.config.countPlayers == 3 && this.placingIndex == 3)){
                    this.state = 'gameover';
                } else {
                    this.turn = this.placingDominos[this.placingIndex].meeple + '';
                }
            }
        }
    }
    getScores(){
        this.kingdoms.forEach((kingdom) => {
            kingdom.score = this.getScore(kingdom);
        });
    }

    getScore(group: terrainGroup){
        var scoreSummary: terrainGroupScore[] = [];
        this.clearVisisted(group);
        group.group.forEach((groupTile) => {
            scoreSummary.push(this.scoreTerrain([groupTile], new terrainGroupScore(groupTile), group));
        })
        this.clearVisisted(group);
        return scoreSummary;
    }

    clearVisisted(group: terrainGroup){
        group.group.forEach((groupTile) => {
            groupTile.visited = false;
        }) 
    }

    scoreTerrain(domain: concreteSquare[], terrainGroupScore: terrainGroupScore, group: terrainGroup){
        if(domain.length == 0){
          return terrainGroupScore;
        }
        if(domain[0].visited == true){
          return terrainGroupScore;
        }
        if(domain[0].square.terrainType == terrainGroupScore.terrain){
          domain[0].visited = true;
          terrainGroupScore.count += 1;
          terrainGroupScore.crowns += domain[0].square.countCrowns;
          terrainGroupScore = this.scoreTerrain(this.findTerrain(group, domain[0].tLocation.x + 1, domain[0].tLocation.y), terrainGroupScore, group);
          terrainGroupScore = this.scoreTerrain(this.findTerrain(group, domain[0].tLocation.x - 1, domain[0].tLocation.y), terrainGroupScore, group);
          terrainGroupScore = this.scoreTerrain(this.findTerrain(group, domain[0].tLocation.x, domain[0].tLocation.y + 1), terrainGroupScore, group);
          terrainGroupScore = this.scoreTerrain(this.findTerrain(group, domain[0].tLocation.x, domain[0].tLocation.y - 1), terrainGroupScore, group);
        }
        return terrainGroupScore;
    }

    getScoreTotal(kingdom: terrainGroup){
        var total = 0;
        kingdom.score.forEach((score) => {
            total += (score.count * score.crowns);
        });
        if(this.config.harmony == true){
            if(this.isHarmony(kingdom)){
                total += 5;
            }
        }
        if(this.config.middleKingdom == true){
            if(this.isMiddleKingdom(kingdom)){
                total += 10;
            }
        }
        return total;
    }
      
    getLargestTerritory(kingdom: terrainGroup){
        var largest = 0;
        kingdom.score.forEach((score) => {
          if(score.count > largest){
            largest = score.count;
          }
        });
        return largest;
    }
      
    isHarmony(domain: terrainGroup){
        if(this.config.theMightyDuel == false){
          if(domain.group.length == 25){
            return true;
          }
        } else {
          if(domain.group.length == 49){
            return true;
          }
        }
        return false;
    }
      
    isMiddleKingdom(domain: terrainGroup){
        var smallestX = 100;
        var largestX = -100;
        var smallestY = 100;
        var largestY = -100;
        domain.group.forEach((domainTile) => {
          if(domainTile.tLocation.x < smallestX){
            smallestX = domainTile.tLocation.x;
          }
          if(domainTile.tLocation.x > largestX){
            largestX = domainTile.tLocation.x;
          }
          if(domainTile.tLocation.y < smallestY){
            smallestY = domainTile.tLocation.y;
          }
          if(domainTile.tLocation.y > largestY){
            largestY = domainTile.tLocation.y;
          }
        });
        if(this.config.theMightyDuel == false){
            if(smallestX == -2 && largestX == 2 && smallestY == -2 && largestY == 2){
              return true;
            } else {
              return false;
            }
        } else {
          if(smallestX == -3 && largestX == 3 && smallestY == -3 && largestY == 3){
            return true;
          } else {
            return false;
          }
        }
    }
    getWinners(){
        var highestScore = -1;
        var largestTerritory = -1;
        var winners: string[] = [];
        this.kingdoms.forEach((kingdom) => {
            var total = this.getScoreTotal(kingdom);
            if(total > highestScore){
                highestScore = total;
                winners = [kingdom.meeple + ''];
                largestTerritory = this.getLargestTerritory(kingdom);
            } else if(total == highestScore){
                if(largestTerritory < this.getLargestTerritory(kingdom)){
                    largestTerritory = this.getLargestTerritory(kingdom);
                    winners = [kingdom.meeple + ''];
                } else if(largestTerritory == this.getLargestTerritory(kingdom)){
                    winners.push(kingdom.meeple + '');
                }
            }
        });
        return winners;
    }
}

export function getDynastyWinners(games: game[]){
    var totals: number[] = [];
    games.forEach((game) => {
        for(var i = 0; i < game.kingdoms.length; i++){
            if(totals[i] == undefined){
                totals[i] = 0;
            }
            totals[i] += game.getScoreTotal(game.kingdoms[i]);
        }
    });
    var maxTotal = -1;
    var maxIndexes: string[] = [];
    for(var j = 0; j < totals.length; j++){
        if(totals[j] > maxTotal){
            maxTotal = totals[j];
            maxIndexes = [games[0].meepleColors[j]];
        } else if(totals[j] == maxTotal){
            maxIndexes.push(games[0].meepleColors[j]);
        }
    }
    return maxIndexes;
}

export class config {
    countPlayers: number;
    theMightyDuel: boolean;
    harmony: boolean;
    middleKingdom: boolean;
    dynasty: boolean;
    constructor(countPlayers: number, theMightyDuel = false, harmony = false, middleKingdom = false, dynasty = false){
        this.countPlayers = countPlayers;
        this.theMightyDuel = theMightyDuel;
        this.harmony = harmony;
        this.middleKingdom = middleKingdom;
        this.dynasty = dynasty;
    }
}