const numero = document.querySelector("#input")
const boton =  document.querySelector("#boton")
const conteo = document.querySelector("#conteo")
boton.addEventListener("click" , e => {
  var h = numero.value
  const intervalo = setInterval(() => {
 
    h = h - 1
    conteo.innerHTML = `<p> ${h} <p>`
    
  console.log(h)
  
  
  
   
  
  if (h === 0){
    clearInterval(intervalo)
    console.log("Despegue")
 conteo.innerHTML = `
 
 
 <video id="myVideo" width="640" height="360"  autoplay> <source src="./video.mp4" type="video/mp4"> Tu navegador no soporta la etiqueta de video.`
  
  }
  
  
     
    }, 1000);

    
  
})
//setInterval(() => {
   // console.log("hola");
   // setInterval(()=> {
  //  consola.log('que lo que')
   // })
  //}, 100);

 
  //for (let i = 0; i < 100; i++) { console.log(i);

   // if(i=== 4){
 //console.log("Despegue")
   //}
  //}
 
 

  
