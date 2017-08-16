 $(document).ready(function(){
          $(".defeated").hide();
          var gl_imgarray = [
            './Resources/anskywalker.jpg',
            './Resources/c3po.jpg',
            './Resources/dart.jpg',
            './Resources/yoda.jpg',
            './Resources/mace.jpg',
            './Resources/storm.jpg'
          ];
          var ar_health = [
            100,45,180,106,101,50
          ];
          var att_power = [23,15,25,24,21,10];

          var mychar = false;
          var mypower = 0;
          var opphealth = 0;
          var oppattack = 0;
          var myhealth = 0;
          var win = false;
          var nowplaying;
          var defeated = [];
          var mycharacter = '';

          $("#htchar1").on("click",function()
           {
             $(this).hide();
             if (mychar)
             {
                       $("#enemycharacter").attr("src",gl_imgarray[0]);
                       $('#characters').prop("disabled",true);
                       $("#ohealth").html("Opponent Health : "+ ar_health[0]);
                       $("#opower").html("Opponent Attach Power : "+ att_power[0]);
                       opphealth = ar_health[0];
                       oppattack = att_power[0];
                      nowplaying = gl_imgarray[0];
                       $(".characters").hide();
             }
             else {
                        $("#yourcharacter").attr("src",gl_imgarray[0]);
                        mychar = true;
                        mypower = att_power[0];
                        myhealth = ar_health[0];
                        $("#ypower").html("Your Attach Power : "+ att_power[0]);
                        $("#yhealth").html("Your Health : "+ ar_health[0]);
                        $("#instruct").html("Choose you Opponent to fight !!!");
                        mycharacter = gl_imgarray[0];
               }

           })
           $("#htchar2").on("click",function()
            {
              $(this).hide();
              if (mychar)
              {
                        $("#enemycharacter").attr("src",gl_imgarray[1]);
                        $('#characters').prop("disabled",true);
                        $("#ohealth").html("Opponent Health : "+ ar_health[1]);
                        $("#opower").html("Opponent Attach Power : "+ att_power[1]);
                        opphealth = ar_health[1];
                        oppattack = att_power[1];
                        nowplaying = gl_imgarray[1];
                        $(".characters").hide();
              }
              else {
                         $("#yourcharacter").attr("src",gl_imgarray[1]);
                         mychar = true;
                         mypower = att_power[1];
                         myhealth = ar_health[1];
                         $("#ypower").html("Your Attach Power : "+ att_power[1]);
                         $("#yhealth").html("Your Health : "+ ar_health[1]);
                         $("#instruct").html("Choose you Opponent to fight !!!");
                         mycharacter = gl_imgarray[1];
                }

            })
            $("#htchar3").on("click",function()
             {
               $(this).hide();
               if (mychar)
               {
                          $("#enemycharacter").attr("src",gl_imgarray[2]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[2]);
                          $("#opower").html("Opponent Attach Power : "+ att_power[2]);
                          opphealth = ar_health[2];
                          oppattack = att_power[2];
                          nowplaying = gl_imgarray[2];
                          $(".characters").hide();
               }
               else {
                          $("#yourcharacter").attr("src",gl_imgarray[2]);
                          mychar = true;
                          mypower = att_power[2];
                          myhealth = ar_health[2];
                          $("#ypower").html("Your Attach Power : "+att_power[2]);
                          $("#yhealth").html("Your Health : "+ ar_health[2]);
                          $("#instruct").html("Choose you Opponent to fight !!!");
                          mycharacter = gl_imgarray[2];
                 }

             })

             $("#htchar4").on("click",function()
              {
                $(this).hide();
                if (mychar)
                {
                          $("#enemycharacter").attr("src",gl_imgarray[3]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[3]);
                          $("#opower").html("Opponent Attach Power : "+ att_power[3]);
                          opphealth = ar_health[3];
                          oppattack = att_power[3];
                          nowplaying = gl_imgarray[3];
                          $(".characters").hide();
                }
                else {
                           $("#yourcharacter").attr("src",gl_imgarray[3]);
                           mychar = true;
                           mypower = att_power[3];
                           myhealth = ar_health[3];
                           $("#ypower").html("Your Attach Power : "+ att_power[3]);
                          $("#yhealth").html("Your Health : "+ ar_health[3]);
                          $("#instruct").html("Choose you Opponent to fight !!!");
                          mycharacter = gl_imgarray[3];
                  }

              })

              $("#htchar5").on("click",function()
               {
                 $(this).hide();
                 if (mychar)
                 {
                          $("#enemycharacter").attr("src",gl_imgarray[4]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[4]);
                         $("#opower").html("Opponent Attach Power : "+ att_power[4]);
                         opphealth = att_health[4];
                         oppattack = att_power[4];
                         nowplaying = gl_imgarray[4];
                         $(".characters").hide();
                 }
                 else {
                          $("#yourcharacter").attr("src",gl_imgarray[4]);
                          mychar = true;
                          mypower = att_power[4];
                          myhealth = ar_health[4];
                          $("#yhealth").html("Your Health : "+ ar_health[4]);
                          $("#ypower").html("Your Attach Power : "+ att_power[4]);
                          $("#instruct").html("Choose you Opponent to fight !!!");
                          mycharacter = gl_imgarray[4];
                 }
               })

               $("#htchar6").on("click",function()
                {
                  $(this).hide();
                  if (mychar)
                  {
                          $("#enemycharacter").attr("src",gl_imgarray[5]);
                          $('#characters').prop("disabled",true);
                          $("#ohealth").html("Opponent Health : "+ ar_health[5]);
                         $("#opower").html("Opponent Attach Power : "+ att_power[5]);
                         opphealth = ar_health[5];
                         oppattack = att_power[5];
                         nowplaying = gl_imgarray[4];
                         $(".characters").hide();
                  }
                  else {
                           $("#yourcharacter").attr("src",gl_imgarray[5]);
                           mychar = true;
                           mypower = att_power[5];
                           myhealth = ar_health[5];
                           $("#yhealth").html("Your Health : "+ ar_health[5]);
                           $("#ypower").html("Your Attach Power : "+ att_power[5]);
                           $("#instruct").html("Choose you Opponent to fight !!!");
                           mycharacter = gl_imgarray[5];
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
                              win = true;

                              $("#instruct").html("Choose you Opponent to fight !!!");
                              defeated[defeated.length - 1] = '';
                              $(".characters").show();
                                gamecont();

                        }
                        else if (( myhealth < 1) && (myhealth < opphealth) && (opphealth > 0))
                        {
                              $("#result").html('You Loose!!!');
                              win = false;
                              gamecont();
                        }
              })

              function gamecont()
              {

                          if (win)
                          {
                              $(instruct).html('Choose your next Opponent');
                          }
              }

});
