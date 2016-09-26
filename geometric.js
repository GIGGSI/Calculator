export class Geometric {

    constructor() {
         this.squareAreaResult = 0;
        this.triangleAreaResult = 0;
         this.rectangleAreaResult = 0;
        this.circleAreaResult = 0;
       
        this.parallelogramAreaResult = 0;
    }

    squareArea(a) {
        return this.squareAreaResult = a * a ;
    }
    triangleArea(base, height) {
        return this.triangleAreaResult = base * height / 2;
    }
    circleArea(radius) {
        const pi = 3.14;
        return this.circleAreaResult = pi * radius * radius;
    }

    rectangleArea(width, height) {
        return this.rectangleAreaResult = width * height;
    }
    parallelogramArea(base, verticalHeight) {
        return this.parallelogramAreaResult = base * verticalHeight;
    }
    getSquareAreaResult() {
        return this.squareAreaResult;
    }
    getTriangleAreaResult() {
        return this.triangleAreaResult;
    }
    getCircleAreaResult() {
        return this.circleAreaResult;
    }
    getRectangleAreaResult() {
        return this.rectangleAreaResult;
    }
    getParallelogramAreaResult() {
        return this.parallelogramAreaResult;
    }
    getResult() {
        return this.result;
    }
}