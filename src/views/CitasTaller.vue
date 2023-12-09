<template>
  <section class="section section--gap-v section--nogap-up">
    <div data-order-mv="2" class="dual__item   dual__item--gap-h">
      <div class="dual__inner">
        <h4 class="title font--m font--secondary">Formulario de Contacto</h4>
        <div class="field">
          <input name="ctl00$MainContent$formularioMailUC$nombre" type="text" id="ctl00_MainContent_formularioMailUC_nombre" required autocomplete="name" placeholder="Nombre" data-es="Nombre" class="field__input" data-name="nombre">
        </div>
        <div class="field">
          <input name="ctl00$MainContent$formularioMailUC$nombre" type="text" id="ctl00_MainContent_formularioMailUC_nombre" required autocomplete="phone" placeholder="Teléfono" data-es="Telefono" class="field__input" data-name="telefono">
        </div>
        <div class="field">
          <input name="ctl00$MainContent$formularioMailUC$nombre" type="text" id="ctl00_MainContent_formularioMailUC_nombre" required autocomplete="email" placeholder="Correo Electrónico" data-es="Email" class="field__input" data-name="email">
        </div>
        <div class="field">
          <textarea name="ctl00$MainContent$formularioMailUC$mensaje" id="ctl00_MainContent_formularioMailUC_mensaje" data-name="mensaje" data-es="Mensaje" class="field__textarea" autocomplete="off" placeholder="Mensaje" required>
          </textarea>
        </div>
      </div>
      <button class="comentar"><a href=" ">Enviar</a></button>
  </div>
</section>
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
.comentar {
    background-color: #719BE0;
    width: 15%;
    height: 50px;
    font-family: "Microsoft Sans Serif";
    font-size: 15px;
    border-radius: 5px;
    border: none;
    overflow: hidden;
}
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
        color: #EDF2FB;
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
.font--primary {
    color: #4169AB;
    font-size: 15px;
    font-family: "Microsoft Sans Serif";
}
.title {
    font-family: "Microsoft Sans Serif";
    line-height: 1.25em;
    margin: 0 0 0.5em;
    font-weight: var(--bold1);
}
li {
    text-align: -webkit-match-parent;
}
h4 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align: left;
}
.field:not(.news):not(.terminos) {
    position: relative;
    width: 80%;
    background: #fff;
    border-radius: 8px;
    padding: 0.11rem;
    padding-bottom: 0.4rem;
}
.field:not(:last-child), .form__info-datos {
    margin: 0 0 0.8rem;
}
.field__input {
    display: block;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 30px;
    line-height: 48px;
    padding: 0.8rem;
    width: 50%;
    position: relative;
    font-size: 16px;
    line-height: 100%;
    outline: none;
    z-index: 1;
    background: #fff;
}
.field__textarea {
    height: auto;
    flex: 1;
    resize: vertical;
    min-height: 90px;
}
.field__textarea {
    display: block;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 48px;
    line-height: 48px;
    padding: 0.6rem;
    width: 52%;
    position: relative;
    font-size: 16px;
    line-height: 100%;
    outline: none;
    z-index: 1;
    background: #fff;
}
</style>