(function(window, document, $, Modernizr){
    "use strict";


    var transformProp = Modernizr.prefixed('transform');

    function Zoomer(){
        this.scrolled = 0;
        this.currentLevel = 0;
        this.levels = 4;
        this.distance3D = 1000;
        this.levelGuide = {
            "#web-dev" : 0,
            "#front-end": 1,
            "#css": 2,
            "#css3" : 3,
            "#transforms": 4
        };

    this.$window = $(window);
    this.$document = $(document);


    this.getScrollTransform = Modernizr.csstransforms3d ?
        this.getScroll3DTransform : this.getScroll2DTransform;


    if (Modernizr.csstransforms) {
    window.addEventListener( "scroll", this, false);
    }

    Zoomer.prototype.handleEvent = function(event) {
    if (this[event.type]){
    this[event.type](event);
         }
    };

    Zoomer.prototype.getScroll2DTransform = function(scroll){
    var scale = Math.pow( 3, scroll * (this.levels -1));
    return "scale(" + scale + ")";
    };

    Zoomer.prototype.getScroll3DTransform = function(scroll){
    var z = (scroll * (this.levels -1) * this.distance3D),
        leveledZ = this.distance3D / 2 - Math.abs((z % this.distance3D) - this.distance3d / 2),
        style;
    if (leveledZ < 5) {
    z = Math.round ( z / this.distance3D) * this.distance3d;

    }
    return 'translate3d(0, 0, ' + z + 'px)';
    };

    Zoomer.prototype.scroll = function (event) {

        this.scrolled = this.$window.scrollTop() / (this.$document.height() - this.$window.height());

        this. transformScroll(this.scrolled);

        this.currentLevel = Math.round(this.scrolled * (this.leveles-1));

        if (this.currentLevel !== this.previousLevel && this.$nav){
            this.$nav.find('.current').removeClass('current');
            if(this.currentLevel < 4){
            this.$nav.children()eq(this.currentLevel).addClass('current');
            }
            this.previousLevel = this.currentLevel;

        }

    };

    Zoomer.prototype.transformScroll = function(scroll){
        if(!this.$content){
         return;
        }

        var style = {};
        style[transformProp] = this.getScrollTransform(scroll);
        this.$content.css(style);
    };

    Zoomer.prototype.click = function (event) {

        var hash = event.target.hash || event.target.parentNode.hash,
            targetLevel = this.LevelGuide [hash],
            scroll = targetLevel / (this.levels-1);

        if(Modernizr.csstransitions){
        this.$content.addClass('transitions-on');
        this.$content[0].addEventListener('webkitTransistionEnd', this, false);
        this.$content[0].addEventListener('oTransitionEnd', this, false);
        this.$content[0].addEventListener('transitionend', this, false);
        }

        this.$window.scrollTop(scroll * (this.$document.height() - this.$window.height()));

        if (isIOS) {
        this.transformScroll( scroll);
    }
        event.preventDefault();
    };

    Zoomer.prototype.webkitTransitionEnd = function (event) {
        this.transsitionEnded (event);
    };

    Zoomer.prototype.transitioned = function (event){
    this.transitionEnded (event);
    };

    Zoomer.prototype.oTransitionEdn = function (event){
    this.transitionEnded (event);
    };

    Zoomer.prototype.transitionEnded = function (event) {
    this.$content.removeClass('transitions-on');
    this.$content[0].removeEventListener("webkitTransitionEnd", this, false);
    this.$content[0].removeEventListener('transitionend', this, false);
    this.$content[0].removeEventListener('oTransitionEnd', this, false);
    };

    $(function(){
    var BCXI = new Zoomer();
    BCXI.$content = $('#content');
    BCXI.$nav = $('#nav');

    var $body = $('body'),
        IOSclass = isIOS ? 'ios' : 'no-ios';

    $body.addClass(iOSclass);

    if(Zoomer.csstransforms){
    $('page-nav').each(function(){
    this.addEventListener('click', BCXI, false);
    });
    }










    //=================== trying with the tutorial code

// if (!Modernizr.csstransforms) {
//     return;
// }
//
// function Zoomer (content){
//     this.content = content;
//     this.scrolled = 0;
//     this.levels = 4;
//     this.docHeight = document.documentElement.offsetHeight;
//
// window.addEventListener('scroll', this, false);
//
// }
//
// Zoomer.prototype.scroll = function (event){
//     this.scrolled = window.scrollY / (this.docHeight -window.innerHeight);
//
//     var scale = Math.pow(3, this.scrolled * this.levels),
//         transformValue = 'scale('+scale+')';
//
//     this.content.style.WebkitTransform = transformValue;
//     this.content.style.MozTransform = transformValue;
//     this.content.style.OTransform = transformValue;
//     this.content.style.transform = transformValue;
// };
//
// function init(){
//     var content = document.getElementById("content"),
//         ZUI = new Zoomer(content);
//
// }
//
// window.addEventListener('DOMContentLoaded', init, false);
//
//
//     $("#front-end").click(function(){
//         $("#css").css("background-color", "yellow");
//     })

    // ================= trying manipulating the dom

    // $(window).scroll(function(){
    //     $("#web-dev").animate({fontSize: "2em"}, 8000);
    //     $("#front-end").animate({fontSize: "5em"}, 8000);
    //     $("#css").animate({fontSize: '10em'}, 8000);
    //     $("#css3").animate({fontSize: "12em"}, 8000);
    //     $("#transforms").animate({fontSize: "15em"}, 8000);
    // });


})(window, window.document, window.jQuery, window.Modernizr);