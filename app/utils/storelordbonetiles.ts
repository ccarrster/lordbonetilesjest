import { game, config } from './lordbonetiles';
import {MongoClient, Db, ObjectId} from 'mongodb';

//So looks like I need mongoose

var gameStore: string[] = [];

interface Game {
    json: string;
  }

export async function store(game: game){
    let connection: MongoClient;
    let db: Db;
    connection = await MongoClient.connect('mongodb://localhost:27017/lordbonetiles');
    db = await connection.db('games');
    const users = db.collection<Game>('users');
    const mockGame = {json: JSON.stringify(game)};
    let inserted = await users.insertOne(mockGame);
    await connection.close();
    return inserted.insertedId.toString();
}

export async function load(gameId: string){
    let connection: MongoClient;
    let db: Db;
    connection = await MongoClient.connect('mongodb://localhost:27017/lordbonetiles');
    db = await connection.db('games');
    const users = db.collection<Game>('users');
    let gameJson = await users.findOne({_id: new ObjectId(gameId)});
    await connection.close();
    if(gameJson != null){
        return Object.assign(new game(new config(2), 'start'), JSON.parse(gameJson.json));
    }
}