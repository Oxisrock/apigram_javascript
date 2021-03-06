var yo = require('yo-yo');
var nombre = 'Francisco';
var mensaje = `Buenos dias ${nombre}`;
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate');
var request = require('axios');
// template para signup

module.exports = function (pictures) {
  var el = yo`
    <div class="container timeline">
      <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
          <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onSubmit}>
            <div id="fileName" class="fileUpload btn btn-flat cyan">
              <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate.message('upload-picture')} </span>
              <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
            </div>
            <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate.message('upload')}</button>
            <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
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
    function toggleButtons() {
      document.getElementById('fileName').classList.toggle('hide');
      document.getElementById('btnUpload').classList.toggle('hide');
      document.getElementById('btnCancel').classList.toggle('hide');
    }
    function cancel() {
      toggleButtons();
      document.getElementById('formUpload').reset();
    }
    function onchange() {
      toggleButtons();
    }
    function onSubmit(ev) {
      ev.preventDefault();

      var data = new FormData(this);

      // request
      //   .post('/api/pictures')
      //   .send(data)
      //   .end(function (err, res) {
      //     console.log(arguments);
      //   })

       request
          .post('/api/pictures',data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (err) {
            console.log(err);
          });

        // function loadPicturesAxios (ctx, next) {
        //   axios
        //     .get('/api/pictures')
        //     .then(function (res) {
        //       ctx.pictures = res.data;
        //       next();
        //     })
        //     .catch(function (err) {
        //       console.log(err);
        //     })
        // }

    }
    return layout(el);
}
