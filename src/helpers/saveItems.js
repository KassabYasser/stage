import * as SecureStore from 'expo-secure-store';

/**
* save a key-value pair to secure the id
*/
export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

/**
* get the value based on its key in order to re-use it after
*/
export  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } 
    else {
        return;
    }
}