module.exports = {
    viewports: [
        { width: 1280, height: 1024 },
        { width: 768, height: 1024 },
        { width: 480, height: 320 }
    ],

    environments: {
        current: 'http://www.vektklubb.no/',
        candidate: 'http://stage.vektklubb.no/'
    },

    css: {},

    pediff: {
        defaultTimeout: 15000,
        verbose: true,
        screenshotRoot: './img/',
        mismatchTolerance: 0.01,

        // Resemble.js settings
        outputSettings: {
            errorColor: { red: 0, green: 0, blue: 200 },
            // flat | movement | flatDifferenceIntensity | movementDifferenceIntensity
            errorType: 'flatDifferenceIntensity',
            transparency: 1,
            largeImageThreshold: 0
        }
    },

    output: {
        junit: true,
        json: true
    }
};
