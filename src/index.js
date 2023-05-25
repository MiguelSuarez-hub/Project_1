/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = 'https://platzi-avo.vercel.app';
const container = document.querySelector('#container');

/**Web API fetch
Pasos para utilizar fetch
1. Conectarnos al servidor
2. Procesar la respuesta y convertirla en JSON
3. Esta es la información que utilizaremos para renderizar en la pagina
**/
//Promises
//1.
window
  .fetch(`${baseUrl}/api/avo`)
  //2.
  .then((res) => res.json())
  //3.
  .then(data => {
    // console.log(data);
  })

//async/await
async function fetchData() {
  //1.
  const res = await fetch(`${baseUrl}/api/avo`);
  //2.
  const data = await res.json();
  //3
  //Crear vector con todos los items
  const items = [];
  //Ciclo para renderizar todos los elementos
  data.data.forEach(item => {    
    //Crear Contenedor
    const contenedor = document.createElement('div');
    contenedor.className = 'flex flex-row rounded-md shadow m-5 w-72 md:w-80 hover:bg-gray-50'
    //Crear Titulo
    const titulo = document.createElement('h2');
    titulo.textContent = item.name;
    titulo.className = 'text-2xl text-green-700'
    //Crear Imagen
    const imagen = document.createElement('img');
    imagen.src = `${baseUrl}${item.image}`;
    imagen.className = 'w-24 h-24 rounded-full'
    //Crear precio
    const precio = document.createElement('p');
    precio.textContent = `$ ${item.price}`
    //Crear contenedor de texto
    const textContainer = document.createElement('div');
    textContainer.append(titulo, precio);
    textContainer.className = 'flex flex-col gap-4 text-center items-center justify-center px-5'
    //Ingresar todos los elementos en el contenedor
    contenedor.append(textContainer, imagen);

    items.push(contenedor);
  });

  container.append(...items)
}
fetchData();