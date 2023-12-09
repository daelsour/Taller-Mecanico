<template>
    <div class="card">
        <div class="information">
            <span>Herramientas Manuales</span>
                <p>Llaves inglesas, de trinquete, de tubo, destornilladores, martillos, alicates, juegos de destornilladores, llaves de ajuste y limas</p>
        </div>
    </div>
    <div class="card-1">
        <div class="information-1">
            <span>Herramientas Eléctricas</span>
                <p>Taladros y lijadoras electricas, pistolas de calor, sierras electricas, amoladoras angulares, taladros de impacto y pulidoras</p>
        </div>
    </div>
    <div class="card-2">
        <div class="information-2">
            <span>Herramientas Neumáticas</span>
                <p>Pistolas de aire, llaves de impacto neumáticas, taladros y lijadores neumáticos, pistolas de grapas y de pintura neumáticas</p>
        </div>
    </div>
    <div class="card-3">
        <div class="information-3">
            <span>Herramientas de Medición</span>
                <p>Calibradores vernier, cintas métricas, niveles, micrómetros, goniómetros y manómetros</p>
        </div>
    </div>
    <div class="card-4">
        <div class="information-4">
            <span>Elevación y Soporte</span>
                <p>Gatos hidráulicos, gatos de tijera y de botella, rampas para automóviles y caballetes.</p>
        </div>
    </div>
    <div class="card-5">
        <div class="information-5">
            <span>Herramientas de Soldadura</span>
                <p>Soldadores de arco, soldadores MIG/TIG, gafas de soldador, guantes de soldadura, martillo y cepillo para soldadura</p>
        </div>
    </div>
    <div class="card-6">
        <div class="information-6">
            <span>Herramientas de Mano Especiales</span>
                <p>Extractores de rodamientos, llaves de filtro de aceite, llaves de bujías, herramientas para alinear ruedas, herramientas para abocardar tubos</p>
        </div>
    </div>
    <div class="card-7">
        <div class="information-7">
            <span>Equipo de Seguridad</span>
                <p>Gafas de seguridad, guantes de trabajo, cascos y protectores auditivos</p>
        </div>
    </div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p>"El sitio web de éste taller mecánico NO<br>
se hace responsable por absolutamente nada de lo que<br>
establezca aquí"</p>
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

<style scoped>
p{
text-align: center;
font-family: 'Poppins', serif;
}
footer {
background:#95D8E0;
padding-top: 17px;
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

/* Tarjeta 0 */
.card {
left: 2%;
width: 300px;
height: 280px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
gap: 10px;
background-color: rgb(255, 255, 255);
border-radius: 15px;
position: relative;
overflow: hidden;
margin: 10px 15px;
float: left;
}
.card::before {
content: "";
width: 350px;
height: 130px;
position: absolute;
top: 0;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
border-bottom: 3px solid #F6F6F6;
background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
transition: all 0.5s ease;
}
.card * {
z-index: 1;
}
.information {
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
transition: all 0.5s ease;
}
.information span {
font-weight: 590;
font-size: 25px;
color: #161A42;
margin-top: 35px;
line-height: 15px;
font-family: 'Microsoft Sans Serif';
}
.information p {
color: rgba(0, 0, 0, 0.5);
font-family: 'Microsoft Sans Serif';
}
.card:hover::before {
width: 350px;
height: 300px;
border-bottom: none;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
transform: scale(0.95);
}
.card:hover .information {
transform: translate(0%,-25%);
}
.viewmore {
top: 75%;
right: 25%;
position: absolute;
background-color:rgb(64, 168, 199);

box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
padding: 15px;
background-repeat: no-repeat;
box-sizing: border-box;
width: 150px;
height: 40px;
color: #fff;
border: none;
font-size: 20px;
transition: all .3s ease-in-out;
z-index: 1;
overflow: hidden;
}
.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}
.viewmore:hover::before {
  width: 100%;
}
/* Tarjeta 1 */
.card-1 {
  left: 2%;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 10px 15px;
  float: left;
}
.card-1::before {
  content: "";
  width: 350px;
  height: 130px;
  position: absolute;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 3px solid #F6F6F6;
  background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
  transition: all 0.5s ease;
}
.card-1 * {
  z-index: 1;
}
.information-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease;
}
.information-1 span {
  font-weight: 590;
  font-size: 25px;
  color: #161A42;
  margin-top: 35px;
  line-height: 24px;
  font-family: 'Microsoft Sans Serif';
}
.information-1 p {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft Sans Serif';
}
.card-1:hover::before {
  width: 350px;
  height: 300px;
  border-bottom: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(0.95);
}
.card-1:hover .information-1 {
  transform: translate(0%,-25%);
}
.viewmore {
  top: 75%;
  right: 25%;
  position: absolute;
  background-color:rgb(64, 168, 199);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}

.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}

.viewmore:hover::before {
  width: 100%;
}
/* Tarjeta 2 */
.card-2 {
  left: 2%;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 10px 15px;
  float: left;
}
.card-2::before {
  content: "";
  width: 350px;
  height: 130px;
  position: absolute;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 3px solid #F6F6F6;
  background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
  transition: all 0.5s ease;
}
.card-2 * {
  z-index: 1;
}
.information-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease;
}
.information-2 span {
  font-weight: 590;
  font-size: 25px;
  color: #161A42;
  margin-top: 35px;
  line-height: 24px;
  font-family: 'Microsoft Sans Serif';
}
.information-2 p {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft Sans Serif';
}
.card-2:hover::before {
  width: 350px;
  height: 300px;
  border-bottom: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(0.95);
}
.card-2:hover .information-2 {
  transform: translate(0%,-25%);
}
.viewmore {
  top: 75%;
  right: 25%;
  position: absolute;
  background-color:rgb(64, 168, 199);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}
