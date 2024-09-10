import { getInitialDominoStack, game, config, concreteSquare, terrainLocation, terrainSquare, getDynastyWinners } from "./lordbonetiles";

test("Count wrong on domino stack", () => {
    expect(getInitialDominoStack('start').length).toBe(48);
  });

  test("Count wrong on domino stack", () => {

    var counts: string[] = [];

    var dominos = getInitialDominoStack('start');
    dominos.forEach((domino) => {
        counts.push(domino.group[0].square.terrainType);
        counts.push(domino.group[1].square.terrainType);
    })

    var wheatCount = counts.filter((terrainType) => {
        return terrainType == 'wheat fields';
    });
    expect(wheatCount.length).toBe(26);

    var lakeCount = counts.filter((terrainType) => {
        return terrainType == 'lakes';
    });
    expect(lakeCount.length).toBe(18);

    var forestCount = counts.filter((terrainType) => {
        return terrainType == 'forests';
    });
    expect(forestCount.length).toBe(22);

    var grassCount = counts.filter((terrainType) => {
        return terrainType == 'grasslands';
    });
    expect(grassCount.length).toBe(14);

    var swampCount = counts.filter((terrainType) => {
        return terrainType == 'swamps';
    });
    expect(swampCount.length).toBe(10);

    var mineCount = counts.filter((terrainType) => {
        return terrainType == 'mines';
    });
    expect(mineCount.length).toBe(6);
  });

  test("Count crowns wrong on domino stack", () => {

    var counts: string[] = [];

    var dominos = getInitialDominoStack('start');
    dominos.forEach((domino) => {
        counts.push(domino.group[0].square.terrainType + domino.group[0].square.countCrowns);
        counts.push(domino.group[1].square.terrainType + domino.group[1].square.countCrowns);
    })

    var wheatCount0 = counts.filter((terrainType) => {
        return terrainType == 'wheat fields0';
    });
    expect(wheatCount0.length).toBe(21);

    var wheatCount1 = counts.filter((terrainType) => {
        return terrainType == 'wheat fields1';
    });
    expect(wheatCount1.length).toBe(5);

    var lakeCount0 = counts.filter((terrainType) => {
        return terrainType == 'lakes0';
    });
    expect(lakeCount0.length).toBe(12);

    var lakeCount1 = counts.filter((terrainType) => {
        return terrainType == 'lakes1';
    });
    expect(lakeCount1.length).toBe(6);

    var forestCount0 = counts.filter((terrainType) => {
        return terrainType == 'forests0';
    });
    expect(forestCount0.length).toBe(16);

    var forestCount1 = counts.filter((terrainType) => {
        return terrainType == 'forests1';
    });
    expect(forestCount1.length).toBe(6);

    var grassCount0 = counts.filter((terrainType) => {
        return terrainType == 'grasslands0';
    });
    expect(grassCount0.length).toBe(10);

    var grassCount1 = counts.filter((terrainType) => {
        return terrainType == 'grasslands1';
    });
    expect(grassCount1.length).toBe(2);

    var grassCount2 = counts.filter((terrainType) => {
        return terrainType == 'grasslands2';
    });
    expect(grassCount2.length).toBe(2);

    var swampCount0 = counts.filter((terrainType) => {
        return terrainType == 'swamps0';
    });
    expect(swampCount0.length).toBe(6);

    var swampCount1 = counts.filter((terrainType) => {
        return terrainType == 'swamps1';
    });
    expect(swampCount1.length).toBe(2);

    var swampCount2 = counts.filter((terrainType) => {
        return terrainType == 'swamps2';
    });
    expect(swampCount2.length).toBe(2);

    var mineCount0 = counts.filter((terrainType) => {
        return terrainType == 'mines0';
    });
    expect(mineCount0.length).toBe(1);
    var mineCount1 = counts.filter((terrainType) => {
        return terrainType == 'mines1';
    });
    expect(mineCount1.length).toBe(1);
    var mineCount2 = counts.filter((terrainType) => {
        return terrainType == 'mines2';
    });
    expect(mineCount2.length).toBe(3);
    var mineCount3 = counts.filter((terrainType) => {
        return terrainType == 'mines3';
    });
    expect(mineCount3.length).toBe(1);
  });

  test("Game missing parts", () => {
    var testConfig = new config(2, false, false, false, false);
    var testGame = new game(testConfig, 'test');
    expect(testGame != undefined).toBe(true);
  });

  test("Game missing parts 2", () => {
    var testConfig = new config(2, false, false, false, false);
    var testGame = new game(testConfig, 'test');
    testGame.setupRandomMeeples();
    expect(testGame.randomMeeples.length).toBe(4);
  });

  test("Game missing parts 3", () => {
    var testConfig = new config(3, false, false, false, false);
    var testGame = new game(testConfig, 'test');
    testGame.setupRandomMeeples();
    expect(testGame.randomMeeples.length).toBe(3);
  });

  test("Game missing parts 4", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'test');
    testGame.setupRandomMeeples();
    expect(testGame.randomMeeples.length).toBe(4);
  });

  test("Game missing parts kingdoms 2", () => {
    var testConfig = new config(2, false, false, false, false);
    var testGame = new game(testConfig, 'test');
    testGame.setupKingdoms();
    expect(testGame.kingdoms.length).toBe(2);
    expect(testGame.kingdoms[0].group.length).toBe(1);
    expect(testGame.kingdoms[0].group[0].square.terrainType).toBe('castle');
    expect(testGame.kingdoms[0].group[0].tLocation.x).toBe(0);
    expect(testGame.kingdoms[0].group[0].tLocation.y).toBe(0);
  });

  test("Game missing parts kingdoms 3", () => {
    var testConfig = new config(3, false, false, false, false);
    var testGame = new game(testConfig, 'test');
    testGame.setupKingdoms();
    expect(testGame.kingdoms.length).toBe(3);
  });

  test("Game missing parts kingdoms 4", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'test');
    testGame.setupKingdoms();
    expect(testGame.kingdoms.length).toBe(4);
  });

  test("Game Start 4", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    expect(testGame.turn == '').toBe(true);
    testGame.start();
    var options = testGame.getOptions();
    expect(testGame.turn != '').toBe(true);
  });

  test("Game Start 4", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    var options = testGame.getOptions();
    expect(options.turn == testGame.turn).toBe(true);
    expect(options.options.length).toBe(4);
  });

  test("Game Start third turn", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    console.log(options);
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    console.log(options);
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    console.log(options);
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    console.log(options);
    expect(options.options.length).toBe(1);
  });


  test("Game Start fouth turn", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[3]);
    options = testGame.getOptions();
    if(options.options[0].group[0].square.terrainType == options.options[0].group[1].square.terrainType){
      expect(options.options.length).toBe(12);
    } else {
      expect(options.options.length).toBe(24);
    }
  });

  test("Game Start random turn", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    var numbers: number[] = [];
    var options = testGame.getOptions();
    var turns = [];
    turns.push(options.turn);
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    turns.push(options.turn);
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    turns.push(options.turn);
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    turns.push(options.turn);
    testGame.chooseOption(numbers[3]);
    expect(turns.includes('pink') && turns.includes('yellow') && turns.includes('blue') && turns.includes('green')).toBe(true);
  });

  test("Game Start 8 turns", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[3]);
    options = testGame.getOptions();
    if(options.options[0].group[0].square.terrainType == options.options[0].group[1].square.terrainType){
      expect(options.options.length).toBe(12);
    } else {
      expect(options.options.length).toBe(24);
    }
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.options.length).toBe(4);
    numbers = [];
    options.options.forEach((option) => {
        numbers.push(option.number);
    });

    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    
    expect(options.type).toBe('place');
    if(options.options[0].group[0].square.terrainType == options.options[0].group[1].square.terrainType){
      expect(options.options.length).toBe(12);
    } else {
      expect(options.options.length).toBe(24);
    }
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[3]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    expect(options.options.length).toBe(4);
  });

  test("ShortGame", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setupD8');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[3]);
    options = testGame.getOptions();
    if(options.options[0].group[0].square.terrainType == options.options[0].group[1].square.terrainType){
      expect(options.options.length).toBe(12);
    } else {
      expect(options.options.length).toBe(24);
    }
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    expect(options.options.length).toBe(4);
    numbers = [];
    options.options.forEach((option) => {
        numbers.push(option.number);
    });

    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    
    expect(options.type).toBe('place');
    if(options.options[0].group[0].square.terrainType == options.options[0].group[1].square.terrainType){
      expect(options.options.length).toBe(12);
    } else {
      expect(options.options.length).toBe(24);
    }
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[3]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    var firstTurn = options.turn;
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(firstTurn != options.turn).toBe(true);
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('gameover');
  });

  test("Game Start Score", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    expect(testGame.kingdoms[0].score.length).toBe(0);
    expect(testGame.kingdoms[1].score.length).toBe(0);
    expect(testGame.kingdoms[2].score.length).toBe(0);
    expect(testGame.kingdoms[3].score.length).toBe(0);
  });

  test("Game End Score", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setupScore');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(1);
    expect(testGame.getScoreTotal(testGame.kingdoms[1])).toBe(2);
    expect(testGame.getScoreTotal(testGame.kingdoms[2])).toBe(4);
    expect(testGame.getScoreTotal(testGame.kingdoms[3])).toBe(2);
  });

  test("Game End Score Size", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setupScore');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    expect(testGame.getLargestTerritory(testGame.kingdoms[0])).toBe(1);
    expect(testGame.getLargestTerritory(testGame.kingdoms[1])).toBe(2);
    expect(testGame.getLargestTerritory(testGame.kingdoms[2])).toBe(2);
    expect(testGame.getLargestTerritory(testGame.kingdoms[3])).toBe(1);
  });

  test("ShortGame 3 palyer", () => {
    var testConfig = new config(3, false, false, false, false);
    var testGame = new game(testConfig, 'setupD8');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    expect(testGame.dominoStack.length).toBe(4);
    expect(testGame.choosingDominos.length).toBe(4);
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(0);
    
    numbers = [];
    options = testGame.getOptions();
    expect(testGame.dominoStack.length).toBe(0);
    expect(testGame.placingDominos.length).toBe(3);
    expect(testGame.choosingDominos.length).toBe(4);
    options.options.forEach((option) => {
        numbers.push(option.number);
    });

    testGame.chooseOption(numbers[0]);
    testGame.chooseOption(0);
    testGame.chooseOption(numbers[1]);
    testGame.chooseOption(0);
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();

    expect(testGame.dominoStack.length).toBe(0);
    expect(testGame.placingDominos.length).toBe(3);
    expect(testGame.choosingDominos.length).toBe(0);

    expect(options.type).toBe('place');
    
    testGame.chooseOption(0);
    testGame.chooseOption(0);
    testGame.chooseOption(0);
    options = testGame.getOptions();
    expect(options.type).toBe('gameover');
  });

  test("Test invalid choose option", () => {
    var testConfig = new config(3, false, false, false, false);
    var testGame = new game(testConfig, 'setupD8');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    testGame.chooseOption(numbers[0]);
    expect(() => {
      testGame.chooseOption(numbers[0]);
    }).toThrow();
  });

  test("Test invalid place option", () => {
    var testConfig = new config(3, false, false, false, false);
    var testGame = new game(testConfig, 'setupD8');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    expect(testGame.dominoStack.length).toBe(4);
    expect(testGame.choosingDominos.length).toBe(4);
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    expect(() => {
      testGame.chooseOption(-1);
    }).toThrow();
    expect(() => {
      testGame.chooseOption(500);
    }).toThrow();
  });

  test("Test unplaceable", () => {
    var testConfig = new config(3, false, false, false, false);
    var testGame = new game(testConfig, 'setupD8');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    expect(testGame.dominoStack.length).toBe(4);
    expect(testGame.choosingDominos.length).toBe(4);
    var numbers: number[] = [];
    var options = testGame.getOptions();
    options.options.forEach((option) => {
        numbers.push(option.number);
    });
    //Dirty test Overwrite castle
    testGame.kingdoms[0].group[0].square.terrainType = 'Unmatchable';
    testGame.kingdoms[1].group[0].square.terrainType = 'Unmatchable';
    testGame.kingdoms[2].group[0].square.terrainType = 'Unmatchable';
    testGame.chooseOption(numbers[0]);
    options = testGame.getOptions();
    testGame.chooseOption(numbers[1]);
    options = testGame.getOptions();
    expect(options.type).toBe('choose');
    testGame.chooseOption(numbers[2]);
    options = testGame.getOptions();
    expect(options.type).toBe('place');
    testGame.chooseOption(-1);
  });

  //TODO special scores
  test("Game End Score Harmony on duel off", () => {
    var testConfig = new config(4, false, true, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -2; i < 3; i++){
      for(var j = -2; j < 3; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    console.log(testGame.kingdoms[0].score);
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(5);
  });

  test("Game End Score Harmony off duel off", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -2; i < 3; i++){
      for(var j = -2; j < 3; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(0);
  });

  test("Game End Score Harmony on duel on", () => {
    var testConfig = new config(4, true, true, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -3; i < 4; i++){
      for(var j = -3; j < 4; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    console.log(testGame.kingdoms[0].score);
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(5);
  });

  test("Game End Score Harmony off duel on", () => {
    var testConfig = new config(4, true, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -3; i < 4; i++){
      for(var j = -3; j < 4; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(0);
  });

  test("Game End Score Middle on duel off", () => {
    var testConfig = new config(4, false, false, true, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -2; i < 3; i++){
      for(var j = -2; j < 3; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    console.log(testGame.kingdoms[0].score);
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(10);
  });

  test("Game End Score Middle off duel off", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -2; i < 3; i++){
      for(var j = -2; j < 3; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(0);
  });

  test("Game End Score Middle on duel on", () => {
    var testConfig = new config(4, true, false, true, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -3; i < 4; i++){
      for(var j = -3; j < 4; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    console.log(testGame.kingdoms[0].score);
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(10);
  });

  test("Game End Score Middle off duel on", () => {
    var testConfig = new config(4, true, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -3; i < 4; i++){
      for(var j = -3; j < 4; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(0);
  });

  test("Game End Score Middle on duel off offset", () => {
    var testConfig = new config(4, false, false, true, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -1; i < 4; i++){
      for(var j = -2; j < 3; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    console.log(testGame.kingdoms[0].score);
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(0);
  });

  test("Game End Score Middle on harmony on duel off", () => {
    var testConfig = new config(4, false, true, true, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    for(var i = -2; i < 3; i++){
      for(var j = -2; j < 3; j++){
        if(!(i == 0 && j == 0)){
          testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(i, j), new terrainSquare('castle', 0)));
        }
      }
    }
    expect(testGame.getScoreTotal(testGame.kingdoms[0])).toBe(15);
  });

  test("Game End Score Winner", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setupScore');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    testGame.getScores();
    expect(testGame.getWinners().length).toBe(1);
    expect(testGame.getWinners()[0]).toBe('green');
  });

  test("Test 4 way draw", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    testGame.getScores();
    expect(testGame.getWinners().length).toBe(4);
  });

  test("Test 2 way draw", () => {
    var testConfig = new config(2, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    testGame.getScores();
    expect(testGame.getWinners().length).toBe(2);
  });

  test("Test 3 way draw", () => {
    var testConfig = new config(3, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    testGame.getScores();
    expect(testGame.getWinners().length).toBe(3);
  });

  test("Test 2 way draw land size", () => {
    var testConfig = new config(4, false, false, false, false);
    var testGame = new game(testConfig, 'setup');
    testGame.setupRandomMeeples();
    testGame.setupKingdoms();
    testGame.start();
    
    testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('forests', 0)));
    testGame.kingdoms[0].group.push(new concreteSquare(new terrainLocation(0, 2), new terrainSquare('forests', 0)));
    testGame.kingdoms[1].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('mines', 0)));
    testGame.kingdoms[1].group.push(new concreteSquare(new terrainLocation(0, 2), new terrainSquare('mines', 0)));
    testGame.getScores();
    console.log(testGame.getLargestTerritory(testGame.kingdoms[0]));
    console.log(testGame.getLargestTerritory(testGame.kingdoms[1]));
    console.log(testGame.getLargestTerritory(testGame.kingdoms[2]));
    console.log(testGame.getLargestTerritory(testGame.kingdoms[3]));
    expect(testGame.getWinners().length).toBe(2);
    expect(testGame.getWinners()[0]).toBe('pink');
    expect(testGame.getWinners()[1]).toBe('blue');
    
  });

  test("Test Dynasty", () => {
    var testConfig = new config(2, false, false, false, true);
    var testGame1 = new game(testConfig, 'setup');
    testGame1.setupRandomMeeples();
    testGame1.setupKingdoms();
    testGame1.start();
    testGame1.kingdoms[0].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('forests', 2)));
    testGame1.getScores();
    
    var testGame2 = new game(testConfig, 'setup');
    testGame2.setupRandomMeeples();
    testGame2.setupKingdoms();
    testGame2.start();
    testGame2.kingdoms[0].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('forests', 2)));
    testGame2.getScores();

    
    var testGame3 = new game(testConfig, 'setup');
    testGame3.setupRandomMeeples();
    testGame3.setupKingdoms();
    testGame3.start();
    testGame3.kingdoms[1].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('mines', 3)));
    testGame3.kingdoms[1].group.push(new concreteSquare(new terrainLocation(0, 2), new terrainSquare('mines', 3)));
    testGame3.getScores();

    var dynastyWinners = getDynastyWinners([testGame1, testGame2, testGame3]);
    expect(dynastyWinners.length).toBe(1);
    expect(dynastyWinners[0]).toBe('blue');

  });

  test("Test Dynasty Draw", () => {
    var testConfig = new config(2, false, false, false, true);
    var testGame1 = new game(testConfig, 'setup');
    testGame1.setupRandomMeeples();
    testGame1.setupKingdoms();
    testGame1.start();
    testGame1.kingdoms[0].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('forests', 3)));
    testGame1.getScores();
    
    var testGame2 = new game(testConfig, 'setup');
    testGame2.setupRandomMeeples();
    testGame2.setupKingdoms();
    testGame2.start();
    testGame2.kingdoms[0].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('forests', 3)));
    testGame2.getScores();

    
    var testGame3 = new game(testConfig, 'setup');
    testGame3.setupRandomMeeples();
    testGame3.setupKingdoms();
    testGame3.start();
    testGame3.kingdoms[1].group.push(new concreteSquare(new terrainLocation(0, 1), new terrainSquare('mines', 0)));
    testGame3.kingdoms[1].group.push(new concreteSquare(new terrainLocation(0, 2), new terrainSquare('mines', 3)));
    testGame3.getScores();

    var dynastyWinners = getDynastyWinners([testGame1, testGame2, testGame3]);
    expect(dynastyWinners.length).toBe(2);
    expect(dynastyWinners[0]).toBe('pink');
    expect(dynastyWinners[1]).toBe('blue');

  });
