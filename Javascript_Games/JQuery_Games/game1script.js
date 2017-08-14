

 $(document).ready(function()
{
      console.log('In Java script');
      var totalvalue = 0;
      var gem1 = 0;
      var gem2 = 0;
      var gem3 = 0;
      var gem4 = 0;
      var score = 0;
      var win = 0;
      var loss = 0;
      var round = 0;

      nextround();


                 $("#htgem1").on("click",function(){
                   $("#htscore").append(gem1 + " +   ");
                   score = score + gem1;
                    $("#httot").html('You have collected Gemstone worth : ' + score);
                    console.log('score '+ score);
                    checkscore();
                 })
                 $("#htgem2").on("click",function(){
                   console.log('inside');
                   $("#htscore").append(gem2 + " + ");
                   score = score + gem2;
                    $("#httot").html('You have collected Gemstone worth : ' + score);
                    console.log('score '+ score);
                    checkscore();
                 })
                 $("#htgem3").on("click",function(){
                   $("#htscore").append(gem3 + " + ");
                   score = score + gem3;
                    $("#httot").html('You have collected Gemstone worth : '+ score);
                    console.log('score '+ score);
                    checkscore();
                 })
                 $("#htgem4").on("click",function(){
                   $("#htscore").append(gem4 + " + ");
                   score = score + gem4;
                    $("#httot").html('You have collected Gemstone worth : '+ score);
                    console.log('score '+ score);
                    checkscore();
               })


       function checkscore()
       {
           if ( score === totalvalue )
           {
                 win++;
                 $("#htwin").html('Wins : '+win);
                   console.log('Score is equal value')
                   nextround();
           }
           else if ( score > totalvalue)
           {
                 loss++
                 console.log('loss :'+loss);
                 $("#htloss").html('Losses : '+loss);
                 var diff = score - totalvalue;
                 $("#htcomment").html("You collected Gem Stone worth "+diff+ " more!!!");
                 nextround();
             }
            else {
                  var diff = totalvalue - score;
                  $("#htcomment").html("You need to collect Gem Stone worth "+diff+ " more!!!");
            }
       }

       function nextround()
       {

              score = 0;
              gem1 = parseInt(Math.random() * 100);
              gem2 = parseInt(Math.random() * 100);
              gem3 = parseInt(Math.random() * 100);
              gem4 = parseInt(Math.random() * 100);

              totalvalue =(gem1*2) + (gem2 *3)+ (gem3 *3 )+ (gem4 *2);
              round++;

              $("#htround").html('<h3>Round : '+ round + '</h3>');
              $("#httotal").html(totalvalue);
              $("#htscore").html("  ");
              $("#htcomment").html(" ");
               $("#httot").html(" ");

       }
});
