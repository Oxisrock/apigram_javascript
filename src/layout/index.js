var yo = require('yo-yo');
var nombre = 'Francisco';
var mensaje = `Buenos dias ${nombre}`;
var translate = require('../translate');
module.exports = function layout (content) {
  // template para signup
  return yo`
  <div class="content">
    ${content}
  </div>
  `;

}
