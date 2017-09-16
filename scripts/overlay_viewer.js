// Code for displaying overlaid issue viewer
$(document).ready(function() {
    
    // Opening and closing overlay
    $('.sublink').click(function() {
        $('#overlay').fadeIn();
    });
    $('#close-button, #overlay-close').click(function() {
        $('#overlay').fadeOut();
    });
    
    // Disable dragging
    $('#overlay-page1, #overlay-page2').attr('draggable', false);
    
    // Establish base var
    var baseSrc = 'images/zines/';
    var currentPage = 1;
    var numPages = 0;
    
    // Determine desired issue and establish start conditions
    $('.sublink').click(function() {
        currentPage = 1;    // Resets everytime new issue click

        // Set up base source and issue length
        baseSrc = 'images/zines/' + $(this).data('book') + '/page';
        numPages = $(this).data('length');

        // Load initial pages
        $('#overlay-page1').attr('src', baseSrc + '0.jpg');
        $('#overlay-page2').attr('src', baseSrc + '1.jpg');
    });
    
    // Check viewer size
    if(checkSize()) {

        // Forward function
        $('#overlay-page2, #page-right').click(function() {
            if (currentPage < (numPages + 1)) {
                currentPage += 2;
                $('#overlay-page1').attr('src', baseSrc + (currentPage-1) + '.jpg');
                $('#overlay-page2').attr('src', baseSrc + currentPage + '.jpg');
            }
        });

        // Backwards function
        $('#overlay-page1, #page-left').click(function() {
            if (currentPage > 1) {
                currentPage -= 2;
                $('#overlay-page1').attr('src', baseSrc + (currentPage-1) + '.jpg');
                $('#overlay-page2').attr('src', baseSrc + currentPage + '.jpg');
            }
        });
    } 
    
    if(!checkSize()) {
        // 1 page forward function
        $('#overlay-page2, #page-right').click(function() {
            if (currentPage < (numPages)) {
                currentPage++;
                $('#overlay-page2').attr('src', baseSrc + currentPage + '.jpg');
            }
        });
        
        // 1 page backward function
        $('#page-left').click(function() {
            if (currentPage > 0) {
                currentPage--;
                $('#overlay-page2').attr('src', baseSrc + currentPage + '.jpg');
            }
        });
    }
        
    // Check size every window resize
    $(window).resize(checkSize);
  
});

// If screen size too small
function checkSize() {
    if ($('#overlay-page1').css('display') == 'none') {
        return false;
    }
    return true;
}