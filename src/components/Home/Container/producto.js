const productoApi = [{
    "id": 1,
    "categoria":"monitores",
    "imagen": "../images/monitores/monitorLg.jpg",
    "nombre": "MONITOR LED 19 LG 60HZ",
    "precio": 25000,
    "cantidad": 3
},
{
    "id": 2,
    "categoria":"discosduros",
    "imagen": "../images/discorigido/wd1tb.jpg",
    "nombre": "DISCO DURO 1TB BLUE WD",
    "precio": 8000,
    "cantidad": 9
},
{
    "id": 3,
    "categoria":"monitores",
    "imagen": "../images/monitores/monitordaewoo.jpg",
    "nombre": "MONITOR LED 22 DAEWOO",
    "precio": 30000,
    "cantidad": 5
},
{
    "id": 4,
    "categoria":"auriculares",
    "imagen": "../images/auriculares/hyperxCloud2.jpg",
    "nombre": "AURICULAR HYPERX CLOUD 2",
    "precio": 15000,
    "cantidad": 7
},
{
    "id": 5,
    "categoria":"teclados",
    "imagen": "../images/teclados/tecladoKumara.jpg",
    "nombre": "TECLADO REDRAGON KUMARA K552",
    "precio": 12000,
    "cantidad": 8
}]

export const getProductoById = (id) =>{
    return productoApi[id-1];
}

export default productoApi;