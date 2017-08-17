 $(document).ready(function(){
          $(".defeated").hide();
          var gl_imgarray = {
            chara1: ['skywalk', './Resources/anskywalker.jpg'],
            chara2: ['c3po','./Resources/c3po.jpg'],
            chara3: ['dart','./Resources/dart.jpg'],
            chara4: ['yoda','./Resources/yoda.jpg'],
            chara5: ['mace','./Resources/mace.jpg'],
            chara6: ['storm','./Resources/storm.jpg']
          };
          var ar_health = [
            100,45,180,106,101,50
          ];
          var att_power = [23,15,25,24,21,10];
          var wincount = 0;
          var mychar = false;
          var mypower = 0;
          var opphealth = 0;
          var oppattack = 0;
          var myhealth = 0;
          var win = false;
          var nowplaying;
          var defeated = [];
          var mycharacter = '';
          console.log(gl_imgarray.length);
          console.log(gl_imgarray[2]);
          displaycharacters();


          $("#htchar1").on("click",function()
           {
             $(this).hide();
             if (mychar)
             {
                       $("#enemycharacter").attr("src",gl_imgarray.chara1[1]);
                       $('#characters').prop("disabled",true);
                       $("#ohealth").html("Opponent Health : "+ ar_health[0]);
                       $("#opower").html("Opponent Attach Power : "+ att_power[0]);
                       opphealth = ar_health[0];
                       oppattack = att_power[0];
                      nowplaying = gl_imgarray.chara1[0];
                       $("#htchar1").hide();
             }
             else {
                        $("#yourcharacter").attr("src",gl_imgarray.chara1[1]);
                        mychar = true;
                        mypower = att_power[0];
                        myhealth = ar_health[0];
                        $("#ypower").html("Your Attach Power : "+ att_power[0]);
                        $("#yhealth").html("Your Health : "+ ar_health[0]);
                        $("#instruct").html("Choose you Opponent to fight !!!");
                        mycharacter = gl_imgarray.chara1[0];
                        defeated[defeated.length] = gl_imgarray.chara1[0];
                        $("#htchar1").hide();
               }

           })
           $("#htchar2").on("click",function()
            {
              $(this).hide();
              if (mychar)
              {
                        $("#enemycharacter").attr("src",gl_imgarray.chara2[1]);
                        $('#characters').prop("disabled",true);
                        $("#ohealth").html("Opponent Health : "+ ar_health[1]);
                        $("#opower").html("Opponent Attach Power : "+ att_power[1]);
                        opphealth = ar_health[1];
                        oppattack = att_power[1];
                        nowplaying = gl_imgarray.chara2[0];
                         $("#htchar2").hide();
              }
              else {
                         $("#yourcharacter").attr("src",gl_imgarray.chara2[1]);
                         mychar = true;
                         mypower = att_power[1];
                         myhealth = ar_health[1];
                         $("#ypower").html("Your Attach Power : "+ att_power[1]);
                         $("#yhealth").html("Your Health : "+ ar_health[1]);
                         $("#instruct").html("Choose you Opponent to fight !!!");
                         mycharacter = gl_imgarray.chara2[0];
                         defeated[defeated.length] = gl_imgarray.chara2[0];
                         $("#htchar2").hide();
                }

            })
            $("#htchar3").on("click",function()
             {
               $(this).hide();
               if (mychar)
               {
                          $("#enemycharacter").attr("src",gl_imgarray.chara3[1]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[2]);
                          $("#opower").html("Opponent Attach Power : "+ att_power[2]);
                          opphealth = ar_health[2];
                          oppattack = att_power[2];
                          nowplaying = gl_imgarray.chara3[0];
                          $("#htchar3").hide();
               }
               else {
                          $("#yourcharacter").attr("src",gl_imgarray.chara3[1]);
                          mychar = true;
                          mypower = att_power[2];
                          myhealth = ar_health[2];
                          $("#ypower").html("Your Attach Power : "+att_power[2]);
                          $("#yhealth").html("Your Health : "+ ar_health[2]);
                          $("#instruct").html("Choose you Opponent to fight !!!");
                          mycharacter = gl_imgarray.chara3[0];
                          defeated[defeated.length] = gl_imgarray.chara3[0];
                          $("#htchar3").hide();
                 }

             })

             $("#htchar4").on("click",function()
              {
                $(this).hide();
                if (mychar)
                {
                          $("#enemycharacter").attr("src",gl_imgarray.chara4[1]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[3]);
                          $("#opower").html("Opponent Attach Power : "+ att_power[3]);
                          opphealth = ar_health[3];
                          oppattack = att_power[3];
                          nowplaying = gl_imgarray.chara4[0];
                          $("#htchar4").hide();
                }
                else {
                           $("#yourcharacter").attr("src",gl_imgarray.chara4[1]);
                           mychar = true;
                           mypower = att_power[3];
                           myhealth = ar_health[3];
                           $("#ypower").html("Your Attach Power : "+ att_power[3]);
                          $("#yhealth").html("Your Health : "+ ar_health[3]);
                          $("#instruct").html("Choose you Opponent to fight !!!");
                          mycharacter = gl_imgarray.chara4[0];
                          defeated[defeated.length] = gl_imgarray.chara4[0];
                          $("#htchar4").hide();
                  }

              })

              $("#htchar5").on("click",function()
               {
                 $(this).hide();
                 if (mychar)
                 {
                          $("#enemycharacter").attr("src",gl_imgarray.chara5[1]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[4]);
                         $("#opower").html("Opponent Attach Power : "+ att_power[4]);
                         opphealth = att_health[4];
                         oppattack = att_power[4];
                         nowplaying = gl_imgarray.chara5[0];
                         $("#htchar5").hide();
                 }
                 else {
                          $("#yourcharacter").attr("src",gl_imgarray.chara5[1]);
                          mychar = true;
                          mypower = att_power[4];
                          myhealth = ar_health[4];
                          $("#yhealth").html("Your Health : "+ ar_health[4]);
                          $("#ypower").html("Your Attach Power : "+ att_power[4]);
                          $("#instruct").html("Choose you Opponent to fight !!!");
                          mycharacter = gl_imgarray.chara5[0];
                          defeated[defeated.length] = gl_imgarray.chara5[0];
                           $("#htchar5").hide();
                 }
               })

               $("#htchar6").on("click",function()
                {
                  $(this).hide();
                  if (mychar)
                  {
                          $("#enemycharacter").attr("src",gl_imgarray.chara6[1]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[5]);
                         $("#opower").html("Opponent Attach Power : "+ att_power[5]);
                         opphealth = ar_health[5];
                         oppattack = att_power[5];
                         nowplaying = gl_imgarray.chara6[0];
                         $("htchar5").hide();
                  }
                  else {
                           $("#yourcharacter").attr("src",gl_imgarray.chara6[1]);
                           mychar = true;
                           mypower = att_power[5];
                           myhealth = ar_health[5];
                           $("#yhealth").html("Your Health : "+ ar_health[5]);
                           $("#ypower").html("Your Attach Power : "+ att_power[5]);
                           $("#instruct").html("Choose you Opponent to fight !!!");
                           mycharacter = gl_imgarray.chara6[0];
                           defeated[defeated.length] = gl_imgarray.chara6[0];
                            $("#htchar6").hide();
                  }
                })

              $("#attack").click(function()
              {
                        var att;
                        if (oppattack > mypower)
                        {
                               att = oppattack - mypower;
                               myhealth = myhealth - (att*2);
                               opphealth = opphealth - att;
                               mypower = mypower + parseInt(oppattack * (25 /100));
                        }
                        else {
                               att = mypower - oppattack;
                               myhealth = myhealth - att;
                               opphealth = opphealth - (att * 2);
                               mypower = mypower + parseInt(oppattack * (25 /100));
                        }

                        $("#yhealth").html("Your Health : "+ myhealth);
                        $("#ypower").html("Your Attach Power : "+ mypower);
                        $("#ohealth").html("Opponent Health : "+ opphealth);
                        $("#opower").html("Opponent Attach Power : "+ oppattack);
                         console.log('My healt : '+ myhealth + 'opphealth : '+ opphealth + 'oppattack : '+ oppattack);
                        if (( myhealth > 0) && (myhealth > opphealth) && (opphealth < 1))
                        {
                              $("#result").html('You Win!!!');
                              defeated[defeated.length] = nowplaying ;
                              $("#ohealth").html("Opponent Health : "+ ' ');
                              $("#opower").html("Opponent Attach Power : "+ '');
                              $("#instruct").html("Choose you Opponent to fight !!!");
                              $("#enemycharacter").attr("src","");
                                displaycharacters();
                        }
                        else if (( myhealth < 1) && (myhealth < opphealth) && (opphealth > 0))
                        {
                              $("#result").html('You Loose!!!');
                              $("#ohealth").html("Opponent Health : "+ ' ');
                              $("#opower").html("Opponent Attach Power : "+ '');
                              $("#instruct").html("Choose you Opponent to fight !!!");
                              $("#enemycharacter").attr("src","");
                                displaycharacters();
                        }
                        else if ((myhealth > opphealth) && (myhealth < 0))
                        {
                              $("#result").html('You Win!!!');
                              defeated[defeated.length] = nowplaying ;
                              $("#ohealth").html("Opponent Health : "+ ' ');
                              $("#opower").html("Opponent Attach Power : "+ '');
                              $("#instruct").html("Choose you Opponent to fight !!!");
                              $("#enemycharacter").attr("src","");
                                displaycharacters();
                        }
                        else if ((myhealth < opphealth) && (opphealth < 0))
                        {
                              $("#result").html('You Loose!!!');
                              $("#ohealth").html("Opponent Health : "+ ' ');
                              $("#opower").html("Opponent Attach Power : "+ '');
                              $("#instruct").html("Choose you Opponent to fight !!!");
                              $("#enemycharacter").attr("src","");
                                displaycharacters();
                        }



              })

              function displaycharacters()
              {

                  if ( defeated.includes(gl_imgarray.chara1[0]))
                  {
                    console.log(gl_imgarray.chara1[0] +'is defeated');
                    console.log(defeated.includes(gl_imgarray.chara1[0]));
                    wincount++;
                  }
                  else {
                    $("#htchar1").attr("src",gl_imgarray.chara1[1]);

                  }
                  if ( defeated.includes(gl_imgarray.chara2[0]))
                  {
                    console.log(gl_imgarray.chara2[0] +'is defeated');
                    console.log(defeated.includes(gl_imgarray.chara2[0]));
                    wincount++;
                  }
                  else {
                    $("#htchar2").attr("src",gl_imgarray.chara2[1]);

                  }
                  if ( defeated.includes(gl_imgarray.chara3[0]))
                  {
                    wincount++;
                    console.log(gl_imgarray.chara3[0] +'is defeated');
                    console.console.log(defeated.includes(gl_imgarray.chara3[0]));
                  }
                  else {
                    $("#htchar3").attr("src",gl_imgarray.chara3[1]);
                   }
                  if ( defeated.includes(gl_imgarray.chara4[0]))
                  {
                          wincount++;
                          console.log(defeated.includes(gl_imgarray.chara4[0]));
                          console.log(gl_imgarray.chara4[0] +'is defeated');
                  }
                  else {
                          $("#htchar4").attr("src",gl_imgarray.chara4[1]);
                  }
                  if ( defeated.includes(gl_imgarray.chara5[0]))
                  {
                          wincount++;
                          console.console.log(defeated.includes(gl_imgarray.chara5[0]));
                          console.log(gl_imgarray.chara5[0] +'is defeated');
                  }
                  else {
                          $("#htchar5").attr("src",gl_imgarray.chara5[1]);

                  }
                  if ( defeated.includes(gl_imgarray.chara6[0]))
                  {
                        console.log(defeated.includes(gl_imgarray.chara6[0]));
                          wincount++;
                          console.log(gl_imgarray.chara6[0] +'is defeated');
                  }
                  else {
                          $("#htchar6").attr("src",gl_imgarray.chara6[1]);
                  }
                  /*for ( var i = 1; (i < 7) ; i++)
                  {
                      var idgen = "#"+"htchar"+(i);
                      $(idgen).attr("src",gl_imgarray.'chara'+i[1]);
                  }*/
                  if ( wincount >6)
                  {
                    $("#result").html("....You Conquered...")
                  }
              }

              function gamecont()
              {

                          if (win)
                          {
                              $(instruct).html('Choose your next Opponent');
                          }
              }

});
