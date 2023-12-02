<template>
  <h2>kkkk</h2>
  <p>Aquí irá contenido variado solamente que</p>
  <p>queremos que el footer se vaya pa abajo veda</p>
  <p>y que se vea un poco más decente</p>
  <p>que chsm los temerarios</p>
  <p>en lo que escribo me está doliendo la nuca</p>
  <p>diosito help que me tiro del puente negro 🙊</p>
  <p>me gusta stray kids, twice, gidle, babymetal 🙊</p>
  <p>babymetal salió primer lugar en mi spotify wrapped 2023</p>
  <footer>
        <div class="containert">
            <div class="footer-content">
                <h3>Algo Importante</h3>
                <p>Esperemos que ésto nos salga bonito</p>
                <p>Wiwiwiwiwiwiwi</p>
                
            </div>
            <div class="footer-content">
                <h3>Algo Importante x2</h3>
                <p>Se supone que aquí va algo</p>
                <p>"Omae wa mou shindeiru"</p>
            </div>
            <div class="footer-content">
                <h3>Algo Importante x3</h3>
                <p>Se supone que aquí va algo</p>
                <p>"NANI!!!"</p>
            </div>
        </div>
        </footer>
</template>

<style>
footer{
        background:#dfb14f;
        padding-top: 50px;
    }
    .containert{
        width: 1140px;
        margin: auto;
        display: flex;
        justify-content: center;
    }
    .footer-content{
        width: 33.3%;
    }
    h3{
        font-size: 20px;
        margin-bottom: 15px;
        text-align: center;
    }
    .footer-content p{
        width:190px;
        margin: auto;
        padding: 7px;
    }
    .footer-content ul{
        text-align: center;
    }
    .list{
        padding: 0;
    }
    .list li{
        width: auto;
        text-align: center;
        list-style-type:none;
        padding: 7px;
        position: relative;
    }
    .list li::before{
        content: '';
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 100%;
        width: 0;
        height: 2px;
        background: #f18930;
        transition-duration: .5s;
    }
    .list li:hover::before{
        width: 70px;
    }
    .social-icons{
        text-align: center;
        padding: 0;
    }
    .social-icons li{
        display: inline-block;
        text-align: center;
        padding: 5px;
    }
    .social-icons i{
        color: white;
        font-size: 15px;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        color: #f18930;
    }
    .social-icons i:hover{
        color: #f18930;
    }
    .bottom-bar{
        background: #f18930;
        text-align: center;
        padding: 10px 0;
        margin-top: 50px;
    }
    .bottom-bar p{
        color: #343434;
        margin: 0;
        font-size: 16px;
        padding: 7px;
    }
</style>