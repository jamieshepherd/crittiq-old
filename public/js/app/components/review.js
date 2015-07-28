var path = window.location.pathname;
var characterLimit = 250;

/*
 * Vue: User review component
 */

new Vue({

    el: '#review-content',
    data: {
        reviews: [],
        review: "",
        count: characterLimit,
        rangeCount: 5,
        filter: 'latest'
    },

    ready: function() {
        this.updateCounter();
        this.getReviews();
    },

    methods: {
        updateCounter: function() {
            this.count = characterLimit - this.review.length;
            $('.character-count').css('color', '');
            if(this.count < 50) {
                // Make orange
                $('.character-count').css('color', '#f60');
                if(this.count < 10) {
                    // Make red
                    $('.character-count').css('color', '#f00');
                }
            }
        },
        showActions: function() {
            $('#user-review').animate({ 'min-height': "220px" }, 300);
            $('.user-review-actions').fadeIn(300);
            $('.character-count').css({ 'opacity': 1 }, 300);
        },
        getReviews: function() {
            this.$http.get('/api/v1' + path + '/reviews', { filter: this.filter }, function(response) {
                this.reviews = response;
            });
        },
        sortBy: function(sortKey) {
            this.filter = sortKey;
            this.getReviews();
        },
        thumbsUp: function(id) {
            console.log("hey");
            console.log(id);
        }
    }

});
