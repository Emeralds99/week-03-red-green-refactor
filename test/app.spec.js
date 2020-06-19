const assert = require('assert');

const app = require('../app.js');

describe('Vehicle Rating Calculator', function () {
    it('calculates a rating of 10 for a vehicle with 4 cylinders and diesel fuel', function () {
        const smallCar = app.smallCar;
        const smallTruck = app.smallTruck;
        const smallCarRating = app.calculateVehicleRating(smallCar);
        const smallTruckRating = app.calculateVehicleRating(smallTruck);
        assert.equal(smallCarRating, 10);
    });

    it('calculates a rating of 8 for a vehicle with 8 cylinders and diesel fuel', function () {
        const smallCar = app.smallCar;
        const smallTruck = app.smallTruck;
        const smallCarRating = app.calculateVehicleRating(smallCar);
        const smallTruckRating = app.calculateVehicleRating(smallTruck);
        assert.equal(smallTruckRating, 8);
    });

});