var config = module.exports;

config["My tests"] = {
    environment: "browser", 
    sources: [
        "lib/**/*.js"      
    ],
    tests: [
        "test/*test.js"
    ]
};
