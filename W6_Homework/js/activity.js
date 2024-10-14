/*------Activities------*/
$(document).ready(function() {
    $('#activ_table td').click(function() {
        // get the text of the clicked cell
        var cellText = $(this).text();

        // if "Not Available", not effects
        if (cellText === "Not Available") {
            return; 
        }

        // get the index of the clicked cell
        var cliffSiteIndex = $(this).index(); 

        // get the corresponding cliff site name from the header
        var cliffSiteName = $('#activ_table th').eq(cliffSiteIndex).text(); 

        // remove highlight from the cell if already highlighted
        if ($(this).hasClass('highlight')) {
            $(this).removeClass('highlight'); 
        } else {
            // add highlight to the cell if not already highlighted
            $(this).addClass('highlight'); // add highlight class to the clicked cell
        }

        // add cliffname
        var activityInfo = cellText + " (at " + cliffSiteName + ")"; 

        // display box for selected
        $('#displaySelected').css("visibility", "visible"); // display box visible
        $('#displaySelected').css("margin-top", "2em"); // add space above the display box

        // check repeation
        if ($('#result p:contains(' + activityInfo + ')').length === 0) {
            // append the activity information to the result section
            $('#displaySelected').append("<p>" + activityInfo + "<p>"); 
        }

        // check if deselected
        if ($(this).hasClass("tdhighlight")) { 
            $(this).removeClass("tdhighlight"); 
            $('#result p:contains(' + activityInfo + ')').remove(); 

            // hide the display box if no activities are selected
            if ($('#result').children('p').length == 0) { 
                $('#displaySelected').css("visibility", "hidden"); // hide box
                $('#displaySelected').css("margin-top", "0"); // remove spaces above the box
            }
        } else {
            $(this).addClass("tdhighlight"); // Add highlight class to indicate selection
        }
    });
});