export class Perimeter {


    constructor() {
        this.squarePerimeterResult = 0;
        this.trianglePerimeterResult = 0;
        this.circlePerimeterResult = 0;
        this.rectanglePerimeterResult = 0;
        this.parallelogramPerimeterResult = 0;
    }
    squarePerimeter(s) {
        return this.squarePerimeterResult =  s * 4 ;
    }
    trianglePerimeter(a, b, c) {
        return this.trianglePerimeterResult = a + b + c;
    }
    circlePerimeter(radius) {
        const pi = 3.14;
        return this.circlePerimeterResult = pi * radius * 2;
    }
    rectanglePerimeter(width, height) {
        return this.rectanglePerimeterResult = (width + height)*2;
    }
    parallelogramPerimeter(width, height) {
        return this.parallelogramAreaResult = (width + height)*2;
    }


    getSquarePerimeterResult() {
        return this.squarePerimeterResult;
    }
    getTrianglePerimeterResult() {
        return this.trianglePerimeterResult;
    }
    getCirclePerimeterResult() {
        return this.circlePerimeterResult;
    }
    getRectanglePerimeterResult() {
        return this.rectanglePerimeterResult;
    }
    getParallelogramPerimeterResult() {
        return this.parallelogramAreaResult;
    }

}
