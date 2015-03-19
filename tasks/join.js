module.exports = {
    config: {
        path: 'bli/medlem',
        package: 'join',
        actions: ['bmi-over-40', 'bmi-under-20', '3-months', '6-months', '12-months']
    },
    execute: function(pediff, config) {
        pediff.screenshot('body');

        // BMI over 40
        casper.fill('#bmiWidgetForm', {
            height: 180,
            weight: 130,
            new_weight: 100
        }, true);
        pediff.screenshot('body', config.actions[0]);

        // BMI under 20
        casper.fill('#bmiWidgetForm', {
            height: 180,
            weight: 60,
            new_weight: 59
        }, true);
        pediff.screenshot('body', config.actions[1]);

        // 3 months subscription
        casper.fill('#bmiWidgetForm', {
            height: 180,
            weight: 80,
            new_weight: 70
        }, true);
        pediff.screenshot('body', config.actions[2]);

        // 6 months subscription
        casper.fill('#bmiWidgetForm', {
            height: 180,
            weight: 100,
            new_weight: 70
        }, true);
        pediff.screenshot('body', config.actions[3]);

        // 12 months subscription
        casper.fill('#bmiWidgetForm', {
            height: 180,
            weight: 120,
            new_weight: 70
        }, true);
        pediff.screenshot('body', config.actions[4]);
    }
};
