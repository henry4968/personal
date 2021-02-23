// ---案例分享---
var stories_btn1 = document.getElementsByClassName("stories1_btn")[0];
var stories_btn2 = document.getElementsByClassName("stories2_btn")[0];
var stories_btn3 = document.getElementsByClassName("stories3_btn")[0];
var close_btn = document.getElementsByClassName("stories_close")[0];

var stories1 = document.getElementsByClassName("stories1_content")[0];
var stories2 = document.getElementsByClassName("stories2_content")[0];
var stories3 = document.getElementsByClassName("stories3_content")[0];

var stories1_li = document.getElementsByClassName("stories1_li")[0];
var stories2_li = document.getElementsByClassName("stories2_li")[0];
var stories3_li = document.getElementsByClassName("stories3_li")[0];

var stories1_img = document.getElementsByClassName("stories1_img")[0];
var stories2_img = document.getElementsByClassName("stories2_img")[0];
var stories3_img = document.getElementsByClassName("stories3_img")[0];

stories1_img.addEventListener("click", function () {
    stories_btn1.click();
});

stories2_img.addEventListener("click", function () {
    stories_btn2.click();
});

stories3_img.addEventListener("click", function () {
    stories_btn3.click();
});



stories_btn1.addEventListener("click", function () {
    let width = $(window).width();
    // console.log(width);
    stories1.style.display = "block";
    stories2.style.display = "none";
    stories3.style.display = "none";
    close_btn.style.display = "block";
    stories2_li.style.opacity = .2;
    stories3_li.style.opacity = .2;
    stories1_li.style.opacity = 1;
    if (width > 960) {
        $('html,body').animate({ scrollTop: 1400 }, 'slow');

    } else if (width <= 960 && width > 926) {
        $('html,body').animate({ scrollTop: 2400 }, 'slow');

    } else if (width <= 926 && width > 896) {
        $('html,body').animate({ scrollTop: 2270 }, 'slow');

    } else if (width <= 896 && width > 844) {
        $('html,body').animate({ scrollTop: 2200 }, 'slow');

    } else if (width <= 844 && width > 812) {
        $('html,body').animate({ scrollTop: 2070 }, 'slow');

    } else if (width <= 812 && width > 768) {
        $('html,body').animate({ scrollTop: 1980 }, 'slow');

    } else if (width <= 768 && width > 667) {
        $('html,body').animate({ scrollTop: 1800 }, 'slow');

    } else if (width <= 667 && width > 568) {
        $('html,body').animate({ scrollTop: 1630 }, 'slow');

    } else if (width <= 568) {
        $('html,body').animate({ scrollTop: 1370 }, 'slow');

    };

});

stories_btn2.addEventListener("click", function () {
    let width = $(window).width();
    stories2.style.display = "block";
    stories1.style.display = "none";
    stories3.style.display = "none";
    close_btn.style.display = "block";
    stories1_li.style.opacity = .2;
    stories3_li.style.opacity = .2;
    stories2_li.style.opacity = 1;
    if (width > 960) {
        $('html,body').animate({ scrollTop: 1400 }, 'slow');

    } else if (width <= 960 && width > 926) {
        $('html,body').animate({ scrollTop: 2400 }, 'slow');

    } else if (width <= 926 && width > 896) {
        $('html,body').animate({ scrollTop: 2270 }, 'slow');

    } else if (width <= 896 && width > 844) {
        $('html,body').animate({ scrollTop: 2200 }, 'slow');

    } else if (width <= 844 && width > 812) {
        $('html,body').animate({ scrollTop: 2070 }, 'slow');

    } else if (width <= 812 && width > 768) {
        $('html,body').animate({ scrollTop: 1980 }, 'slow');

    } else if (width <= 768 && width > 667) {
        $('html,body').animate({ scrollTop: 1800 }, 'slow');

    } else if (width <= 667 && width > 568) {
        $('html,body').animate({ scrollTop: 1630 }, 'slow');

    } else if (width <= 568) {
        $('html,body').animate({ scrollTop: 1370 }, 'slow');

    };
});

