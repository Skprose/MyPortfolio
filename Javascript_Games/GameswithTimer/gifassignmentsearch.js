
//global Variables
var gl_items = ['Ganapati','Fire works','Stars','Programming','Peacocks','Flammmingo'];
var gl_imgvidurl = [];
var gl_imgurl = [];
var gl_searchfor = [];


//dynamically add form elements
function dynamicadd()
{
        var divele = $("<div>");
        divele.addClass("optionsdiv");

        for ( var i =0; i < gl_items.length ; i++)
        {

          var  additem = (`<input id = "${i}option"
          class = "optionvalue" name ="name${i}"
          type = "checkbox"
          value = "${gl_items[i]}" > ${gl_items[i]}<br />`);
          //divele.append(string);
            $("#First-form").append(additem);
        }

}


function callapigifvid(searchstr)
{
      //Api call
          var querstr1 = "http://api.giphy.com/v1/gifs/search?api_key=01f8ebd24dd04b98b407dd4b30d3443e" ;
            var querstr2 = "&q="+ searchstr +"&limit=1&offset=0&rating=G&lang=en";
            //var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=01f8ebd24dd04b98b407dd4b30d3443e&q=stars&limit=25&offset=0&rating=G&lang=en";
            var queryURL = querstr1 + querstr2 ;
            console.log(querstr1+querstr2);
            $("#vfiles").html("");

            $.ajax({
              url : queryURL ,
              method: "GET"
            }).done(function(response){
              console.log(response);
              var img_array = response.data;
              var len = img_array.length;

              console.log('length',len);
              console.log('res data',response.data);
              for( var i =0; i < len ; i++)
              {
                var in1 = img_array[i].images.fixed_height_small.url ;
                var in2 = img_array[i].images.fixed_height_small_still.url ;
                var ifrele = $("<iframe>");
                ifrele.attr("src",in1);
                
                $("#vfiles").append(ifrele);
            //    gl_imgvidurl[gl_imgvidurl.length] = in1;
              //  gl_imgurl[gl_imgurl.length] = in2;

              } //end of for
            });//end of ajax response

}
// adding the search string
$("#First-form").on("click","input",function(){
  var yesno = this.checked ;
  console.log('checked or not',yesno);
  if (yesno)
   {
         console.log("it is checked",yesno)
          if ( gl_searchfor === null)
          {
            gl_searchfor = this.value ;
            callapigifvid(gl_searchfor);

          }
          else {
                gl_searchfor = gl_searchfor+"+"+this.value ;
                console.log('intheelse');
                console.log('search str',gl_searchfor);
                callapigifvid(gl_searchfor);
                }
     }
     else {
          console.log("it is checked",yesno)

     }

});


//Main Programming
dynamicadd();




              //  var divele = $("<div class = items>");
              //var imgele = $("<img>");
            //  imgele.attr("src",img_array[i].images.fixed_height.url);
            //  divele.append(imgele);
            //  $("#gifdisplay").prepend(divele);
            //var in2 = "mp4" ;
            //var str = '<video><source src ="'+ in1+'" ></video>';
            //console.log('string'+ str);
            //console.log('in2'+in2);
