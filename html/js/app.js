$(function () {
    filterTree();
    domHeightSet();
    initOwlCarousel();
});

$(window).on("load", function () {
    domSelectors();
});

function initApp() {
    domSelectors();
    filterTree();
    domHeightSet();
    initOwlCarousel();
}
function initOwlCarousel() {
    if ($(".views-slide").length > 0) {
        $(".views-slide").owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            navText: [
                "<img src='assets/images/arrow-slider-left.svg' alt=''/>",
                "<img src='assets/images/arrow-slider-right.svg' alt=''/>",
            ],
            items: 1,
            // slideTransition: 'none',
            mouseDrag: false,
            URLhashListener: true,
            autoplayHoverPause: true,
        });
    }
}

$(window).on("resize", function () {
    domHeightSet();
});
function domSelectors() {
    if ($(".nav-bar").length > 0) {
        $(".nav-bar a").addClass(
            "align-content-center d-flex justify-content-center"
        );
    }
    if ($(".tree-selection").length > 0) {
        $(".tree-link").addClass("d-flex flex-wrap justify-content-between");
        $(".tree-selection-cta").addClass(
            "align-items-center d-flex flex-column text-decoration-none"
        );
        $(".tree-selection-cta .icon").addClass(
            "align-items-center d-flex flex-grow-1 justify-content-center"
        );
        $(".tree-selection-cta .icon img").attr({
            height: 73,
        });
        $(".heading-filter .icon img").attr({
            height: 73,
        });
    }
    if ($(".tree-selected").length > 0) {
        $(".tree-frame").css(
            "height",
            $(window).innerHeight() - $(".tree-selected .heading").innerHeight()
        );
    }
    if ($(".tree-wrap").length > 0) {
        $(".tree-wrap").addClass("col-md-6 col-xl-4 col-xxl-3 mb-5");
        $(".tree-wrap .box").addClass(
            "d-flex flex-column text-center text-decoration-none"
        );
    }
    if ($(".cta").length > 0) {
        $(".cta").addClass("text-center text-decoration-none text-uppercase");
    }
}
function domHeightSet() {
    if ($(".tree-detail").length > 0) {
        $(".tree-detail").css("height", $(window).innerHeight());
        $(".tree-detail .meta").css(
            "height",
            $(window).innerHeight() -
                $(".tree-detail .cta-row .cta").OuterHeight(true)
        );
    }
}
function filterTree() {
    $(".tree-link a").on("click", function (e) {
        e.preventDefault();
        if ($(this).data("tree") != undefined) {
            let data = $(this).data("tree");
            $(".tree-link").removeClass("d-flex");
            $(".tree-link").addClass("d-none");
            $(".filter").addClass("d-none");
            $(".filter[data-tree=" + data + "]").removeClass("d-none");
        }
    });
    $(".filter .cross-filter").on("click", function () {
        closeFilter();
    });
    $(".filter-links li").on("click", function () {
        $(this).closest(".filter").find("li").removeClass("active");
        $(this).toggleClass("active");
    });
}

function closeFilter() {
    $(".filter").addClass("d-none");
    $(".tree-link").removeClass("d-none");
    $(".tree-link").addClass("d-flex");
}
