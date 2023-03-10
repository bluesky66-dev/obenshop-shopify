function getQueryStringParameters() {
  var parameters = {}, hash;
  var q = document.URL.split('?')[1];

  if (q != undefined) {
      q = q.split('&');

      for(var i = 0; i < q.length; i++) {
          hash = q[i].split('=');
          parameters[hash[0]] = hash[1];
      }
  }

  return parameters;
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
    return false;
  }

  return true;
}


$(document).ready(function() {
  var parameters = getQueryStringParameters();

  if (isEmpty(parameters) == false) {
    $.each(parameters, function(key, value) {
      if (key != 'shop_by') {
        return;
      }

      if (value == 'item') {
        $('#filter-item').show();
        $('#filter-сategory').hide();
      }

      if (value == 'category') {
        $('#filter-category').show();
        $('#filter-item').hide();
      }
    });
  }

  $('.reviews-section__slider').slick( {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		infinite: true,
		dots: false,
		autoplaySpeed: 3000,
	});


  $('.faq-block__title').on('click', function() {
    const item = $(this);
    const wrap = item.parent();

    item.toggleClass('active');
    wrap.find('.faq-block__text')
      .slideToggle(200)
      .toggleClass('active');
  });

  $(".menu-btn").on("click", function () {
    $(".mobile-navigation").addClass("active");
  });

  $(".mobile-navigation__close").on("click", function () {
    $(".mobile-navigation").removeClass("active");
  });
});