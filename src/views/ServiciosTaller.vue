<template>
  <h1><center>Nuestros Servicios</center></h1>
  <div class="containeer-cad">
    <div class="cad">
        <img src="../assets/mecanica.jpg">  
    <div class="conteniido-cad">
    <h3>SERVICIO DE MECÁNICA EXPRESS</h3>
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
<footer>
    <h2 class="titulo-seccion"><center>Contacto</center></h2>
        <h3>Ponte en contacto ahora mismo!</h3>
            <div class="contenedor">
                <div class="footer-content">
                    <div class="col">
                        <h2><i class="fa-solid fa-phone"></i></h2>
                        <span class="info-contacto">481-352-1562</span>
                    </div>
                </div>
                <div class="footer-content">
                    <div class="col">
                        <h2><i class="fa-solid fa-envelope"></i></h2>
                        <span class="info-contacto">tallermecanico@gmail.com</span>
                    </div>
                </div>
                <div class="footer-content">
                    <div class="col">
                        <h3>Redes Sociales</h3>
                            <ul class="social-icons">
                                <li><a href="https://web.facebook.com/"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://web.telegram.org/"><i class="fab fa-telegram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                            <ul class="login">
                                <li><a href="/login">🐧</a></li>
                            </ul>
                        </div>
                </div>
            </footer>
</template>
<style>
footer {
        background:#95D8E0;
        padding-top: 15px;
    }
    .contenedor {
        width: 1140px;
        height: 120px;
        margin: auto;
        display: flex;
        justify-content: center;
    }
    .footer-content {
        width: 25%;
    }
    h3 {
        font-size: 15px;
        margin-bottom: 15px;
        text-align: center;
        font-family: 'Poppins', serif;
    }
    .footer-content p {
        width:190px;
        margin: auto;
        padding: 7px;
        font-family: 'Poppins', serif;
    }
    a {
        text-decoration: none;
        font-family: 'Poppins', serif;
    }
    a:hover {
        color: #FFFFFF;
        font-family: 'Poppins', serif;
    }
    .bottom-bar {
        background: #f18930;
        text-align: center;
        padding: 10px 0;
        margin-top: 50px;
    }
    .bottom-bar p {
        color: #343434;
        margin: 0;
        font-size: 16px;
        padding: 7px;
        font-family: 'Poppins', serif;
    }
h1 {
  font-family: "Microsoft Sans Serif";
  font-size: 20px;
}
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
  box-shadow: 0px 1px 10px rgba(17, 48, 68, 0.8);
  transition: all 400ms ease-out;
  cursor: default;
}
.cad:hover{
  box-shadow: 5px 5px 20px rgb(11, 189, 233);
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