var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/clickstream/",
        headers: {
            'X-CSRFToken': $('[name="csrfmiddlewaretoken"]').val()
        },
        data: {
            username: $('#username').val(),
            password: $('#password').val(),
        },
        dataType: "text",
        success: function(result){
            console.log('success');
        },
        error: function(xhr, status, error){
            console.log('failure');
        }
    })
});
