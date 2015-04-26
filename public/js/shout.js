/* initialize keyword recognition for shouting votes */

define(['gest'], function() {

    var shout = {
        init: function() {

            gest.start();
            gest.options.sensitivity(80);
            //gest.options.skinFilter(true);
        },
        subscribe: function(cb) {
            gest.options.subscribeWithCallback(function(e) {
                if (!e.direction)
                    return;
                //console.log(e.direction);
                switch(e.direction.toLowerCase()) {
                    case 'left':
                        cb('no');
                        break;
                    case 'right':
                        cb('yes');
                        break;
                }
            });
        }
    };
    return shout;
});
