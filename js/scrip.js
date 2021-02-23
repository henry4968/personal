// ---電話---
var tel_img = document.getElementsByClassName("tel_img_a")[0];
tel_img.addEventListener("click", function () {
    var is_confirm = confirm("您好!確定要撥打電話至單程行旅嗎?");
    if (is_confirm) {
        this.href = "tel:+886-00000000";
    }
    else {
        this.href = "###";
    }
});

//top
$(document).ready(function () {
    var height = $(window).height();
    let width = $(window).width();
    // if (width > 960) {
    window.onload = function () {
        if (width > 960) {
            $(".load").fadeOut(3000);
            $(".load_2").fadeOut(1200);
        } else {
            $(".load").css('display', 'none');
            $(".load_2").css('display', 'none');
        }
    };
    // console.log(height / 2);
    /* 按下GoTop按鈕時的事件 */
    $('.fa-arrow-circle-up').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });

    /* 偵測卷軸滑動時，往下滑超過height / 3就讓GoTop按鈕出現 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > height / 3) {
            $('.fa-arrow-circle-up').fadeIn();
        } else {
            $('.fa-arrow-circle-up').fadeOut();
        }
    });
});

//漢堡選單
document.addEventListener("click", function (e) {
    if (e.target.closest(".fa-bars")) {
        ham(e);
    } else if (e.target.closest(".other_ul")) {
        ul_close(e);
    } else if (e.target.closest(".bars")) {
        ham_colse(e);
    }
});
var header_ul = document.getElementsByClassName("header_ul")[0];
var none = header_ul.classList.contains("none");

function ham() {
    var header_ul = document.getElementsByClassName("header_ul")[0];
    var none = header_ul.classList.contains("none");
    if (!none) {
        $('.fa-bars').css('display', 'none');
        header_ul.classList.add("none");
        $('.other_ul').css('display', 'block');
        $('.bars').css('display', 'block');
    } else { }
};

function ham_colse() {
    var header_ul = document.getElementsByClassName("header_ul")[0];
    var none = header_ul.classList.contains("none");
    if (none) {
        $('.bars').css('display', 'none');
        header_ul.classList.remove("none");
        $('.other_ul').css('display', 'none');
        $('.fa-bars').css('display', 'block');
    } else { }
};

function ul_close() {
    var header_ul = document.getElementsByClassName("header_ul")[0];
    var none = header_ul.classList.contains("none");
    header_ul.classList.remove("none");
    if (none) {
        $('.other_ul').css('display', 'none');
        $('.bars').css('display', 'none');
        $('.fa-bars').css('display', 'block');

    } else {
        $('.other_ul').css('display', 'block');
        $('.bars').css('display', 'block');
        $('.fa-bars').css('display', 'none');
    }
}



