import { getDocs,getDoc, doc, query, collection, where } from "firebase/firestore"
import { db } from "."

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef =categoryId
        ? query(collection( db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')
        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data= doc.data()
                return { id: doc.id, ...data}
            })
            resolve(productsAdapted)
        })
    })
}


export const getProductsById = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef= doc(db, 'products', productId)

        getDoc(docRef).then(doc => {

            const data= doc.data()

            const productsAdapted = {id: doc.id, ...data}

            resolve(productsAdapted)
        })
    })
}

// export const createOrder= async(buyer) => {
//      const objectOrder = {
//             buyer,
//         items:cart,
//         total: totalCart
//     }
//     console.log(objectOrder)

//     const collectionReference = collection(db, 'orders')

//     addDoc(collectionReference, objectOrder)
// }