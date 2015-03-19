module.exports = {
    config: {
        path: '',
        package: 'home'
    },
    execute: function(pediff, config) {
        pediff.screenshot('body');
    }
};