.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}
.viewmore:hover::before {
  width: 100%;
}
/* Tarjeta 3 */
.card-3 {
  left: 2%;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 10px 15px;
  float: left;
}
.card-3::before {
  content: "";
  width: 350px;
  height: 130px;
  position: absolute;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 3px solid #F6F6F6;
  background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
  transition: all 0.5s ease;
}
.card-3 * {
  z-index: 1;
}
.information-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease;
}
.information-3 span {
  font-weight: 590;
  font-size: 25px;
  color: #161A42;
  margin-top: 10px;
  line-height: 24px;
  font-family: 'Microsoft Sans Serif';
}
.information-3 p {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft Sans Serif';
}
.card-3:hover::before {
  width: 350px;
  height: 300px;
  border-bottom: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(0.95);
}
.card-3:hover .information-3 {
  transform: translate(0%,-25%);
}
.viewmore {
  top: 75%;
  right: 25%;
  position: absolute;
  background-color:rgb(64, 168, 199);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}
.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}
.viewmore:hover::before {
  width: 100%;
}
/* Tarjeta 4 */
.card-4 {
  left: 2%;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 10px 15px;
  float: left;
}
.card-4::before {
  content: "";
  width: 350px;
  height: 130px;
  position: absolute;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 3px solid #F6F6F6;
  background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
  transition: all 0.5s ease;
}
.card-4 * {
  z-index: 1;
}
.information-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease;
}
.information-4 span {
  font-weight: 590;
  font-size: 25px;
  color: #161A42;
  margin-top: 10px;
  line-height: 24px;
  font-family: 'Microsoft Sans Serif';
}
.information-4 p {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft Sans Serif';
}
.card-4:hover::before {
  width: 350px;
  height: 300px;
  border-bottom: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(0.95);
}
.card-4:hover .information-4 {
  transform: translate(0%,-25%);
}
.viewmore {
  top: 75%;
  right: 25%;
  position: absolute;
  background-color:rgb(64, 168, 199);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}
.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}
.viewmore:hover::before {
  width: 100%;
}
/* Tarjeta 5 */
.card-5 {
  left: 2%;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 10px 15px;
  float: left;
}
.card-5::before {
  content: "";
  width: 350px;
  height: 130px;
  position: absolute;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 3px solid #F6F6F6;
  background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
  transition: all 0.5s ease;
}
.card-5 * {
  z-index: 1;
}
.information-5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease;
}
.information-5 span {
  font-weight: 590;
  font-size: 25px;
  color: #161A42;
  margin-top: 10px;
  line-height: 24px;
  font-family: 'Microsoft Sans Serif';
}
.information-5 p {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft Sans Serif';
}
.card-5:hover::before {
  width: 350px;
  height: 300px;
  border-bottom: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(0.95);
}
.card-5:hover .information-5 {
  transform: translate(0%,-25%);
}
.viewmore {
  top: 75%;
  right: 25%;
  position: absolute;
  background-color:rgb(64, 168, 199);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}
.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}
.viewmore:hover::before {
  width: 100%;
}
/* Tarjeta 6 */
.card-6 {
  left: 2%;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 10px 15px;
  float: left;
}
.card-6::before {
  content: "";
  width: 350px;
  height: 130px;
  position: absolute;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 3px solid #F6F6F6;
  background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
  transition: all 0.5s ease;
}
.card-6 * {
  z-index: 1;
}
.information-6 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease;
}
.information-6 span {
  font-weight: 590;
  font-size: 25px;
  color: #161A42;
  margin-top: 20px;
  line-height: 24px;
  font-family: 'Microsoft Sans Serif';
}
.information-6 p {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft Sans Serif';
}
.card-6:hover::before {
  width: 350px;
  height: 300px;
  border-bottom: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(0.95);
}
.card-6:hover .information-6 {
  transform: translate(0%,-25%);
}
.viewmore {
  top: 75%;
  right: 25%;
  position: absolute;
  background-color:rgb(64, 168, 199);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}
.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}
.viewmore:hover::before {
  width: 100%;
}
/* Tarjeta 7 */
.card-7 {
  left: 2%;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 10px 15px;
  float: left;
}
.card-7::before {
  content: "";
  width: 350px;
  height: 130px;
  position: absolute;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 3px solid #F6F6F6;
  background-image: linear-gradient(to right top,#3D81BE,#5DA6E8,#87C6FF,#B1DAFF);
  transition: all 0.5s ease;
}
.card-7 * {
  z-index: 1;
}
.information-7 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease;
}
.information-7 span {
  font-weight: 590;
  font-size: 25px;
  color: #161A42;
  margin-top: 2px;
  line-height: 24px;
  font-family: 'Microsoft Sans Serif';
}
.information-7 p {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft Sans Serif';
}
.card-7:hover::before {
  width: 350px;
  height: 300px;
  border-bottom: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(0.95);
}
.card-7:hover .information-7 {
  transform: translate(0%,-25%);
}
.viewmore {
  top: 75%;
  right: 25%;
  position: absolute;
  background-color:rgb(64, 168, 199);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}
.viewmore::before {
  content: "";
  background-color: rgb(47, 51, 110);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}
.viewmore:hover::before {
  width: 100%;
}
</style>