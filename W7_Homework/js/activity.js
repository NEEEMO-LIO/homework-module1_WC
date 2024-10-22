/*------Activities------*/
$(document).ready(function() {
    
    let selectedActivities = new Set();

    $('#activ_table td').click(function() {
        
        var cellText = $(this).text().trim();

        
        if (cellText === "Not Available") {
            return;
        }

       
        var cliffSiteIndex = $(this).index();
        var cliffSiteName = $('#activ_table th').eq(cliffSiteIndex).text().trim();
        var activityInfo = cellText + " at " + cliffSiteName;

        
        if ($(this).hasClass('highlight')) {
            $(this).removeClass('highlight');
            selectedActivities.delete(activityInfo);
        } else {
            $(this).addClass('highlight');
            selectedActivities.add(activityInfo);
        }

        
        updateModalContent();
        $('#activitiesModal').modal('show');
    });

    function updateModalContent() {
        const modalBody = $('#modalResult');
        modalBody.empty();

        selectedActivities.forEach(activity => {
            modalBody.append($('<p>').text(activity));
        });
    }

   
    $('#activitiesModal').on('hidden.bs.modal', function () {
        if (selectedActivities.size === 0) {
            $('#activ_table td').removeClass('highlight');
        }
    });

    
    $('.btn-primary').click(function() {
        
        console.log('Getting info for selected activities');
    });
});