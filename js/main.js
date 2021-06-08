let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

function formatState (state) {
    if (!state.id) {
      return state.text;
    }
  
    var baseUrl = "../Teстовое задание/img";
    var $state = $(
      '<span><span></span><img class="img-flag" /> </span>'
    );
  
    $state.find("span").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
  
    return $state;
};
  
$(".js-example-templating").select2({templateSelection: formatState});