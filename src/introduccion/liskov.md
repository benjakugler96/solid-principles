# Sustitución de Liskov

## Concepto

Este principio fue introducido por [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov)
Toda clase que es hija de otra clase, debe poder utilizarse como si fuese el mismo padre. Nadie deberia comportarse de manera distinta si interactua con la clase padre o hija.

## Ejemplo

```js
class Duck {
	swim() {}
	fly() {}
	cuack() {}
}

class RuberDuck extends Duck {
	fly() {
		throw new Error();
	}
}
```

En este ejemplo tenemos dos clases, una clase Duck que cuenta con 3 métodos que simulan lo que un pato real puede hacer y otra clase RubberDuck que es hija de Duck, pero sobre escribe el método fly porque un pato de goma no podria volar. Si devolvemos un error cuando llamamos a _fly_ en RubberDuck estariamos violando el Principio de Sustitución ya que el sistema se comportará diferente si estamos ante un pato de goma o uno real.

La solución seria rediseñar el sistema con componentes individuales (interfaces), por lo que RubberDuck heredaria las interfaces de nadar y hacer cuak, pero no la de volar.

```js
```
