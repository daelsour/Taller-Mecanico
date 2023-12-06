<template>
<div class="card">
        <div class="information">
            <span>Yessica Pérez Castro</span>
                <p>Product Owner, Desarrolladora Backend</p>
        </div>
    </div>
    <div class="card-1">
        <div class="information-1">
            <span>Maura Graciela Sánchez Fajardo</span>
                <p>Scrum Master, Desarroladora Frontend y Backend</p>
        </div>
    </div>
</template>

<style>
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
  margin-top: 25px;
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
  margin-top: 10px;
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
</style>