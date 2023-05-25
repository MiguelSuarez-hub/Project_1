/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const url = 'https://platzi-avo.vercel.app/api/avo';

/**Web API fetch
Pasos para utilizar fetch
1. Conectarnos al servidor
2. Procesar la respuesta y convertirla en JSON
3. Esta es la información que utilizaremos para renderizar en la pagina
**/
//1.
window
  .fetch(url)
  //2.
  .then((res) => res.json())
  //3.
  .then(data => {
    console.log(data);
  })