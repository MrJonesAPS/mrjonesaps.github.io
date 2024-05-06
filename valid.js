//most of this sample code comes straight from here:
//https://github.com/validator/validator/wiki/Service-%C2%BB-HTTP-interface
$.get('#', function(html) {

    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                            loc + '?profile=css3';
    $("#vLink1").attr("href", HTMLvalidLinkStr);
    $("#vLink2").attr("href", CSSvalidLinkStr);

    // emulate form post
    var formData = new FormData();
    formData.append('out', 'json');
    formData.append('content', html);
    
    // make ajax call
    $.ajax({
        url: "https://html5.validator.nu/",
        data: formData,
        dataType: "json",
        type: "POST",
        processData: false,
        contentType: false,
        success: function(data) {
            //if data is an empty array, print "success". Otherwise print the array
            if(data.messages.length == 0){
                console.log("No Errors")
                $("#HTMLCSS").html("<strong> HTML/CSS </strong> Valid!")
            }else{
                console.log("Errors")
                console.log(data.messages); // data.messages is an array
                $("#HTMLCSS").html("<strong> HTML/CSS </strong> NOT Valid!")
            }
        },
        error: function() {
           console.warn(arguments);
        }
    });
});