$(function() {

    var body = $("body");
    var timerStop = true;
    var page = $("#mainFullpage");
    var fullpagePl = true;

    function runSec2Timer() {
        var sec2Timer = new CountUp("sec2__number", 0, 2000, 0, 1.4, {
            separator: ""
        });
        sec2Timer.start();
    };
    
    if (localStorage.getItem('orCarName')) {
        $(".thanks__name").text(localStorage.getItem('orCarName'));
    }

    $(".js-input-tel").mask("+7 (999) 999-99-99");

    $(".g-modal__form:not(.g-modal__form_presentation)").submit(function(e) {
        e.preventDefault();
        var self = $(this);
        var formData = self.serializeArray();
        console.log(formData);

        $.ajax({
            //url: "",
            data: formData,
            success: function(data) {
                $(".g-modal_thanks").fadeIn();
            }
        });

        var selfName = self.find("input[name=name]").val();

        localStorage.setItem('orCarName', selfName);
    });

    $(".g-modal__form_presentation").submit(function(e) {
        e.preventDefault();

        var self = $(this);
        var formData = self.serializeArray();
        console.log(formData);

        $.ajax({
            //url: "",
            data: formData,
            success: function(data) {
                $(".g-modal").fadeOut();
                window.location = "thanks.html";
            }
        });
    });

    $(".g-modal_thanks").on("click", function() {
        
    })

    body.on("click", ".js-get-call", function(e) {
        e.preventDefault();

        $('.g-modal_get-call').fadeToggle();
    });

    body.on("click", function(e) {
        var target = $(e.target);

        if((target.hasClass("g-modal") || target.hasClass("g-modal__close")) && (target.hasClass("g-modal_thanks") && target.hasClass("g-modal__close_thanks"))) {
            $(".g-modal").fadeOut();
        } else if (target.hasClass("g-modal_thanks") || target.hasClass("g-modal__close_thanks")){
            $(".g-modal").fadeOut();
            window.location = "thanks.html";
        }
    });

    body.on("click", ".js-reguest", function(e) {
        e.preventDefault();

        $('.g-modal_request').fadeToggle();
    });

    body.on("click", function(e) {
        var target = $(e.target);

        if(target.hasClass("g-modal") || target.hasClass("g-modal__close")) {
            $(".g-modal").fadeOut();
        }
    });

    body.on("click", ".thanks__btn-back", function(e) {
        e.preventDefault();

        window.location = "index.html";
    });

    body.on("click", ".thanks__btn-doc", function(e) {
        e.preventDefault();

        window.location = "doc/doc.pdf";
    });
    
    if (window.matchMedia("(max-width: 1024px)").matches) {
        $('.sec1').viewportChecker({
            classToAdd: '',
            classToAddForFullView: '',

            callbackFunction: function(elem, action) {
                $(".sec1__auto").addClass("sec1__auto_show");
            }
        });

        $('.sec2__number').viewportChecker({
            classToAdd: '',
            classToAddForFullView: '',
            callbackFunction: function(elem, action) {

                if(timerStop) {
                    runSec2Timer();
                    timerStop = false;
                }
            },
        });
    } else {
        $("#mainFullpage").fullpage({
            scrollOverflow: true,

            afterRender: function() {
                $(".sec4__list-item").addClass("sec4__list-item_hide");

                $('.sec2__img_auto').viewportChecker({
                    classToAdd: 'sec2__img_move',
                    classToAddForFullView: 'sec2__img_move',
                });
            },

            afterLoad: function(anchorLink, index) {
                if (index == 1) {
                    $('.sec1__auto').addClass("sec1__auto_show");
                } else if (index == 4) {

                    $('.sec4__list-item').addClass("sec4__list-item_show");
                    
                }
            },

            onLeave: function(index, nextIndex, direction) {
                if (nextIndex == 2 && timerStop) {
                    $('.sec2__img_auto').addClass("sec2__img_move");

                    runSec2Timer();

                    timerStop = false;
                }
            }
        });
    }
});

