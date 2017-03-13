$(function() {

    $("#mainFullpage").fullpage({
        afterRender: function() {

            $('.sec1__auto').viewportChecker({
                classToAdd: '',
                classToAddForFullView: 'sec1__auto_show',
            });

            $('.sec2__img_auto').viewportChecker({
                classToAdd: 'sec2__img_move',
                classToAddForFullView: 'sec2__img_move',
            });
        },

        onLeave: function(index, nextIndex, direction) {

            if (nextIndex == 2) {
                $('.sec2__img_auto').addClass("sec2__img_move");
            }
            console.log(index)
        }
    });

    
    var demo = new CountUp("sec2__number", 0, 2000, 0, 2.5, {
        separator: ""
    });
    demo.start();

});

