var yo = require('yo-yo');
var nombre = 'Francisco';
var mensaje = `Buenos dias ${nombre}`;

// template para signup
module.exports = yo`<div class="container">
  <div class="row">
    <div class="col-s10 push-s1">
      <div class="row">
        <div class="col m5 hide-on-small-only">
          <img class="iphone" src="./img/world-of-warcraft-alliance-characters-wallpaper-3.jpg" />
        </div>
        <div class="col s12 m7">
          <div class="row">
        <div class="signup-box">
          <h1 class="apigram">Apigram</h1>
          <form class="signup-form">
            <h2>${mensaje}</h2>
            <h2>Registrate para ver como funciona una api de node.js</h2>
            <div class="section">
              <a class="btn btn-fb hide-on-small-only">Iniciar sesion con facebook</a>
              <a class="btn btn-fb  hide-on-med-and-up">Iniciar sesion</a>
            </div>
            <div class="divider"></div>
            <div class="section">
              <input type="email" name="email" placeholder="Email"/>
              <input type="text" name="name" placeholder="Name"/>
              <input type="text" name="username" placeholder="Username"/>
              <input type="password" name="password" placeholder="Password"/>
              <button class="btn waves-effect waves-light btn-signup" type="submit">Sign up </button>
            </div>
          </form>
          </div>
        </div>
        <div class="row">
          <div class="login-box">
            ¿ Ya tienes cuenta ? <a href="/signin">Entrar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>`;
