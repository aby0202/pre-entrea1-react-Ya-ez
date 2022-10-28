const products = [
    { 
        id: '1', 
        name: 'Almohadon de cama', 
        price: 1300, 
        category: 'almohadones', 
        img:'https://drive.google.com/uc?export=view&id=12NWMaY59WrKZV_PrLDfk-hOhrApzCxZ1', 
        // borro la url y agrego uc?export=view&id=
        stock: 10, 
        description:'Almohadon de tusor bicolor de 50x40 cm'
    },
    { id: '2', name: 'Delantal', price: 1500, category: 'Cocina', img:'https://drive.google.com/uc?export=view&id=1Q4V7kxFzTIZDHtaJMovKn-uyo-eXW4qs', stock: 10, description:'Delantal de 70x40 cm'},
    { id: '3', name: 'Cortina de gasa', price: 1200, category: 'Cortinas', img:'https://drive.google.com/uc?export=view&id=1jiNkifvTigkRHYz2UdB03T1RMJ2mNnxu', stock: 10, description:'Cortina de gasa color blanca de 150x200 cm '},
    { id: '4', name: 'Juego de sabanas para cama de 1 plaza y media', price: 10000, category: 'Sabanas', img:'https://drive.google.com/uc?export=view&id=1T4qZVGpo4fOZPqHB6jGDTgaaSAvhiw2B', stock: 10, description:'Sabana de 90x190 cm'},
    { id: '5', name: 'Almohadon de gasa', price: 800, category: 'Almohadones', img:'https://drive.google.com/uc?export=view&id=1_4A9mWfl5NDJuDa86xc4kfGD2ExThUIK', stock: 10, description:'Almohadon de gasa de  50x30 cm'},
    { id: '6', name: 'Manteles de gasa', price: 5000, category:'Cocina', img:'https://drive.google.com/uc?export=view&id=1oiX3Rvf1zeLv0V3Wz50pe3YK_NDdGaJ0', stock: 10, description:'Manteles de gasa de 200x150 cm '},
    { id: '7', name: 'Cortina de baño', price: 1200, category: 'Cortinas', img:'https://drive.google.com/uc?export=view&id=1ExT7gg1MVxBOxx-NJO8rfZZnG4nd1383', stock: 10, description:'Cortina de baño bicolor de 150x180 cm '}
]


export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter (prod => prod.category === categoryId) : products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1500)
    })
}