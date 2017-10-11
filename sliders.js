$( document ).ready(function() {
    var s  = $('#sliders');
    for(var i=1; i<10; i++)
    {
        s.append('<div class="col-6 col-lg-4">' +
            '<img src="http://via.placeholder.com/300x300" class="img-responsive" alt="'+i+'"></div>');
    }
});