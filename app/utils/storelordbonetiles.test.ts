import { game, config } from "./lordbonetiles";
import { store, load } from "./storelordbonetiles";

import {MongoClient, Db} from 'mongodb';

interface User {
  _id: string;
  name: string;
}

describe('insert', () => {
  let connection: MongoClient;
  let db: Db;

  

  beforeAll(async () => {
    //connection = await MongoClient.connect('mongodb://localhost:27017/lordbonetiles');
    //db = await connection.db('games');
  });

  afterAll(async () => {
    //await connection.close();
  });

  /*
  it('should insert a doc into collection', async () => {
    const users = db.collection<User>('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);

    await users.drop();
  });
  */

  it('should store a game', async () => {
    let newConfig: config = new config(4);
    let newGame: game = new game(newConfig, 'start');
    let gameId = await store(newGame);
    let loadGame = await load(gameId);
    
    expect(loadGame.config.countPlayers).toBe(4);
  })

  it('should store and load game', async () => {
    let newConfig: config = new config(4);
    let newGame: game = new game(newConfig, 'start');
    newGame.setupRandomMeeples();
    newGame.setupKingdoms();
    newGame.start();
    let gameId = await store(newGame);

    let loadGame: game = await load(gameId);
    var options = loadGame.getOptions();
    expect(options.options.length).toBe(4);
  })

  it('should choose an option', async () => {
    let newConfig: config = new config(4);
    let newGame: game = new game(newConfig, 'start');
    newGame.setupRandomMeeples();
    newGame.setupKingdoms();
    newGame.start();
    let gameId = await store(newGame);

    let loadGame: game = await load(gameId);
    var options = loadGame.getOptions();
    loadGame.chooseOption(options.options[0].number);

    let gameId2 = await store(loadGame);
    let loadGame2: game = await load(gameId2);
    var options2 = loadGame2.getOptions();
    expect(options2.options.length).toBe(3);
  })
});