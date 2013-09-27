var myapp = this.myapp || {};

(function () {
    myapp.mymodule = function (my) {

        my.hello = function(name) {
            return "Hello " + name;
        };

        return my;
    }(myapp.mymodule || {});


}());