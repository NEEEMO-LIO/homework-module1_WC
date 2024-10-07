/*------Activities------*/
$(document).ready(function(){
    $('#activ_table td').click(function() {
        var cellText = $(this).text();
        
        // "Not Available",no effects
        if (cellText === "Not Available") {
            return;
        }

        // remove highlight
        if ($(this).hasClass('highlight')) {
            $(this).removeClass('highlight');
        } else {
            // add highlight
            $(this).addClass('highlight');
        }
    });
});

//user interaction with table cells
$(document).ready(function(){
    $("td").click(function(){ //user select a table data cell
        var content = $(this).text(); //get content of cell

        if(content != "Not Available") {
            $(this).toggleClass("tdhighlight");//add or remove class when cell is selected

            if($(this).hasClass("tdhighlight")){ //check if selected cell has class
                $('#displaySelected').css("visibility","visible");//make display box visible
                $('#displaySelected').css("margin-top","2em"); //add space above display box
                $('#displaySelected').append("<p>"+content+"<p>"); //add child element with contents of cell
            } else { //if selected cell don't have class
                $('#result p:contains(' + content +')').remove(); //remove child element
            
                if ($('#result').has('p').length == false){ //check if there are any child elements within parent
                    $('#displaySelected').css("visibility","hidden"); //make display box hidden
                    $('displaySelected').css("margin-top","0"); //remove spaces above display box
                }
            }
        }
    })
});