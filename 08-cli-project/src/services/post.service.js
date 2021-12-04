//Esto te permite crear un objeto con los parametros correctos como si fuera una clase para despues verificar que se cumplan sus valores
//Despues en la comparacion simplemente comparas el objeto creado con un "instance of post.service" para verificar que todo esté bien

export function Post(id, title, description) {
	this.id = id;
	this.title = title;
	this.description = description;
}
