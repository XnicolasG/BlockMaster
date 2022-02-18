
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { Types } from '../types/types'


// ================AGREGAR========================
export const AsyncListActions = (img, nom, desc, rank) => {
    return (dispatch) => {
        const newMovie = {
            img,
            nom,
            desc,
            rank
        }
        addDoc(collection(db,'peliculas'), newMovie)
        .then(resp =>{
            dispatch(SyncListActions(newMovie));
        })
        .catch(error =>{
            console.log(error);
        })
    }
}

const SyncListActions = (Npelicula) => {
    return {
        type: Types.agregar,
        payload: Npelicula
    }
}

export default SyncListActions

// =================== LISTAR ====================
export const AsyncList = () => {
   return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, 'peliculas'));
        const pelicula = [];
        querySnapshot.forEach((doc) =>{
            pelicula.push({
                ...doc.data()
            })
        });
        dispatch(SyncLinst(pelicula))
    }
}

export const SyncLinst = (peliculas) =>{
    return{
        type:Types.listar,
        payload: peliculas
    }
}
// ================= ELIMINAR ==================
export const AsyncDelete = (nom) =>{
    return async (dispatch) =>{
        console.log(nom);
    const movieCollection = collection(db, 'peliculas');
    const qu = query(movieCollection, where('nom', '==', nom));

    const querySnapshots = await getDocs(qu);
    querySnapshots.forEach((coll)=>{
        deleteDoc(doc(db, 'peliculas', coll.id))
    .then(res=>{
        dispatch(SyncDelete(nom))
    })
    })
}
}

export const SyncDelete = (nom) =>{
    return{
        type:Types.eliminar,
        payload: nom
    }
}