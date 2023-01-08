// Inicializar la base datos con los datos mínimos para funcionar

const readline = require('readline');

// cargamos los modelos
const Anuncio = require('./models/Anuncio');

async function main() {

    // preguntar al usuario si está seguro
    const continuar = await preguntaSiNo('Estas seguro, seguro, seguro, que quieres borrar la base de datos? [n]')
    if (!continuar) {
        process.exit();
    }

    // conectar a la base de datos
    const connection = require('./lib/connectMongoose')

    // inicializar la colección de Anuncios
    await initAnuncios();

    // desconectamos de la base de datos
    connection.close();
}

main().catch(err => console.log('Hubo un error', err));

async function initAnuncios() {
    // borrar todos los documentos de la colección de Anuncios
    const result = await Anuncio.deleteMany();
    console.log(`Eliminados ${result.deletedCount} Anuncios.`);

    // crear Anuncios iniciales
    const inserted = await Anuncio.insertMany([
        {
            nombre: 'Gran Turismo 7',
            vetna: true,
            precio: 50,
            foto: 'gt7.jpg',
            etiquetas: ['lifestyle', 'motor']
        },
        {
            nombre: 'Horizon Forbidden West',
            venta: false,
            precio: 60,
            foto: 'hfw.jpg',
            etiquetas: ['work', 'mobile']
        }
    ]);
    console.log(`Creados ${inserted.length} Anuncios.`)
}

function preguntaSiNo(texto) {
    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(texto, respuesta => {
            interface.close();
            if (respuesta.toLowerCase() === 'si') {
                resolve(true);
                return;
            }
            resolve(false);
        })
    })
}