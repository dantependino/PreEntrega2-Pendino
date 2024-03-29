const products = [
    {
        id: "1",
        name: "iphone 12",
        price: 1000,
        category: "celular",
        img: "https://www.macstation.com.ar/img/productos/small/2158-11.jpg",
        stock: 25,
        description: "Descripcion de Iphone 12",
    },
    {
        id: "2",
        name: "samsung s21",
        price: 800,
        category: "celular",
        img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
        stock: 16,
        description: "Descripcion de Samsung s21",
    },
    {
        id: "3",
        name: "Ipad 8va generacion",
        price: 1200,
        category: "tablet",
        img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
        stock: 10,
        description: "Descripcion de Ipad",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500);
    });
};
export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod =>prod.id === productId))

        }, 2500)
    })
};
export const getProductByCategory = (categoryName) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prod =>prod.category === categoryName))

        }, 2500)
    })
}