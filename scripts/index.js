$(document).ready(function() {
    
    desktopFuncs();
    
        // Put all desktop functions to be triggered by resize
        $(window).resize(function() {
            desktopFuncs();
        });
    
    // Overlay-related
        // Get base src for overlay viewer
        // #page1 contains start conditions
        var baseSrc = 'images/zines/';
        var numPages = 0;
        var currentPage = 1;
        baseSrc = baseSrc + $('#page1').data('book') + '/page';
        numPages = $('#page1').data('length');

        // Load overlay on page click
        $('.page').click(function() {
            currentPage = $(this).data('page');
            $('#overlay-page').attr('src', baseSrc + currentPage + '.jpg');
            $('#overlay-left, #overlay-right').css('display', 'inline-block');
            $('#page-count h3').text('page ' + currentPage);
            // CHANGE HTML OF overlay-page
            if (currentPage == 0) {
                $('#overlay-left').css('display', 'none');
            }
            // Check if 0 page and desktop or 1 page and !desktop
            if ((currentPage == (numPages + 1)) ) {
                $('#overlay-right').css('display', 'none');
            }
            $('#overlay').stop().fadeIn(500);
            $('body').css('overflow', 'hidden').css('height', '100vh');
        });
        
        // Closing overlay
        $('#overlay-close, #overlay-field').click(function() {
            $('#overlay').stop().fadeOut(250);
            $('body').css('overflow', 'scroll').css('height', 'auto');
        });
    
        // Overlay navigation
        $('#overlay-right').click(function() {
            // Need conditions to include desktop & mobile cases
            if (currentPage < numPages) {
                currentPage++;
            // CHANGE HTML OF overlay-page
                $('#overlay-page').attr('src', baseSrc + currentPage + '.jpg');
                $('#page-count h3').text('page ' + currentPage);
                if (currentPage != (0 || numPages)) {
                    $('#overlay-right, #overlay-left').css('display', 'inline-block');
                }
            }
        });
        $('#overlay-left').click(function() {
            // see line 49 (conditions)
            if (currentPage > 0) {
                currentPage--;
            // CHANGE HTML OF overlay-page
                $('#overlay-page').attr('src', baseSrc + currentPage + '.jpg');
                $('#page-count h3').text('page ' + currentPage);
                if (currentPage != (0 || numPages)) {
                    $('#overlay-right, #overlay-left').css('display', 'inline-block');
                }
            }
        });
                
});



// Return true if desktop (#page0 is being displayed)
function checkDesktop() {
    if ($('#page0').css('display') != 'none') {
        console.log('true');
        return true;
    }
    console.log('false');
    return false;
}



// If desktop
function desktopFuncs() {
    if (checkDesktop()) {
        console.log('Were on Desktop');
        $('.page-nav-container').mouseenter(function() {
            $('.case-left, .case-right').stop().fadeIn(400);

        });
        $('.page-nav-container').mouseleave(function() {
            $('.case-left, .case-right').stop().fadeOut(200);
        });
    }
};
    
// Force mobile... need to fix
function forceMobile() {
    $('.case-left, .case-right').css('display', 'none');
};