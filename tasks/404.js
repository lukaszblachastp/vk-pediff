module.exports = {
    config: {
        path: '404',
        package: '404'
    },
    execute: function(pediff, config) {
        pediff.screenshot('body');
    }
};
