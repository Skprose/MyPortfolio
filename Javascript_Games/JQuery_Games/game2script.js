$(document).ready(function(){
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

          $("#htchar1").on("click",function()
           {
             $(this).hide();
             if (mychar)
             {
                       $("#enemycharacter").attr("src",gl_imgarray[0]);
                       $('#characters').prop("disabled",true);
                       $("#ohealth").html("Opponent Health : "+ ar_health[0]);
                       $("#opower").html("Opponent Attach Power : "+ att_power[0]);
             }
             else {
                        $("#yourcharacter").attr("src",gl_imgarray[0]);
                        mychar = true;
                        mypower = att_power[0];
                        $("#ypower").html("Your Attach Power : "+ att_power[0]);
                        $("#yhealth").html("Your Health : "+ ar_health[0]);
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
              }
              else {
                         $("#yourcharacter").attr("src",gl_imgarray[1]);
                         mychar = true;
                         mypower = att_power[1];
                         $("#ypower").html("Your Attach Power : "+ att_power[1]);
                         $("#yhealth").html("Your Health : "+ ar_health[1]);;
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
               }
               else {
                          $("#yourcharacter").attr("src",gl_imgarray[2]);
                          mychar = true;
                          mypower = att_power[2];
                          $("#ypower").html("Your Attach Power : "+att_power[2]);
                          $("#yhealth").html("Your Health : "+ ar_health[2]);;
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
                }
                else {
                           $("#yourcharacter").attr("src",gl_imgarray[3]);
                           mychar = true;
                           mypower = att_power[3];
                           $("#ypower").html("Your Attach Power : "+ att_power[3]);
                          $("#yhealth").html("Your Health : "+ ar_health[3]);;
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
                 }
                 else {
                          $("#yourcharacter").attr("src",gl_imgarray[4]);
                          mychar = true;
                          mypower = att_power[4];
                         $("#yhealth").html("Your Health : "+ ar_health[4]);
                          $("#ypower").html("Your Attach Power : "+ att_power[4]);
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
                  }
                  else {
                           $("#yourcharacter").attr("src",gl_imgarray[5]);
                           mychar = true;
                           mypower = att_power[5];
                           $("#yhealth").html("Your Health : "+ ar_health[5]);
                           $("#ypower").html("Your Attach Power : "+ att_power[5]);

                  }
                })

              $("#attack").click(function(){

              })

});
