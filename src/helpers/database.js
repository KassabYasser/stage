import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as Crypto from 'expo-crypto';
import { getValueFor } from './saveItems';

async function openDatabase() {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
        Asset.fromModule(require('../../assets/db/database.db')).uri,
        FileSystem.documentDirectory + 'SQLite/database.db'
    );
    return SQLite.openDatabase('database.db');
}


export const DatabaseConnection = {
    
    getConnection: async () => {
        return new Promise((resolve, reject)=>{
            const db= openDatabase();
            console.log('database connected');
            resolve(db);
        });
    },

    //@TODO: Code for sqlite and forms

    /*getAuth: async (email, password) => {
        const db = await openDatabase();
        return new Promise((resolve, reject) => {
            console.log('start getAuth: ', email, password)
            try {
              console.log('db: ', db);
                db.transaction(tx => {
                    tx.executeSql(`SELECT count(*) as 'isUser' from login WHERE email= ? AND pass=?`, [email, password],
                        (_, {rows}) => {
                            const len = rows._array[0].isUser;
                            console.log('results: ', rows)
                            console.log('length: ', len)
                            resolve(len)
                        },
                        (_, error) => {
                            console.log('error reject: ');
                            reject(error)
                        }
                    )
                })
            } catch (err) {
                console.log(err)
            }
        })
    },

    registerUser: async (email, password, id)=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            console.log('start register user: ', email, password, id);
            console.log('db: ', db);
            try{
                console.log('begin try')
                db.transaction(tx =>{
                    tx.executeSql(`INSERT INTO login(email, pass, id_employe) VALUES ( ?, ?, ?)`, [email, password, id],
                        (_, results)=>{
                            console.log('nice');
                            console.log('results: ', results)
                            resolve(results)
                        },
                        (_, error)=> {console.log('reject error') ;reject(error)}
                    )
                })
            }catch(err){
                console.log('register catch: ',err)
            }
        })
    },

    compteInfo: async ()=>{
        const db= await openDatabase();
        const email= await getValueFor('11');
        return new Promise((resolve, reject)=>{
            console.log('begin compte info for : ', email);
            try{
                db.transaction(tx =>{
                    tx.executeSql('SELECT * FROM employe where id_employe= (SELECT id_employe FROM login WHERE email=?);', [email],
                        (_, { rows })=>{
                            console.log('compte info results: ', rows);
                            resolve(rows);
                        },
                        (_, error)=> reject(error)
                    )
                })
            }catch(error){ console.error(error); }
        })
    },*/
};