# NodeApp

Deploy:

```sh
npm install
```

Load initial data to database:

```
npm run init-db
```

Start the application in production with:

```sh
npm start
```

Start the application in development with:

```sh
npm run dev
```

## API Documentation

Agent list:

GET /api/anuncios
{
  "results": [
    {
        "nombre": "Gran Turismo 7",
        "venta": "true",
        "precio": "50",
        "foto": "gt7.jpg",
        "etiquetas": "['lifestyle']"
    },
  ]
}