/*
 * Vue: User review component
 */

var characterLimit = 250;

new Vue({

    el: '.user-review',
    data: {
        review: "",
        count: characterLimit
    },

    methods: {
        update: function(e) {
            var remaining = characterLimit - this.review.length;
            this.count = characterLimit - this.review.length + " characters left";
            $('.character-count').css('color', '');
            if(remaining < 50) {
                // Make orange
                $('.character-count').css('color', '#f60');
                if(remaining < 10) {
                    // Make red
                    $('.character-count').css('color', '#f00');
                }
            }
        }
    },

    ready: function() {
        this.update();
    }

});

$('#user-review').focus(function() {
    $(this).css({ 'min-height': "150px" }, 500);
    $('.character-count').css({ 'opacity': 1 }, 500);
});