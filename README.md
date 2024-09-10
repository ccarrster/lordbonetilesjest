Lord Bone Tiles TDD with Jest

Rules of a similar game: https://blueorangegames.eu/wp-content/uploads/2017/04/KINGDOMINO_rules_ML.pdf

Basic game logic and components are implemented.

Future plans
No persistance, no rest api, no ai, no ui yet.
TODO Also 2 box set rules with upto 8 players in team play.

Basic interactions:

The config is:
constructor(countPlayers: number, theMightyDuel = false, harmony = false, middleKingdom = false, dynasty = false)

var testConfig = new config(2, false, false, false, true);
var testGame1 = new game(testConfig, 'setup');
testGame1.setupRandomMeeples();
testGame1.setupKingdoms();
testGame1.start();
while(testGame1.state != 'gameover'){
  var options = testGame.getOptions();
  //You would need to add some UI here
  if the game state is 'choose' you need to set n to the domino number(1-48)
  if the game state id 'place' you need to set n the option index(0-x) of the placement you are making or if there are no valid options, then set n to -1
  testGame.chooseOption(n);
}
testGame1.getScores();
var winners = testGame1.getWinners();
Will give you an array of meeple colors of the player with the top score and largest territory

Another option is dynasty which is the best of 3 games

var dynastyWinners = getDynastyWinners([testGame1, testGame2, testGame3]);
Will give you an array of meeple colors of the top combined score.

For the UI to figgure out how to display it you will need to go into the code.
the game has kingdoms
the kingdoms are terrain groups
a terrain group is a bunch of concrete squares
a concrete square has an x,y location and a square
a square has a terrain type and a number of crowns

There is also a list of choosing dominos and placing dominos
They are also terrain groups

The game generates a list of valid placements and you need to choose one by index, perhaps in the future you could send placement information back instead.
Internal scoring could be used by AI to figgure out what tiles is best to choose and where to place it for the most points.

Plan is to add expansions and other variants of the game after implementing persistance, rest api, ai, and a basic web ui

# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

## How to Use

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command:

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm test
```