stories_btn3.addEventListener("click", function () {
    let width = $(window).width();
    stories3.style.display = "block";
    stories1.style.display = "none";
    stories2.style.display = "none";
    close_btn.style.display = "block";
    stories2_li.style.opacity = .2;
    stories1_li.style.opacity = .2;
    stories3_li.style.opacity = 1;
    if (width > 960) {
        $('html,body').animate({ scrollTop: 1400 }, 'slow');

    } else if (width <= 960 && width > 926) {
        $('html,body').animate({ scrollTop: 2400 }, 'slow');

    } else if (width <= 926 && width > 896) {
        $('html,body').animate({ scrollTop: 2270 }, 'slow');

    } else if (width <= 896 && width > 844) {
        $('html,body').animate({ scrollTop: 2200 }, 'slow');

    } else if (width <= 844 && width > 812) {
        $('html,body').animate({ scrollTop: 2070 }, 'slow');

    } else if (width <= 812 && width > 768) {
        $('html,body').animate({ scrollTop: 1980 }, 'slow');

    } else if (width <= 768 && width > 667) {
        $('html,body').animate({ scrollTop: 1800 }, 'slow');

    } else if (width <= 667 && width > 568) {
        $('html,body').animate({ scrollTop: 1630 }, 'slow');

    } else if (width <= 568) {
        $('html,body').animate({ scrollTop: 1370 }, 'slow');

    };
});

close_btn.addEventListener("click", function () {
    let width = $(window).width();
    if (width > 960) {
        $('html,body').animate({ scrollTop: 600 }, 'slow');

    } else if (width <= 960 && width > 926) {
        $('html,body').animate({ scrollTop: 1730 }, 'slow');

    } else if (width <= 926 && width > 896) {                      //i12 pro max
        // $('html,body').animate({ scrollTop: 1620 }, 'slow');
        $('html,body').animate({ scrollTop: 1900 }, 'slow');

    } else if (width <= 896 && width > 844) {                       //i11pro max  XR
        // $('html,body').animate({ scrollTop: 1580 }, 'slow');
        $('html,body').animate({ scrollTop: 1830 }, 'slow');

    } else if (width <= 844 && width > 812) {                       //i12
        $('html,body').animate({ scrollTop: 1730 }, 'slow');
        // $('html,body').animate({ scrollTop: 1480 }, 'slow');

    } else if (width <= 812 && width > 768) {                        //ix/i11  ok!
        // $('html,body').animate({ scrollTop: 1430 }, 'slow');
        $('html,body').animate({ scrollTop: 1670 }, 'slow');

    } else if (width <= 768 && width > 736) {                       //ipad  OK!
        $('html,body').animate({ scrollTop: 1150 }, 'slow');

    } else if (width <= 736 && width > 667) {                       //i6+   OK!
        $('html,body').animate({ scrollTop: 1460 }, 'slow');

    } else if (width <= 667 && width > 568) {                       //i6
        $('html,body').animate({ scrollTop: 1300 }, 'slow');

    } else if (width <= 568) {
        $('html,body').animate({ scrollTop: 1120 }, 'slow');
    };
    setTimeout(function () {
        stories3.style.display = "none";
        stories1.style.display = "none";
        stories2.style.display = "none";
        close_btn.style.display = "none";
        stories1_li.style.opacity = 1;
        stories3_li.style.opacity = 1;
        stories2_li.style.opacity = 1;
    }, 500);
});


$(window).resize(function () {
    var width = $(this).width();
    // console.log(width);
    // console.log(document.getElementsByClassName('stories1_content').length);
    if (width >= 429) {
        $(".stories1_mobile").css("display", "none");
        $(".stories2_mobile").css("display", "none");
        $(".stories3_mobile").css("display", "none");
        $(".stories_img_mobile").css("display", "none");
        $(".stories_content").css("display", "block");
    } else if (width <= 428) {
        $(".stories_content").css("display", "none");
        $(".stories1_mobile").css("display", "block");
        $(".stories2_mobile").css("display", "block");
        $(".stories3_mobile").css("display", "block");
        $(".stories_img_mobile").css("display", "block");
        stories1_li.style.opacity = 1;
        stories3_li.style.opacity = 1;
        stories2_li.style.opacity = 1;
    }
});




// $(window).scroll(function () {
//     let scroll = $(this).scrollTop();
//     // let width = $(window).width();
//     if (scroll > 1) {
//         console.log("scroll-----" + scroll);
//         // console.log("width-----" + width);
//     } else {
//     }
// });


let width = $(window).width();
let stories_img_mobile = document.getElementsByClassName("stories_img_mobile");
let stories_p_mobile = document.getElementsByClassName("stories_p_mobile");

