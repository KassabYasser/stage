import * as Crypto from 'expo-crypto';

export async function encryptPassword(password) {
    return new Promise((resolve, reject)=>{
        const digest = Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.MD5,
            password
        );
        resolve(digest)
    })
}