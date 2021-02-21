$(document).ready(function(){
    $("#searchButton").click(function(){
        var params = {
            atm: {
                lat: '123',
                lon: '1234',
                accuracy: 15
            },
            currency: {
                from: 'PEN',
                to: 'EUR',
                amount: 1
            }
        };

        $.ajax({
            url: 'https://test-banking-app.herokuapp.com/banking',
            data: params,
            async : true,
            error: function(err) {
                $('#content').html(JSON.stringify(err));
            },
            dataType: 'jsonp',
            success: function(data) {
                $("#content").text(JSON.stringify(data));
            },
            type: 'GET'
        });

    });
});