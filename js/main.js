/********************
 * ハンバーガーメニュー *
 ********************/
// ハンバーガーボタンを押したら、メニューを表示
$("#hamburger-btn").click(function () {
  $(this).toggleClass("in-open");
  $("#nav-menu").toggleClass("hamburger-menu");
});

// メニューアイテムを押したら、メニューを閉じる
$(".menu-item").click(function () {
  $("#hamburger-btn").toggleClass("in-open");
  $("#nav-menu").toggleClass("hamburger-menu");
});

/************************
 * 特定の位置までスクロール *
 ************************/
// スクロール関数定義
let scroll = (link, target) => {
  $(link).click(() => {
    let offset;
    if (document.documentElement.offsetWidth > 1400) {
      offset = 100;
    } else if (document.documentElement.offsetWidth > 1024) {
      offset = 60;
    } else offset = 0;
    $("html,body").animate({ scrollTop: $(target).offset().top - offset });
    $("#overlay").removeClass("open");
    $("html div").removeClass("blur");
    $("#toggle").toggleClass("active");
  });
};

// スクロール実装
scroll("#top-link", "#top");
scroll("#strength-link", "#strength");
scroll("#business-link", "#business");
scroll("#product-link", "#product");
scroll("#company-link", "#company");
scroll("#recruit-link", "#recruit");
scroll("#contact-link", "#contact");
