var yo = require('yo-yo');
var nombre = 'Francisco';
var mensaje = `Buenos dias ${nombre}`;
var layout = require('../layout');
var picture = require('../picture-card');
// template para signup

module.exports = function (pictures) {
  var el = yo`
    <div class="container timeline">
      <div class="row">
        <div class="col s12 m10 offset-m1 l6 offset-l3">
          ${pictures}
          ${pictures.map(function (pic) {
            return picture(pic);
          })}
        </div>
      </div>
    </div>
    `;
    return layout(el);
}
