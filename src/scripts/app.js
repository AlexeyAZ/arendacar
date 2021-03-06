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
    
    if (localStorage.getItem('landclientname')) {
        $(".thanks__name").text(localStorage.getItem('landclientname'));
    }

    $(".js-input-tel").mask("+7 (999) 999-99-99");

    // $(".sec6__form,.g-modal__form:not(.g-modal__form_presentation)").submit(function(e) {
    //     e.preventDefault();
    //     var self = $(this);
    //     var selfName = self.find("input[name=name]");
    //     var selfPhone = self.find("input[name=phone]");
    //     var selfEmail = self.find("input[name=email]");
    //     var formData = self.serialize();
    //     console.log(formData);

    //     $("[name=name1]").val(selfName.val());
    //     $("[name=phone1]").val(selfPhone.val());
    //     $("[name=email1]").val(selfEmail.val());

    //     $.when(
    //         $.ajax({
    //             method: "POST",
    //             url: "phpfiles/send.php",
    //             data: formData,
    //             success: function(data) {
    //                 $(".g-modal_thanks").fadeIn();
    //             }
    //         }),

    //         $.ajax({
    //             method: "POST",
    //             url: "phpfiles/sendwe.php",
    //             data: formData,
    //             success: function(data) {
                    
    //             }
    //         })
    //     );

    //     var selfName = self.find("input[name=name]").val();

    //     localStorage.setItem('orCarName', selfName + ", ");
    // });

    // $(".g-modal__form_presentation").submit(function(e) {
    //     e.preventDefault();

    //     var self = $(this);
    //     var formData = self.serializeArray();

    //     $.ajax({
    //         method: "POST",
    //         url: "phpfiles/sendpresent.php",
    //         data: formData,
    //         success: function(data) {
    //             $(".g-modal").fadeOut();
    //             window.location = "thanks.html";
    //         }
    //     });
    // });

    if (typeof wl != "undefined") {
        wl.callbacks.onFormSubmit = function ($form, res) {
            var formData;
            if ($form.data('next')) {
            
                if(res.status == 200) {
                    $(".form-wrap_open").removeClass("form-wrap_open");

                    var selfName = $form.find("input[name=name]");
                    var selfPhone = $form.find("input[name=phone]");
                    var selfEmail = $form.find("input[name=email]");
                    console.log(formData);

                    $("[name=name1]").val(selfName.val());
                    $("[name=phone1]").val(selfPhone.val());
                    $("[name=email1]").val(selfEmail.val());
                    formData = $form.serialize();
                    
                   $('.g-modal_get-call').hide();
                   $(".g-modal_request").hide();
                   $(".g-modal_thanks").fadeIn();

                    name = selfName.val();

                    if (name) {
                        localStorage.setItem("landclientname", name + ", наши");
                    } else {
                        localStorage.setItem("landclientname", "Наши");
                    }

                    $.ajax({
                        type: "POST",
                        url: "phpfiles/sendwe.php",
                        data: formData,
                        success: function() {
                            console.log(1)
                        }
                    })
                } else {  
                    wl.callbacks.def.onFormSubmit($form, res);
                }
            } else {
                //formData = $form.serialize();
                
                // $.ajax({
                //     type: "POST",
                //     url: "phpfiles/sendwe.php",
                //     data: formData,
                //     success: function() {
                //         alert(formData);
                //         window.location = "thanks.html";
                //     }
                // })
                
                window.location = "thanks.html";
            }
        };
    } else {
        $("#smallForm, #middleForm, #openForm, #bigForm").submit(function(e) {
            e.preventDefault();

            var self = $(this);
            var selfName = self.find("input[name=name]");
            var selfPhone = self.find("input[name=phone]");
            var selfEmail = self.find("input[name=email]");
            var formData = self.serialize();
            console.log(formData);
                   //$(".g-modal_thanks").fadeToggle();

            $("[name=name1]").val(selfName.val());
            $("[name=phone1]").val(selfPhone.val());
            $("[name=email1]").val(selfEmail.val());

            $.when(
                $.ajax({
                    type: "POST",
                    url: "phpfiles/send.php",
                    data: formData,
                    success: function(data) {
                        
                    }
                }),

                $.ajax({
                    type: "POST",
                    url: "phpfiles/sendwe.php",
                    data: formData,
                    success: function(data) {
                        
                    }
                })
            );
        });

        $("#bigForm").submit(function(e) {
            e.preventDefault();

            var self = $(this);
            var formData = self.serialize();

            $.ajax({
                type: "POST",
                url: "php/sendpresent.php",
                data: formData,
                success: function(data) {
                    location = "thanks.html";
                }
            });
        });
    }

    body.on("click", ".js-get-call", function(e) {
        e.preventDefault();

        $('.g-modal_get-call').fadeIn();
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

        window.location = "/";
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

