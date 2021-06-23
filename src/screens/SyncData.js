import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { DatabaseConnection } from '../helpers/database';
import NetInfo from "@react-native-community/netinfo";

export default function SyncData(){

    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    }).catch(err=> console.log(err));

    DatabaseConnection.selectFicheLocalisation().then((rows)=>{
        console.log("rows: ", rows);
        fetch('http://192.168.1.35:3000/sync-fichelocalisation', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rows: rows
            })
        }).then(()=> console.log("finished!"))
        .catch(err=> console.error('fetch error: ', err))
    })

    DatabaseConnection.selectFicheDesc().then((rows)=>{
        console.log('rows: ', rows);
        fetch('http://192.168.1.35:3000/sync-fichedesc', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rows: rows
            })
        }).then(()=> console.log("finished sync desc!"))
        .catch(err=> console.error('fetch error: ', err))
    })

    DatabaseConnection.selectFicheDendro().then((rows)=>{
        console.log('rows: ', rows);
        fetch('http://192.168.1.35:3000/sync-fichedendro', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rows: rows
            })
        }).then(()=> console.log("finished sync dendro!"))
        .catch(err=> console.error('fetch error: ', err))
    })

    DatabaseConnection.selectFicheDominant().then((rows)=>{
        console.log('rows: ', rows);
        fetch('http://192.168.1.35:3000/sync-fichedominant', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rows: rows
            })
        }).then(()=> console.log("finished sync dendro!"))
        .catch(err=> console.error('fetch error: ', err))
    })

    DatabaseConnection.selectFicheEchantillont().then((rows)=>{
        console.log('rows: ', rows);
        fetch('http://192.168.1.35:3000/sync-ficheechantillont', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rows: rows
            })
        }).then(()=> console.log("finished sync dendro!"))
        .catch(err=> console.error('fetch error: ', err))
    })
        
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text> Home Screen </Text>
        </View>
    )
}



    /*fetch('http://192.168.0.144:3000/all-users')
    .then(res => res.json())
    .then(MySQLresults=> {
        DatabaseConnection.getUserData().then((SQLiteResults)=>{
            console.log("MYSQL RESULTS: ", MySQLresults[1].email);
            console.log("SQLiteResults: ", SQLiteResults);
        }).catch(error=> console.log("SQLITE ERROR: ", error))
        DatabaseConnection.syncUsers(MySQLresults[1].email, MySQLresults[1].password, MySQLresults.[1].id_employe).then((length)=>{
            if(length >0){alert("data synced")}
            else console.log("what the fawk");
        }).catch(err => console.log("sqlite error 2: ", err))
    }).catch(err => console.log("MYSQL ERROR: ", err))
*/
