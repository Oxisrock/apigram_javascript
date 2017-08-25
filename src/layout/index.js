var yo = require('yo-yo');
var nombre = 'Francisco';
var mensaje = `Buenos dias ${nombre}`;

module.exports = function layout (content) {
  // template para signup
  return yo`<div>
  <nav class="header">
    <div class="nav-wrapper">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 offset-m1">
            <a href="/" class="brand-logo apigram">Apigram</a>
          </div>
          <div class="col s2 m6 push-s10 push-m10">
            <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <ul id="drop-user" class="dropdown-content">
              <li><a href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="content">
    ${content}
  </div>
</div>
  `;

}
