$(document).ready(function() {
  var doorsCount = 20;

  setTimeout(function() {
    for (var i = 1; i <= doorsCount; i++) {
      $('#teak-main-doors-list').append(
        `<div class="col-md-3 gallery-item">
            <a href="img/teak-main-doors/${i}.jpg" class="img-zoom">
                <div class="gallery-box">
                    <div class="gallery-img"> <img src="img/teak-main-doors/${i}.jpg" class="img-fluid mx-auto d-block" alt="TI - ${i}"> </div>
                </div>
            </a>
        </div>`
      );
    }
  }, 2000);
})