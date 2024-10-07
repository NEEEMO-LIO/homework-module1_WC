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