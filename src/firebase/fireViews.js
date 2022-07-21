import { db } from './firebase';
import { doc, setDoc, addDoc, updateDoc, collection, where, getDoc, query, onSnapshot } from 'firebase/firestore';
import { putVista } from '../routes/dashboardView';
import { useState } from 'react';



export async function userExists(idUser) {
    try {
        const docRef = doc(db, "VisitsCounter", idUser);
        var verify = false;
        await getDoc(docRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    verify = true
                }
            })
    } catch (error) {
        console.error(error);
    }
    return verify;
}

export async function getVistas(idUser) {
    const docRef = doc(db, 'VisitsCounter', idUser)
    let listaVistas = [];
    await getDoc(docRef)
        .then((doc) => {
            listaVistas = doc.data();
        })
        .catch(err => {
            console.log(err);
        });
    return listaVistas;
}

const docRef = doc(db, 'VisitsCounter', 'a4a9b539-bc8a-45e2-89a9-449cd1358000')

/*export async function getVista(idUser) {
    const docRef = doc(db, "VisitsCounter", idUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    return (docSnap.data())
}*/