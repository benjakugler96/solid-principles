# Abierto Cerrado

## Concepto

La definición formal dice que una entidad debe quedarse abierta para su extensión pero cerrada para su modificación. Lo que intentamos conseguir con este principio es que la funcionalidad básica de nuestro sistema este protegida.

Para añadir nuevas funcionalidades deberiamos escribir nuevo código en vez de modificar el existente que seguramente ya funciona. Para esto es importante intentar escribir código que no se tenga que cambiar cada vez que tenemos que modificar los requerimientos. Para conseguirlo podemos usar **Herencia** y **Polimorfismo**

## Ejemplo

Imaginemos que tenemos una clase que define Rectángulos.

```js
class Rectangle {
	height: number;
	width: number;
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	// ...
}
```

Luego tenemos una clase que se encarga de calcular el área total. Si solo tuviesemos rectángulos no habria problema, pero si agregaramos otras figuras como Triángulos o Circulos, habria que cambiar el código de la clase que se encargue de calcular las areas dependiendo de cuál sea la figura.

Para lidiar con esto podemos aplicar Polimorfismo, creando una clase base _Shape_ que tenga la funcion de calcular area y luego las clases de Rectangulos, Triangulos y Circulos extienden la funcionalidad de _Shape_ y sobre-escriben el método para calcular el area como sea necesario.

```js
interface IShape {
	calcArea(): number;
}

class Rectangle implements IShape {
	height: number;
	width: number;
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}

class Triangle implements IShape {
	height: number;
	width: number;
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return (this.height * this.width) / 2;
	}
}
```
