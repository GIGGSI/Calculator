import { Arithmetics } from 'arithmetics.js';
import { Geometric } from 'geometric.js';
import { Perimeter } from 'perimeter.js';


import { readline, rl } from 'readline.js';


var arithmetics = new Arithmetics();
var geometric = new Geometric();
var perimeter = new Perimeter();

function Calculator() {

    function operation() {

        rl.question(
            `       
    To start Simple calculator enter 's':

                +: add,
                -: subtraction,
                *: multiply,
                /: divide,
                o: start menu,
                x: exit,
            
    To start Geometric calculator enter 'g':

                c: Square ,
                t: Triangle ,
                r: Rectangle ,
                p: Parallelogram,
                l: Circle,
                o: start menu,
                x: exit,

                `,
            function (answer) {
                if (answer == 's') {
                    return startCalculator(answer);
                } else if (answer == 'g') {
                    return geometricsCalculator();
                }
            });
    }

    function startCalculator(answer) {
        rl.question('Choose a number: ', function (number) {
            arithmetics.giveResult(+number);
            rl.question('Chose a operation: ', function (answer) {
                return arithmeticsCalculator(answer);
            });
        });
    }

    function arithmeticsCalculator(answer) {

        switch (answer) {
            case '+':
            {

                rl.question('Enter your number: ', function (number) {
                    arithmetics.add(+number);
                    console.log('The result is: ', arithmetics.getResult());
                    rl.question('Enter an operation: ', function (answer) {
                        arithmeticsCalculator(answer);
                    });
                });
            }
                break;
            case '-':
            {
                rl.question('Enter your number: ', function (number) {
                    arithmetics.subtraction(+number);
                    if ( arithmetics.getResult() == 0){
                        return arithmetics.getResult();
                    }
                    console.log('The result is: ', arithmetics.getResult());
                    rl.question('Enter an operation: ', function (answer) {
                        arithmeticsCalculator(answer);
                    });
                });
            }
                break;

            case '*':
            {
                rl.question('Enter your number: ', function (number) {
                    arithmetics.multiply(+number);
                    if (arithmetics.getResult() == NaN) {
                        return 0 ;
                    }
                    console.log('The result is: ', arithmetics.getResult());
                    rl.question('Enter an operation: ', function (answer) {
                        arithmeticsCalculator(answer);
                    });
                });
            }
                break;

            case '/':
            {
                rl.question('Enter your number: ', function (number) {
                    arithmetics.divide(+number);
                    if (arithmetics.getResult() == Infinity) {
                        console.log('The result is: ', 'Cannot divide by zero. Please go back. ');
                    } else {
                        console.log('The result is: ', arithmetics.getResult());
                    }

                    rl.question('Enter an operation: ', function (answer) {
                        arithmeticsCalculator(answer);
                    });
                });
            }
                break;
            case 'o':
            {
                return Calculator();

            }
            case 'x':
            {
                rl.close();

            }
                break;
            default:
                console.log('Error');
        }
    }

    function geometricsCalculator() {
        rl.question('Choose geometric form: \n : ', function (answer) {

            switch (answer) {
                case 'c':
                {
                    square();

                }
                    break;

                case 't':
                {
                    triangle();

                }
                    break;
                case 'r':
                {

                    rectangle();

                }
                    break;
                case 'p':
                {

                    parallelograms();

                }
                    break;
                case 'l':
                {

                    circle();

                }
                    break;

                case 'o':
                {
                    Calculator();

                }
                    break;
                case 'x':
                {
                    rl.close();

                }
                    break;
                default:
                    console.log('Error');
            }

        });

    }

    operation();
    geometricsCalculator();
}

Calculator();


//square perimeter and areas

function square() {
    rl.question('If you want to check the Square Area push: (v) or Square Perimeter (k): ',
        function (answer) {
            if (answer == 'v') {
                return squareAreas();
            } else {
                return squarePerimeters();
            }
        });
}

function squareAreas() {
    rl.question('Enter the length of side: ', function (number) {
        geometric.squareArea(+number);
        console.log('The area of the Square is: ', geometric.getSquareAreaResult());
        rl.question('Find the area of Square again?: (yes) or go back: (b): ', function (answer) {
            if (answer == 'yes') {
                squareAreas();
            } else {
                Calculator();
            }
        });
    });
}
function squarePerimeters() {
    rl.question('Enter the length of side: ', function (number) {
        perimeter.squarePerimeter(+number);
        console.log('The perimeter of the Square is: ', perimeter.getSquarePerimeterResult());
        rl.question('Find the perimeter of Square again?: (yes)  or go back: (b): ',
            function (answer) {
                if (answer == 'yes') {
                    squarePerimeters();
                } else {
                    Calculator();
                }
            });
    });
}


//triangle perimeter and areaas

