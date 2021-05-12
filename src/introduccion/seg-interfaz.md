# Segregación de la Interfaz

## Concepto

El principio de Segregación de Interfaces pone enfasis en crear interfaces mas pequeñas y especializadas.
Es mejor tener muchas clases pequeñas y especializadas que una clase enorme de la cual podriamos estar utilizando solo pequeñas partes.

## Ejemplo

Imaginemonos la siguiente situación.

```js
interface Bird {
	fly(): void;
	walk(): void;
}
```

Tenemos la interfaz de un pajaro en la cual estamos asumiendo que todos los pajarons pueden volar y caminar pero puede darse el caso de que uno de los pajaros no pueda caminar o volar.

```js
class Bird1 implements Bird {
	fly() {
		throw new Error('Este pájaro no vuela.');
	}
	walk() {
		// ...
	}
}
```

El principio nos dice que ninguna clase debe ser forzada a depender de métodos que no deberia usar. Al agregar un numero grande de métodos a nuestras interfaces, corremos el riesgo de violar esta regla.

Entonces podemos optar por hacer lo siguiente

```js
interface CanWalk {
	walk(): void;
}

interface CanFly {
	fly(): void;
}

class Bird1 implements CanWalk {
	walk() {
		// ...
	}
}

class Bird2 implements CanWalk, CanFly {
	fly() {
		// ...
	}
	walk() {
		// ...
	}
}
```
