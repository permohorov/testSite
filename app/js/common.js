$.slider = function ($container, imagesCount, imagesPath, imagesExtension) {
  var currentImageIndex = 0;

  var showImage = function (filename) {
    $container.css("background", 'url(' + imagesPath + filename + imagesExtension + ') no-repeat center center fixed');
  };

  $container.find('.prev').click(function () {
    showImage(
      currentImageIndex = currentImageIndex > 0 ?
        currentImageIndex - 1 :
        imagesCount - 1
    );
  });

  $container.find('.next').click(function () {
    showImage(
      currentImageIndex = currentImageIndex < imagesCount - 1 ?
        currentImageIndex + 1 :
        0
    );
  });
};

function highlightProduct($product) {
  $product.addClass("active");
  $product.parent().siblings('.product-name').addClass("active");
};

function removeMyClass($product){
  $product.removeClass("active");
  $product.parent().siblings('.product-name').removeClass("active");
};

$("#myForm").validate({
  rules: {
    name: {
      required: true
    },
    sEmail: {
      required: true,
      email: true
    },
    sMessage: {
      required: true
    }
  }
});





$('.buy-now').hover(
  function () {
    highlightProduct($(this));
  },
  function () {
    removeMyClass($(this));
  }
);

$.slider($('.container'), 4, 'css/img/', '.jpg');