$(document).ready(function(){
        //Global Variables
        var game = {
            q1:{details:[' Length * width is the forumal for...','Area of Square','Area of Rectangle','Perimeter of Square','Perimeter of Rectangle',2]},
            q2:{details:['{a^2} is the formula for...','Area of Square','Area of Rectangle','Perimeter of Square','Perimeter of Rectangle',2]},
            q3:{details:['(h/2(b1+b2)) is the formula for... ','Area of a Trapezoid','Area of Polygon','Area of Rectangle','Area of Square',1]},
            q4:{details:['(Length * width) is the formula for...','Area of parallelogram ','Area of Ellipse','Area of Equilateral Triangle','Area of triangle',1]},
            q5:{details:['(pi * r1 * r2) is the formula for...','Area of Trapezoid','Area of Ellipse','Area of Equliateral Triangle','Area of a Circle',2]},
            q6:{details:['(pi * r^2) is the formula for..','Area of Square','Perimeter of Rectangle','Area of Triangle','Area of Circle',3]},
            q7:{details:['(3*sides) is the formula for...','Perimeter of a Square','Perimeter of a Rectangle','Perimeter of a Triangle','Perimeter of a Equilateral Triangle',4]},
            q8:{details:['(4a) is the formula for(a is the side) ...','Perimeter of a Square','Perimeter of a Rectangle','Perimeter of Triangle','Area of a trapezoid',1]},
            q9:{details:['(a+2b) is the formula for...','Perimeter of a Square','Perimeter of a Isoceles Triangle','Perimeter of a Triangle','Perimeter of a trapezoid',3]},
            q10:{details:['(ba /2) is the formula for ','Area of Square','Area of Rectangle','Are of Right Triangle','Area of trapezoid',3]},
        }
        var  unanswered = 0, answered = 0,totalQ = 0,score = 0, timeleft = 0;
        var count = 0;
        var t1;

        //functions
        function display()
        {

        }
        function results()
        {

        }
       // Main Program
       //Start button
       $("#start").on("click",function(){
         $("question").html = game.
       });
})
