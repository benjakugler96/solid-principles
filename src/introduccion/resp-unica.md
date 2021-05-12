# Responsabilidad Única

## Concepto

Como el nombre indica, cada clase deberia tener una y solo una responsabilidad. Se encargaria de una sola parte del sistema. Al solo encargarse de una minima parte, podemos asegurarnos que lo haga de manera correcta.

## Ejemplo

En el siguiente código tenemos un ejemplo de registro de un usuario en una plataforma web.

```js
class UserRegistry {
	createUser(email, password) {
		const salt = bcrypt.genSaltSync(10);
		const encriptedPassword = bcrypt.hashSync(password, salt);
		const newUser = new User(email, encriptedPassword);
		UserService.save(newUser);
	}
}
```

Vemos que la clase se encarga tanto de _generar el nuevo usuario_ como de _encriptar su contraseña_. De hacerlo de esta manera, le estamos dando a la clase dos responsabilidades distintas. Por lo que deberiamos modificar esta clase tanto si queremos añadir atributos al usuario como si queremos cambiar el algoritmo de encriptación, rompiendo asi el **Principio de Responsabilidad Única**.

### ¿Cuál seria la forma correcta?

Según **SRP**, deberiamos mober el código encargado de encriptar la contraseña a su propia clase para que de esta forma el comportamiento de encriptado quede encapsulado.

```js
class UserRegistry {
	createUser(email, password) {
		const ecriptedPassword = PasswordEncrypter.encrypt(password);
		const newUser = new User(email, encriptedPassword);
		UserService.save(newUser);
	}
}

class PasswordEncrypter {
	encrypt(email, password) {
		const salt = bcrypt.genSaltSync(10);
		return (encryptedPassword = bcrypt.hashSync(password, salt));
	}
}
```

De esta forma cada clase tiene su propia responsabilidad. La clase que crea el nuevo usuario delega a la clase de encriptado la responsabilidad que esta no puede asumir.
