$(function () {

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
        // console.log(localStorage.getItem('orCarName'))
        // $(".thanks__name").text(localStorage.getItem('orCarName'));
    }

    $(".js-input-tel").mask("+7 (999) 999-99-99");

    $(".g-modal__form").submit(function (e) {
        // var self = $(this);
        // e.preventDefault();

        // var selfName = self.find("input[name=name]").val();

        // localStorage.setItem('orCarName', selfName);

        // var newHostName = window.location.host;
        // window.location.pathname ="thanks.html"
    });

    body.on("click", ".js-get-call", function (e) {
        e.preventDefault();

        $('.g-modal_get-call').fadeToggle();
    });

    body.on("click", function (e) {
        var target = $(e.target);

        if (target.hasClass("g-modal") || target.hasClass("g-modal__close")) {
            $(".g-modal").fadeOut();
        }
    });

    body.on("click", ".js-reguest", function (e) {
        e.preventDefault();

        $('.g-modal_request').fadeToggle();
    });

    body.on("click", function (e) {
        var target = $(e.target);

        if (target.hasClass("g-modal") || target.hasClass("g-modal__close")) {
            $(".g-modal").fadeOut();
        }
    });

    if (window.matchMedia("(max-width: 1024px)").matches) {
        $('.sec1').viewportChecker({
            classToAdd: '',
            classToAddForFullView: '',

            callbackFunction: function (elem, action) {
                $(".sec1__auto").addClass("sec1__auto_show");
            }
        });

        $('.sec2__number').viewportChecker({
            classToAdd: '',
            classToAddForFullView: '',
            callbackFunction: function (elem, action) {

                if (timerStop) {
                    runSec2Timer();
                    timerStop = false;
                }
            }
        });

        $('.sec4').viewportChecker({
            callbackFunction: function (elem, action) {
                $(".icon-auto").each(function () {
                    var self = $(this);
                    var selfId = self.attr("id");

                    //new Vivus(selfId, {duration: 200});
                });
            }
        });
    } else {
        $("#mainFullpage").fullpage({
            scrollOverflow: true,

            afterRender: function () {
                $(".sec4__list-item").addClass("sec4__list-item_hide");

                $('.sec2__img_auto').viewportChecker({
                    classToAdd: 'sec2__img_move',
                    classToAddForFullView: 'sec2__img_move'
                });

                $('.icon-auto').each(function () {
                    var self = $(this);

                    self.viewportChecker({
                        classToAdd: '',
                        classToAddForFullView: '',
                        callbackFunction: function (elem, action) {

                            var selfId = elem.attr("id");

                            //new Vivus(selfId, {duration: 200});
                        }
                    });
                });
            },

            afterLoad: function (anchorLink, index) {
                if (index == 1) {
                    $('.sec1__auto').addClass("sec1__auto_show");
                } else if (index == 4) {
                    console.log(4);
                    $(".icon-auto").each(function () {
                        var self = $(this);
                        var selfId = self.attr("id");

                        //new Vivus(selfId, {duration: 200});
                    });

                    $('.sec4__list-item').addClass("sec4__list-item_show");
                }
            },

            onLeave: function (index, nextIndex, direction) {
                if (nextIndex == 2 && timerStop) {
                    $('.sec2__img_auto').addClass("sec2__img_move");

                    runSec2Timer();

                    timerStop = false;
                }
            }
        });
    }
});
//# sourceMappingURL=app.js.map