function triangle() {
    rl.question('If you want to check the Triangle Area push: (v) or Triangle Perimeter (k): ',
        function (answer) {
            if (answer == 'v') {
                triangleAreas();
            } else {
                trianglePerimeters();
            }
        });
}
function triangleAreas() {
    rl.question('Enter the base: ', function (base) {
        rl.question('Enter the height: ', function (height) {
            geometric.triangleArea(+base, +height);
            console.log('The area of Triangle is: ', geometric.getTriangleAreaResult());
            rl.question('Find the area of Triangle again?: (yes) or go back: (b): ',
                function (answer) {
                    if (answer == 'yes') {
                        triangleAreas();
                    } else {
                        Calculator();
                    }
                });
        });
    });
}


function trianglePerimeters() {
    rl.question('Enter the a: ', function (a) {
        rl.question('Enter the b: ', function (b) {
            rl.question('Enter the c: ', function (c) {
                perimeter.trianglePerimeter(+a, +b, +c);
                console.log('The perimeter of Triangle is: ', perimeter.getTrianglePerimeterResult());
                rl.question('Find the perimeter of Triangle again?: (yes) or go back: (b): ',
                    function (answer) {
                        if (answer == 'yes') {
                            trianglePerimeters();
                        } else {
                            Calculator();
                        }
                    });
            });
        });
    });
}


//parallelogram perimeters and areas


function parallelograms() {
    rl.question('If you want to check the Parallelogram Area push: (v) or Parallelogram Perimeter (k): ' ,
        function (answer) {
            if (answer == 'v') {
                parallelogramAreas();
            } else {
                parallelogramPerimeters();
            }
        });
}


function parallelogramAreas() {
    rl.question('Enter the Base: ', function (base) {
        rl.question('Enter the Vertical Height: ', function (verticalHeight) {
            geometric.parallelogramArea(base, verticalHeight);
            console.log('The area of Parallelogram is: ', geometric.getParallelogramAreaResult());
            rl.question('Find the area of Parallelogram again?: (yes) or go back: (b): ',
                function (answer) {
                    if (answer == 'yes') {
                        parallelogramAreas();
                    } else {
                        Calculator();
                    }
                });
        });
    });
}
function parallelogramPerimeters() {
    rl.question('Enter the width: ', function (width) {
        rl.question('Enter the height:', function (height) {
            perimeter.parallelogramPerimeter(+width, +height);
            console.log('The perimeter of Parallelogram is: ', perimeter.getParallelogramPerimeterResult());
            rl.question('Find the perimeter of Parallelogram again?: (yes) or go back: (b): ',
                function (answer) {
                    if (answer == 'yes') {
                        parallelogramPerimeters();
                    } else {
                        Calculator();
                    }
                });
        });
    });

}
//circle  perimeters and areas

function circle() {
    rl.question('If you want to check the Circle Area push: (v) or Circle Perimeter (k): ',
        function (answer) {
            if (answer == 'v') {
                circleAreas();
            } else {
                circlePerimeters();
            }
        });
}

function circleAreas() {
    rl.question('Enter the radius: ', function (radius) {
        geometric.circleArea(radius);
        console.log('The area of Circle is: ', geometric.getCircleAreaResult());
        rl.question('Find the area of Circle again?: (yes) or go back: (b): ',
            function (answer) {
                if (answer == 'yes') {
                    circleAreas();
                } else {
                    Calculator();
                }
            });
    });
}

function circlePerimeters() {
    rl.question('Enter the radius: ', function (radius) {
        perimeter.circlePerimeter(radius);
        console.log('The perimeter of Circle is: ', perimeter.getCirclePerimeterResult());
        rl.question('Find the perimeter of Circle again?: (yes) or go back: (b): ',
            function (answer) {
                if (answer == 'yes') {
                    circlePerimeters();
                } else {
                    Calculator();
                }
            });
    });
}


// rectangle perimeter and area


function rectangle() {
    rl.question('If you want to check the Rectangle Area push: (v) or Rectangle Perimeter (k): ',
        function (answer) {
            if (answer == 'v') {
                rectangleAreas();
            } else {
                rectanglePerimeters();
            }
        });
}

function rectangleAreas() {
    rl.question('Enter the width: ', function (width) {
        rl.question('Enter the height: ', function (height) {
            geometric.rectangleArea(width, height);
            console.log('The area of Rectangle is: ', geometric.getRectangleAreaResult());
            rl.question('Find the area of Rectangle again?: (yes) or go back: (b): ',
                function (answer) {
                    if (answer == 'yes') {
                        rectangleAreas();
                    } else {
                        Calculator();
                    }
                });
        });
    });
}

function rectanglePerimeters() {
    rl.question('Enter the width: ', function (width) {
        rl.question('Enter the height: ', function (height) {
            perimeter.rectanglePerimeter(+width, +height);
            console.log('The perimeter of Rectangle is: ', perimeter.getRectanglePerimeterResult());
            rl.question('Find the are of Rectangle again?: (yes) or go back: (b): ',
                function (answer) {
                    if (answer == 'yes') {
                        rectanglePerimeters();
                    } else {
                        Calculator();
                    }
                });
        });
    });

}