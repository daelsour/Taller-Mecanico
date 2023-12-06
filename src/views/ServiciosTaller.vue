<template>
  <h1><center>TALLER MECANICO</center></h1>
  <h1><center>Nuestros Servicios</center></h1>
  <div class="containeer-cad">
    <div class="cad">
        <img src="../assets/mecanica.jpg">  
    <div class="conteniido-cad">
    <h3>SERVICIO DE MECÁNICA EXPRESSr</h3>
  <p>
Frenos, Suspensiones, Cambio de aceite y Filtro, Servicio Menor y Servicio Mayor, Luces, Marchas, Alternadores, Acumuladores, Llantas, Alineación y Balanceo, Lubricación y Ajuste de Niveles, Estética Automotriz.</p>
    </div>
</div>
        <div class="cad">
            <img src="../assets/Auxilios.jpg">    
        <div class="conteniido-cad">
    <h3>AUXILIOS EN RUTA</h3>
    <p>Contamos con una cuadrilla de atención urgente en vía pública y carretera.</p>
        </div>
     </div>

     <div class="cad">
        <img src="../assets/mecanica1.jpg">  
        <div class="conteniido-cad">
    <h3>SERVICIOS ESPECIALIZADOS DE REPARACIÓN</h3>
    <p>Fallas complicadas, Transmisiones, Motores, Direcciones, Bombas, Sistemas Hidráulicos y Frenos de Aire, Ejes, Diferenciales, Transfer, Turbos, Inyectores, Hojalatería / Pintura y Estética, Alarmas, Chapas, Chips, Inmovilizadores, Reprogramaciones, Elevadores, Vidrios, Polarizados de seguridad, Tapicería, Climas A/C , Torretas, Accesorios y Aditamentos Especiales.</p>
        </div>
     </div>
     <div class="cad">
      <img src="../assets/mecanica2.jpg">  
        <div class="conteniido-cad">
    <h3>SERVICIO PARA AUTOS PREMIUM Y POPULARES</h3>
    <p>Deja tu auto en buenas manos, somos especialistas en autos de marcas premium como: BMW, Audi, Mercedez, Lincoln, entre otras. </p>
        </div>
     </div>

   
    

</div>
</template>
<style>
/*Cards*/
.containeer-cad{
position: 100;
  width: 100%;
  display: flex;
  font-family: 'Poppins', monospace;
  max-width: 1515px;
  margin: auto;
top:120%;
right:8%;
}

.cad{
  width: 100%;
  margin: 10px;
  border-radius: 6px;
  overflow: hidden;
  background:#ffffff;
  box-shadow: 0px 1px 10px rgba(255, 0, 0, 0.2);
  transition: all 400ms ease-out;
  cursor: default;
}
.cad:hover{
  box-shadow: 5px 5px 20px rgba(194, 43, 43, 0.295);
  transform: translateY(-3%);
}
.cad img{
  width: 100%;
  height: 200px;
}
.cad .conteniido-cad{
  padding: 15px;
  text-align: center;
}
.cad .conteniido-cad h3{
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.979);
}
.cad .conteniido-cad p{
  line-height: 1.8;
  color: #000000;
  font-size: 14px;
  margin-bottom: 5px;
}
@media only screen and (min-width:320px) and (max-width:768px){
  .containeer-cad{
      flex-wrap: wrap;
  }
  .cad{
      margin: 15px;
  }
}
</style>