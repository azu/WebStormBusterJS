buster.testCase("testCase Context", {
    "exception test": function () {
        var a = 1,b =2;

        throw new Error();

        refute.equal(a, b);
    }
});