stories_img_mobile[0].addEventListener("click", function () {
    $(".stories1_content_mobile").css("display", "block");
    $(".stories2_content_mobile").css("display", "none");
    $(".stories3_content_mobile").css("display", "none");
    // $(".stories1_title").css("display", "none");
    // $(".stories2_title").css("display", "block");
    // $(".stories3_title").css("display", "block");
    stories_p_mobile[0].style.display = "none";
    stories_p_mobile[1].style.display = "block";
    stories_p_mobile[2].style.display = "block";
    if (width <= 428 && width > 414) {
        $('html,body').scrollTop(1820);

    } else if (width <= 414 && width > 390) {
        $('html,body').scrollTop(1750);

    } else if (width <= 390 && width > 375) {
        $('html,body').scrollTop(1630);

    } else if (width <= 375 && width > 320) {
        $('html,body').scrollTop(1570);

    } else if (width <= 320) {
        $('html,body').scrollTop(1340);

    };
});
stories_img_mobile[1].addEventListener("click", function () {
    $(".stories1_content_mobile").css("display", "none");
    $(".stories2_content_mobile").css("display", "block");
    $(".stories3_content_mobile").css("display", "none");
    // $(".stories1_title").css("display", "block");
    // $(".stories2_title").css("display", "none");
    // $(".stories3_title").css("display", "block");
    stories_p_mobile[0].style.display = "block";
    stories_p_mobile[1].style.display = "none";
    stories_p_mobile[2].style.display = "block";
    setTimeout(function () {
        if (width <= 428 && width > 414) {
            $('html,body').scrollTop(2610);

        } else if (width <= 414 && width > 390) {
            $('html,body').scrollTop(2480);

        } else if (width <= 390 && width > 375) {
            $('html,body').scrollTop(2365);

        } else if (width <= 375 && width > 320) {
            $('html,body').scrollTop(2270);

        } else if (width <= 320) {
            $('html,body').scrollTop(1940);
        };
    }, 0);
});
stories_img_mobile[2].addEventListener("click", function () {
    $(".stories1_content_mobile").css("display", "none");
    $(".stories2_content_mobile").css("display", "none");
    $(".stories3_content_mobile").css("display", "block");
    // $(".stories1_title").css("display", "block");
    // $(".stories2_title").css("display", "block");
    // $(".stories3_title").css("display", "none");
    stories_p_mobile[0].style.display = "block";
    stories_p_mobile[1].style.display = "block";
    stories_p_mobile[2].style.display = "none";

    if (width <= 428 && width > 414) {
        $('html,body').scrollTop(3430);

    } else if (width <= 414 && width > 390) {
        $('html,body').scrollTop(3240);

    } else if (width <= 390 && width > 375) {
        $('html,body').scrollTop(3100);

    } else if (width <= 375 && width > 320) {
        $('html,body').scrollTop(2980);

    } else if (width <= 320) {
        $('html,body').scrollTop(2540);

    };
});

$(".stories_close_mobile").click(function () {
    $(".stories1_content_mobile").css("display", "none");
    $(".stories2_content_mobile").css("display", "none");
    $(".stories3_content_mobile").css("display", "none");
    // $(".stories1_title").css("display", "block");
    // $(".stories2_title").css("display", "block");
    // $(".stories3_title").css("display", "block");
    $(".stories_p_mobile").css("display", "block");
});


let stories_close_mobile = document.getElementsByClassName("stories_close_mobile");
stories_close_mobile[0].addEventListener("click", function () {
    // console.log(1);
    if (width <= 428 && width > 414) {
        $('html,body').scrollTop(1235);
    } else if (width <= 414 && width > 390) {
        $('html,body').scrollTop(1360);
        // $('html,body').scrollTop(1240);
    } else if (width <= 390 && width > 375) {
        $('html,body').scrollTop(1120);
    } else if (width <= 375 && width > 320) {
        $('html,body').scrollTop(1270);
    } else if (width <= 320) {
        $('html,body').scrollTop(1040);

    };
});
stories_close_mobile[1].addEventListener("click", function () {
    // console.log(2);
    if (width <= 428 && width > 414) {
        $('html,body').scrollTop(2040);

    } else if (width <= 414 && width > 390) {
        $('html,body').scrollTop(2140);
        // $('html,body').scrollTop(1960);
    } else if (width <= 390 && width > 375) {
        $('html,body').scrollTop(1860);

    } else if (width <= 375 && width > 320) {
        $('html,body').scrollTop(1970);

    } else if (width <= 320) {
        $('html,body').scrollTop(1640);

    };
});
stories_close_mobile[2].addEventListener("click", function () {
    // console.log(3);
    if (width <= 428 && width > 414) {
        $('html,body').scrollTop(2880);

    } else if (width <= 414 && width > 390) {
        $('html,body').scrollTop(2910);

    } else if (width <= 390 && width > 375) {
        $('html,body').scrollTop(2630);

    } else if (width <= 375 && width > 320) {
        $('html,body').scrollTop(2680);

    } else if (width <= 320) {
        $('html,body').scrollTop(2270);

    };
});

