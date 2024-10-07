/*------SECTION PAERTNERS------*/

var partners = [
    {src:"images/partners/partner-bustour.png", alt:"Partner Bus Tours"},
    {src:"images/partners/partner-cabinrental.png", alt:"Partner Cabin Rental"},
    {src:"images/partners/partner-campingadv.png", alt:"Partner Camping Adventure"},
    {src:"images/partners/partner-collegetours.png", alt:"Partner College Tours"},
    {src:"images/partners/partner-rentalbike.png", alt:"Partner Bike Rentals"},
    {src:"images/partners/partner-tourgroup.png", alt:"Partner Tour Group"}
]
var partnersList = document.getElementById("partners");

for (var i = 0; i < partners.length; i++) {
var li = document.createElement("li"); 
var img = document.createElement("img"); 

img.src = partners[i].src; 
img.alt = partners[i].alt; 

li.appendChild(img); 
partnersList.appendChild(li); 
}