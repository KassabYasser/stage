import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as Crypto from 'expo-crypto';
import { getValueFor } from './saveItems';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function openDatabase() {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
        Asset.fromModule(require('../../assets/db/stage.db')).uri,
        FileSystem.documentDirectory + 'SQLite/stage.db'
    );
    return SQLite.openDatabase('stage.db');
}


export const DatabaseConnection = {
    
    getConnection: async () => {
        return new Promise((resolve, reject)=>{
            const db= openDatabase();
            console.log('database connected');
            resolve(db);
        });
    },
    
    insertFicheDescription: async ()=>{
        const db = await openDatabase();
        const FicheDescriptionData= JSON.parse(await AsyncStorage.getItem('FicheDescriptionData'));
        //const FicheLocalisationData = JSON.parse(await AsyncStorage.getItem('FicheLocalisationData'));
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql("INSERT INTO fichedescription VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,'2021-06-23','maamora')", 
                        [
                            FicheDescriptionData.essence
                            ,FicheDescriptionData.stade_dev
                            ,FicheDescriptionData.couvret
                            ,FicheDescriptionData.fructification
                            ,FicheDescriptionData.nature_reg
                            ,FicheDescriptionData.nb_semis
                            ,FicheDescriptionData.etat_sanitaire
                            ,FicheDescriptionData.bois_gisant
                            ,FicheDescriptionData.ecimage
                            ,FicheDescriptionData.hauteur_moyenne
                            ,FicheDescriptionData.c_moyenne
                            ,FicheDescriptionData.surface
                            ,FicheDescriptionData.nb_brins
                            ,FicheDescriptionData.nb_souches
                        ],
                        (_, {rows})=>{
                            resolve(rows)
                        },
                        (_, error)=>{
                            reject(error)
                        }
                    )
                })
            }catch(err){
                console.error("error fiche description: ", err);
            }
            
        })
    },

    insertFicheDendrometrique: async()=>{
        const db= await openDatabase();
        const FicheDendrometriqueData= JSON.parse(await AsyncStorage.getItem('FicheDendrometriqueData'));
        const FicheLocalisationData = JSON.parse(await AsyncStorage.getItem('FicheLocalisationData'));
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('INSERT INTO fichedendrometrique (ESSENCE,DEMASCLE,CODE,CLASSE, DATE_OBSERV, FORET_NOM) VALUES (?,?,?,?,?,?)', 
                        [
                            FicheDendrometriqueData.essence, 
                            FicheDendrometriqueData.demasclee, 
                            FicheDendrometriqueData.code, 
                            FicheDendrometriqueData.classe
                            ,FicheLocalisationData.date_observ
                            ,FicheLocalisationData.foret
                        ],
                        (_, {rows})=>{
                            resolve(rows)
                        },
                        (_, error)=>{
                            reject(error)
                        }
                    )
                })
            }catch(err){
                console.error("error fiche dendrometrique: ", err)
            }
        })
    },

    insertFicheEchantillont: async ()=>{
        const db= await openDatabase();
        const FicheEchantillontData= JSON.parse(await AsyncStorage.getItem('FicheEchantillontData'));
        const jsonValue = await AsyncStorage.getItem('FicheLocalisationData')
        const FicheLocalisationData = JSON.parse(jsonValue);
        console.log('fiche loc: ',FicheLocalisationData)
        return new Promise((resolve, reject)=>{
            db.transaction(tx=>{
                tx.executeSql('INSERT INTO ficheechantillont (ESSENCE,AECH_ETAGE,AECH_C1,AECH_C2,AECH_EP1,AECH_EP2,AECH_LCERNES,AECH_HT,AECH_HF,AECH_HDEM,DATE_OBSERV,FORET_NOM) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', 
                    [
                        FicheEchantillontData.essence
                        ,FicheEchantillontData.etage
                        ,FicheEchantillontData.c1
                        ,FicheEchantillontData.c2
                        ,FicheEchantillontData.epaisseur1
                        ,FicheEchantillontData.epaisseur2
                        ,FicheEchantillontData.longeur_cernes
                        ,FicheEchantillontData.hauteur_totale
                        ,FicheEchantillontData.hauteur_fut
                        ,FicheEchantillontData.hauteur_demasclage
                        ,FicheLocalisationData.date_observ
                        ,FicheLocalisationData.foret
                    ],
                        (_, {rows})=>{
                            resolve(rows)
                        },
                        (_, error)=>{
                            reject(error)
                        }
                    )
            })
        })
    },

    insertFicheDominant: async ()=>{
        const db= await openDatabase();
        const FicheDominantData= JSON.parse(await AsyncStorage.getItem('FicheDominantData'));
        const FicheLocalisationData = JSON.parse(await AsyncStorage.getItem('FicheLocalisationData'));
        return new Promise((resolve, reject)=>{
            db.transaction(tx=>{
                tx.executeSql('INSERT INTO fihcedominant (ESSENCE,ADOM_C,ADOM_AGE,ADOM_H, DATE_OBSERV, FORET_NOM) VALUES (?,?,?,?,?,?)', 
                        [
                            FicheDominantData.essence
                            ,FicheDominantData.c1
                            ,FicheDominantData.age
                            ,FicheDominantData.hauteur_totale
                            ,FicheLocalisationData.date_observ
                            ,FicheLocalisationData.foret
                        ],
                        (_, {rows})=>{
                            resolve(rows)
                        },
                        (_, error)=>{
                            reject(error)
                        }
                )
            })
        })
    },

    insertFicheLocalisation: async()=>{
        const db= await openDatabase();
        const FicheLocalisationData = JSON.parse(await AsyncStorage.getItem('FicheLocalisationData'));
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('INSERT INTO  fichelocalisation (DATE_OBSERV, OBSERV_NOM,FORET_NOM,TRIAGE,STRATE,ALTITUDE,ORIENTATION,NBESSENCE,PARCELLE_NO,CANTON,PLACETTE_NO,PENTE,PROFONDEUR,ROCHE_MERE,AGE_MOY,longitude,latitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                        [FicheLocalisationData.date_observ, 
                            FicheLocalisationData.observateur, 
                            FicheLocalisationData.foret, 
                            FicheLocalisationData.triage, 
                            FicheLocalisationData.strate, 
                            FicheLocalisationData.altitude, 
                            FicheLocalisationData.orientation, 
                            FicheLocalisationData.nb_essences, 
                            FicheLocalisationData.n_paracelle, 
                            FicheLocalisationData.canton, 
                            FicheLocalisationData.n_placette,
                            FicheLocalisationData.pente,
                            FicheLocalisationData.profondeur,
                            FicheLocalisationData.roche_mere,
                            FicheLocalisationData.age_moyen,
                            FicheLocalisationData.longitude,
                            FicheLocalisationData.latitude],
                            (_, { rows })=>{
                                resolve(rows)
                            },
                            (_, error)=>{
                                reject(error)
                            }
                        )

                })
            }catch(err){
                console.error("error insert data: ", err)
            }
        })
    },

    deleteFicheLocalisation: async(date_observ,foret)=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('DELETE FROM fichelocalisation WHERE DATE_OBSERV=? AND FORET_NOM= ? ',
                        [date_observ, foret, observateur],
                        (_, {rows})=>{
                            resolve(rows)
                        },
                        (_, error)=>{
                            reject(error)
                        }
                    )
                })
            }catch(err){
                console.error("delete fiche localisation: ",err)
            }
        })
    },

    deleteFicheDendrometrique: async(date_observ, foret)=>{
        const db = await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('DELETE FROM fichedendrometrique WHERE FORET_NOM= ? AND DATE_OBSERV=?',
                        [foret, date_observ],
                        (_, {rows})=>{
                            resolve(rows);
                        },
                        (_, error)=>{
                            reject(error);
                        }
                    )
                })
            }catch(err){
                console.error("delete fiche dendrometrique: ", err)
            }
        })
    },

    deleteFicheDominant: async(date_obser, foret)=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('DELETE FROM fihcedominant where DATE_OBSERV=? AND FORET_NOM = ?',
                        [date_observ, foret],
                        (_, {rows})=>{
                            resolve(rows);
                        },
                        (_, error)=>{
                            reject(error);
                        }
                    )
                })
            }catch(err){
                console.error("delete fiche dominant: ", err);
            }
        })
    },

    deleteFicheEchantillont: async(date_observ, foret)=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('DELETE FROM ficheechantillont WHERE DATE_OBSERV=? AND FORET_NOM = ?',
                        [date_observ, foret],
                        (_, {rows})=>{
                            resolve(rows);
                        },
                        (_, error)=>{
                            reject(error);
                        }
                    )
                })
            }catch(err){
                console.error("delete fiche echantillont: ", err);
            }
        })
    },

    selectFicheLocalisation: async ()=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('SELECT * FROM fichelocalisation;', [],
                    //tx.executeSql('DELETE FROM fichedendrometrique ', [],  
                        (_, { rows })=>{
                            resolve(rows);
                        },
                        (_, error)=>{
                            reject(error);
                        }
                    )
                })
            }catch(err){
                console.error('sync SQLITE error: ', err);
            }
        })
    },

    selectFicheDesc: async ()=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('SELECT * FROM fichedescription', [],
                        (_, { rows })=>{
                            resolve(rows);
                        },
                        (_, error)=>{
                            reject(error);
                        }
                    )
                })
            }catch(err){
                console.error('syncDESC SQLITE error: ', err)
            }
        })
    },
    selectFicheDendro: async ()=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('SELECT * FROM fichedendrometrique', [],
                        (_, { rows })=>{
                            resolve(rows)
                        },
                        (_, error)=>{
                            reject(error)
                        }
                    )
                })
            }catch(err){
                console.error('syncDendro SQLITE error: ', err);
            }
        })
    },

    selectFicheDominant: async()=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql('SELECT * FROM fihcedominant ', [],
                        (_, { rows })=>{
                            resolve(rows);
                        },
                        (_, error)=>{
                            reject(error);
                        }
                    )
                })
            }catch(err){
                console.error('syncDom SQLITE error: ', err)
            }
        })
    },

    selectFicheEchantillont: async ()=>{
        const db = await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction('SELECT * FROM ficheechantillont', [],
                    (_, { rows })=>{
                        resolve(rows);
                    },
                    (_, error)=>{
                        reject(error)
                    }
                )
            }catch(err){
                console.error('syncEch SQLITE error: ', err)
            }
        })
    },

    searchData: async (date)=>{
        const db= await openDatabase();
        return new Promise((resolve, reject)=>{
            try{
                db.transaction(tx=>{
                    tx.executeSql(`SELECT * FROM ficheechantillont`, [],
                        (_, { rows })=>{
                            resolve(rows)
                        },
                        (_, error)=>{
                            reject(error)
                        }
                    )
                })
            }catch(err){
                console.error('search data: ', err)
            }
        })
    }
};

/*
    SELECT * FROM fichelocalisation AS fl 
        INNER JOIN fichedescription AS fdesc ON fdesc.DATE_OBSERV= fl.DATE_OBSERV 
        INNER JOIN fihcedominant AS fd on fd.DATE_OBSERV= fl.DATE_OBSERV 
        WHERE fl.DATE_OBSERV='2021-06-21'

    SELECT * FROM fichelocalisation AS fl 
                        INNER JOIN fichedescription AS fdesc ON fdesc.DATE_OBSERV= fl.DATE_OBSERV 
                        INNER JOIN fihcedominant AS fd on fd.DATE_OBSERV= fl.DATE_OBSERV 
                        WHERE fl.DATE_OBSERV='${date}'
*/