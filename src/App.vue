<template>
    <div id="app">
  <nav class="navbar">
     <div class="navdiv">
      <pre>
    
      </pre>
      <div>
      
      </div>
       
   <ul>
        <li><a><router-link to="/">Inicio</router-link></a></li>
        <li><a><router-link to="/inv">Inventario</router-link></a> </li>
        <li><a><router-link to="/serv">Servicios</router-link></a> </li>
        <li><a><router-link to="/citas">Citas</router-link></a></li>
        <li><a><router-link to="/pago">Pagos</router-link></a></li>
        <li><a><router-link to="/repo">Reportes</router-link></a></li>                        
     </ul>
       </div>
    </nav>
</div>
<router-view/>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Great+Vibes&display=swap');

  .kit{
  width: 90px;
  height: 80px;
  top:4%;
  right:300%;
}
  :root {
    --color-primary: rgb(164, 108, 245);
    --color-white: #000000;
    --color-black: #fffcfc;
  }
 
      /* menuo*/
      .navbar{
        background-color: var(--color-black);
        font-family: 'Poppins', serif;
        padding-right: 15px;
        padding-left: 15px;
        padding: 0 4%;
      }
      /* menu*/
      .navdiv{
        display: flex; 
        align-items: center; 
        justify-content: space-between;
        
      }
   
      /* apartado los menus*/
      ul li {
      display: inline-block;
      position: relative;
      }
      /* apartado los menus*/
      ul li a {
      display: block;
      padding: 10px 17px;
      color: #000000;
      text-decoration: none;
      text-align: center;
      font-size: 17px;
      font-family: 'Poppins', monospace;

  }  
    /* cambio de color cuando pasa el mause*/
    ul li a:hover {
      background: rgb(138, 177, 245);
      border-radius: 10px;
    }
</style>
