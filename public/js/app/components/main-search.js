/*
 * Vue: Home search component
 */

new Vue({

    el: '#search',
    data: {
        query: '',
        nodes: []
    },

    methods: {
        search: function(event) {
            if(event.keyCode === 27) this.query = '';
            if(this.query.length === 0) {
                this.nodes = [];
                $modal.fadeOut();
                $('#search').css('z-index', 1);
                return false;
            }
            $modal.fadeIn();
            $('#search').css('z-index', 3000);

            this.getResults();
        },
        getResults: function() {
            $('#search').find('.loading').delay(1000).show(0);
            this.$http.get('/api/v1/films/search', { query: this.query, take: 5 }, function(response) {
                this.nodes = response;
                $('#search').find('.loading').dequeue().hide(0);
            });
        }

    },

    computed: {
        minResults: function() {
            if(this.query.length != 0) {
                return true;
            }
        }
    }

});

$('.search-button').click(function() {
    $('#search').slideToggle(300, function() {
        $('#search-input').focus();
    });
});