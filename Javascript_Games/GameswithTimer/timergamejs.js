

$(document).ready(function()
{
                //Global Variables
                var gamezoom = [
                  ['(Length * width) is the forumal for...','Area of Square','Area of Rectangle','Perimeter of Square','Perimeter of Rectangle',2] ,
                  ['{a^2} is the formula for...','Area of Square','Area of Rectangle','Perimeter of Square','Perimeter of Rectangle',2],
                  ['(h/2(b1+b2)) is the formula for... ','Area of a Trapezoid','Area of Polygon','Area of Rectangle','Area of Square',1],
                  ['(Length * width) is the formula for...','Area of parallelogram ','Area of Ellipse','Area of Equilateral Triangle','Area of triangle',1],
                  ['(pi * r1 * r2) is the formula for...','Area of Trapezoid','Area of Ellipse','Area of Equliateral Triangle','Area of a Circle',2],
                  ['(pi * r^2) is the formula for..','Area of Square','Perimeter of Rectangle','Area of Triangle','Area of Circle',4],
                  ['(3*sides) is the formula for...','Perimeter of a Square','Perimeter of a Rectangle','Perimeter of a Triangle','Perimeter of a Equilateral Triangle',4],
                  ['(4a) is the formula for(a is the side) ...','Perimeter of a Square','Perimeter of a Rectangle','Perimeter of Triangle','Area of a trapezoid',1],
                  ['(a+2b) is the formula for...','Perimeter of a Square','Perimeter of a Isoceles Triangle','Perimeter of a Triangle','Perimeter of a trapezoid',3],
                  ['(ba /2) is the formula for ','Area of Square','Area of Rectangle','Are of Right Triangle','Area of trapezoid',3],
                ];

                var unanswered = 10, answered = 0,timeleft = 0;
                var count = 0, gotit = 0, lostit = 0;
                var t1 = 0,qno = 0, rightanswer = 0;
                var getsubscript;
                var len = gamezoom.length;
                console.log('len of game'+len);

                //function
                function display()
                {
                             var i = qno;
                             console.log(' i in if');
                             if ( i == 10 )
                             {
                               result();
                               console.log(' i in if'+i);
                             }
                            else
                             {
                               console.log(' i in else'+i);
                               rightanswer = gamezoom[i][5];
                               $("#question").html(gamezoom[i][0]);
                               $("#one").text(gamezoom[i][1]);
                               $("#two").text(gamezoom[i][2]);
                               $("#three").text(gamezoom[i][3]);
                               $("#four").text(gamezoom[i][4]);
                             }
                 }

                    function dynamiele()
                    {

                     var opt1button = $('<button>');
                     var opt2button = $('<button>');
                     var opt3button = $('<button>');
                     var opt4button = $('<button>');
                     opt1button.text(gamezoom[i][1]);
                       opt2button.text(gamezoom[i][2]);
                       opt3button.text(gamezoom[i][3]);
                       opt4button.text(gamezoom[i][4]);
                       opt1button.attr('value',1);
                       opt2button.attr('value',2);
                       opt3button.attr('value',3);
                       opt4button.attr('value',4);
                       opt1button.attr('id','one');
                       opt1button.addClass('btn-primary btn-block answer');
                       opt2button.addClass('btn-info btn-block answer');
                       opt3button.addClass('btn-primary btn-block answer');
                       opt4button.addClass('btn-info btn-block answer');
                       $("#options").html(opt1button);
                       $("#options").append(opt2button);
                       $("#options").append(opt3button);
                       $("#options").append(opt4button);
                     }



                function starttimer()
                {
                    t1 = setTimeout(resultsfunction, 15000);

                }
                function resultsfunction()
                {
                  console.log("hello in timeup function");
                  $(".answer").attr(disable,true);
                  $("#question").text("Time up!!");
                }
                function rightanswerdisp()
                {
                         $("#dispanswer").html()
                         qno++;
                         result();
                         display();
                }
                function result()
                {
                      $("#answeredqs").html(answered);
                      $("#right").html(gotit);
                      $("#unaswqs").html(lostit);
                }
                //Main Program
                //display();

                $("#start").on("click", function ()
                {
                      display();
                      starttimer();
                      $("#totalqs").html("10");
                      console.log('inside start');
                });

                $(".answer").on("click",function ()
                {
                    console.log('in button click for options');
                     //console.log(`${this}`);

                     var entry = $(this).val().trim();
                    console.log('entry',entry);
                    console.log('right answer',rightanswer);
                     answered++;
                     unanswered--;
                     if ( parseInt(entry) === parseInt(rightanswer))
                     {
                       gotit++;
                       $("#yesno").html = "YES";
                       rightanswerdisp();
                     }
                     else {
                        lostit++;
                        $("#yesno").html = "NO";
                        rightanswerdisp();
                        console.log('gotit',gotit);
                        console.log('lostit',lostit);
                     }
                });
});
