# Inversión de la Dependencia

## Concepto

Los módulos de alto nivel no deberian depender de los módulos de bajo nivel, ambos deberian depender de interfaces. Es decir, este principio se basa en la abstracción. Las implementaciones concretas no deberian depender de otras implementaciones concretas sino de capas abstractas.

Esto nos permite reducir el desacople entre sistemas de software. Nos permite por ejemplo no depender de que nuestra base de datos utilice una tecnología u otra porque nuestro código no dependeria de qué base de datos utilizamos sino de una abstracción que construimos.

## Ejemplo

La comunicación entre los componentes de un sistema es siempre mediante interfaces y esto nos permite tener libertad a la hora de decidir las implementaciones concretas de cada elemento.

```ts
class Repository {
  getData() {
    const data = MongoDB.find({});
    return data;
  }
}

class Controller {
  // Aca no conocemos cual es la base de datos
  this.data = Repository.getData();
}
```

```js
class Repository {
  function getData() {
    const data = SQLite.query('SELECT * FROM data');
    return data;
  }
}

class Controller {
  // Aca no conocemos cual es la base de datos
  this.data = Repository.getData();
}
```

Aca como vemos, podriamos cambiar la base de datos de MongoDB a otra sin afectar a ninguna parte del sistema.
