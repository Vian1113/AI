$(document).ready(function () {
    $(".filterBtn").click(function () {
        $(this).toggleClass("active");
    });

    // 篩選swiper
    function filter(){
        var swiper = new Swiper(".filterSwiper", {
            slidesPerView: "auto",
            spaceBetween: 8,
            loop: true,
            loopedSlides: 15,
            grabCursor: true,
            on: {
                slideChange: function () {
                    // 在這裡放toggleClass效果
                    $(".filterBtn").click(function () {
                        $(this).toggleClass("active"); // 使用關鍵字this代表當前點擊的元素
                    });
                }
            }
        });
    }
    //合作夥伴 swiper
    function partner(){
        var swiper = new Swiper(".partnerSwiper-1", {
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: true,
            loopedSlides: 7,
            grabCursor: true,
    
        });
    
        var swiper = new Swiper(".partnerSwiper-2", {
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: true,
            loopedSlides: 7,
            grabCursor: true,
    
        });

    }
    
    //顧客推薦 swiper
    function comment(){
        var swiper = new Swiper(".commentSwiper", {
            slidesPerView: 3,
            /* 斷點設定 */
            breakpoints: {
                /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
                992: {
                    slidesPerView: 3
                },
                /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
                768: {
                    slidesPerView: 2
                },
                /* 更小時都顯示 1 欄 */
                0: {
                    slidesPerView: 1
                }
            },
            spaceBetween: 24,
            grabCursor: true,
            loop: true,
            pagination: {
                /* 想將分頁圓點綁在哪個 class */
                el: ".swiper-pagination",
                /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
                clickable: true
            }
    
        });
    }

    filter();
    partner();
    comment();

   


});




