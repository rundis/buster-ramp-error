(function () {
    buster.testCase("besetningsIndividerServiceTest", {
        setUp: function () {
            this.module = myapp.mymodule;
        },

        "hello includes name": function() {
            buster.assert.equals("Hello dude", this.module.hello("dude"));
        }
        
    });
}());