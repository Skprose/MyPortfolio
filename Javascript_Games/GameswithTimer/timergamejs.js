

$(document).ready(function()
{
                //Global Variables
                var gamezoom = [];
                var unanswered = 0;
                var  answered = 0;
                var timeleft = 0;
                var count = 0;
                var gotit = 0;
                var lostit = 0;
                var t1 = 0; //timer
                var qno = 0;
                var rightanswer = 0;
                // just for first time
                $("#options").hide();
                $("#footersection").hide();
                console.log('hiding for first time');

                function reset()
                {
                             gamezoom = [
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

                             unanswered = 10;
                             answered = 0;
                             timeleft = 0;
                             count = 0;
                             gotit = 0;
                             lostit = 0;
                             qno = 0;
                             rightanswer = 0;
                             resultsfunction();
                             $("#options").show();
                             $("#footersection").show();
                             $("#startbutton").hide();
                             starttimer();
                             clockdisplay.clockset();
                             console.log('after call to start timer');
                }



                //function
                function display()
                {
                             var i = qno;
                             console.log(' i in if');
                             if ( parseInt(i) === parseInt(10) )
                             {
                               $("#question").text("Quiz Over!!");
                               console.log(' i in if'+i);
                               resultsfunction();
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

                function starttimer()
                {
                    t1 = setTimeout(timerout, 20000);

                }
                function resultsfunction()
                {

                  $("#options").hide();
                  result();
                  $("#startbutton").show();
                  $("#start").text("Restart Game");
                  $("#dispanswer").text(" ");
                  $("#yesno").text(" ");
                  clearInterval(t1);
                  clockdisplay.resetclock();
                }
                function timerout()
                {
                  $("#question").text("Time up!!");
                  console.log("hello in timerout function");
                  resultsfunction();
                }
                function rightanswerdisp()
                {
                         var text =  gamezoom[qno][rightanswer];
                         $("#dispanswer").html(text)
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
                      reset();

                      display();
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
                       $("#yesno").html("YES! you got it");
                       rightanswerdisp();
                     }
                     else {
                        lostit++;
                        $("#yesno").html("NO! missed it");
                        rightanswerdisp();
                        console.log('gotit',gotit);
                        console.log('lostit',lostit);
                     }
                });
                // To Display clock
                var clockdisplay =
                {
                    disptimer : 0,
                    timercount : 0,
                    clockset: function()
                    {
                        clockdisplay.disptimer = setInterval(clockdisplay.myclock,1000);
                       //displaytimer
                        clockdisplay.timercount = 0;
                        $("#htclock").text("00:00");
                    },
                    myclock: function ()
                    {
                      clockdisplay.timercount++;
                      var m = Math.floor(clockdisplay.timercount / 60);
                      var s = clockdisplay.timercount - (m * 60);
                      if ( s < 10)
                      {
                        s = "0" +s ; //this if section to make it appear as 2 digits00
                      }
                      if (( m < 10)||(m === 0))
                      {
                        m = '0'  + m ;
                      }
                      var str = m+":"+s ;
                      $("#htclock").text(str);
                    },
                    resetclock: function ()
                    {
                     //displaytimer
                      clockdisplay.timercount = 0;
                      clearInterval(clockdisplay.disptimer);

                    }
                }
});
