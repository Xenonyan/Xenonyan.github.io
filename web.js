const body = $("body"),
    homepage = $("#homePage"),
    schoolpage = $("#schoolPage"),
    aboutpage = $("#aboutPage"),
    contactpage = $("contactPage");
    pages = $(".page");

body.removeClass("stop-scrolling");
function homeAni() {
    homepage.fadeIn(2000);
    homepage.css({"display": "inline-table"});
}
homeAni();
// Setting up homepage and the loading screen	
// $(window).on("load", async function () {	
//     await loadAnimation(500, homepage);
//     window.location.assign("https://xenonyy.github.io/home");
// });

// Remove the scrollbar to wait for the loading animation
// $(window).on('load', function () {
//     setTimeout(() => { $('body').removeClass('stop-scrolling'); }, 750);
// });

// Navigation in between pages
// async function loadAnimation(ms, page) {
//     pages.slideUp(ms);
//     return new Promise(resolve => setTimeout(resolve, ms))
//         .then(() => page.slideDown(600));
// }
// function changeBG(source) {	
//     document.body.style.backgroundImage = "url(" + source + ")";	
// }

// $("#home").click(async function () {
    // await loadAnimation(400, homepage);
    // changeBG('abstract.jpg');
// });
// $("h2").click(async function () {
    // await loadAnimation(400, aboutpage);
    // changeBG('triangle.jpg');
// });
// $("h3").click(async function () {
    // await loadAnimation(400, schoolpage);
    // changeBG('js.jpg');
// });


// Navigation
$("#home").on("click", function () {
    document.getElementById("homePage").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});
$("#aboutMe").on("click", function () {
    document.getElementById("aboutPage").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});
$("#contact").click(function () {
    document.getElementById("footer").scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
});


// Animations
function aboutAni() {       
    $('#aboutTitle, #contactTitle').css({
        'animation': 'fadeInLeftTitle 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)'
    });
}
if (document.readyState === 'interactive') {
    $(document).scroll(function() {
        if ($(this).scrollTop() > 100) {
            aboutAni();
        }
    });
}