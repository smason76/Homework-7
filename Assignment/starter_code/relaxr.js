$(document).ready(function () {
    //    alert('document ready');
    //    click the hamburger to show menu
    $('.hamburger').on('click', function () {
        //        alert('hamburger clicked');
        $('nav').toggleClass('show');
        //        alert('show nav');
    });
});


//setting up the clickhandlers for the read more/ read less function  
$('.readmore').click(function () {
    toggleReadMore(this);
});

$('.readless').click(function () {
    toggleReadMore(this);
});

$('.readmore').each(function () {
    toggleReadMore(this);

});

//combined read more / read less link
function toggleReadMore(paragraphLink) {

    var showChar = 150; //how many characters are shown by default
    var content = $(paragraphLink).prev().html();
    var lessContent = content.substr(0, showChar) + '...';
    var savedOriginalText = $(paragraphLink).attr('originalText');
    var linkText = '';

    if (savedOriginalText == null || savedOriginalText == '') {
        $(paragraphLink).attr('originalText', content);
        $(paragraphLink).prev().text(lessContent);
        linkText = 'Read more >';
    } else {
        $(paragraphLink).prev().text(savedOriginalText);
        linkText = 'Read less >';
        $(paragraphLink).attr('originalText', '');
    }

    $(paragraphLink).children('a').first().text(linkText);


}