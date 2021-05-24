/*import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import {Asset} from 'expo-asset';

async function openDatabase(){
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require('../assets/db/database.db')).uri,
    FileSystem.documentDirectory + 'SQLite/database.db'
  );
  return SQLite.openDatabase('database.db');
}


export const DatabaseConnection = {

  getConnection: () => {
    console.log('database connected');
    return openDatabase();
  },

   getAuth:  async (email, password) => {
    console.log('start getAuth')
    try{
      const db= await openDatabase();
      console.log('db: ', db);
      db.transaction(tx => {
      tx.executeSql("SELECT count(*) as 'isUser' FROM login WHERE email= ? AND pass=?", [email.value, password.value],
        (tx, results) => {
          console.log('Login Results: ', results);
          if (results.isUser > 0) return 1;
          else return 0;
        },
        (_, error) => console.log(error)
      )
    })
    }catch(err){
      console.log(err)
    }
  }
};*/