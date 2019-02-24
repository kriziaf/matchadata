$('document').ready(
  function() {
    $.ajax({
      //SERVER LINK GOES HERE 104...
      url:"http://104.236.222.190:3000/twitter",
      //data:{},
      success: function(data) {
      // DISPLAY STRING
      // $('#result').html('<p>' + data + '</p>')

      //PARSE JSON STRING
      let category = '';
        var obj = jQuery.parseJSON(data);
          console.log(obj);
          
        for (var i=0;i<obj.length;i++){
          let emoji = printEmojis(obj[i].text);
          if(emoji != null && obj[i].entities.hashtags.length > 0){
            console.log(obj[i].entities);
            category = obj[i].entities.hashtags[0].text;
            $('#result').append('<p class="'+category+' tweets">' + obj[i].text + '</p>');

            //on click of aTag, filter emojis containing the hashtag

            // console.log(obj[1].text);
            // let aTag = $('<a>#' + category + '<a>');
            let aTag = '<a onclick="filterContent(\''+category+'\')">#' + category + '<a>';
            console.log(aTag);
            // aTag.click(function() {
            //   filterContent(category);
            // })
            $('#hashtag').append(aTag);

            //console.log(tweet);
            //hover this emoji, show obj[i].text
            //else hide!!
            // let emoji = printEmojis(obj[i].text);
            $('#emoji').append('<span class="'+category+' emoji">'+emoji.join('')+'</span>');
          }
            //SYNTAX FOR jquery json
            //myObj.cars["car2"]
            //myObj.cars.car2
        }

      },
      error: function(err) {
        console.log(err);
      }
    })
  }
)
    function filterContent(target){
      $('.emoji').each(function(){
        console.log(this);
        console.log($(this).hasClass(target));
        if(!$(this).hasClass(target)){
          $(this).hide();
        }else{
          $(this).show();
        }
      })
      $('.tweets').each(function(){
        console.log(this);
        console.log($(this).hasClass(target));
        if(!$(this).hasClass(target)){
          $(this).hide();
        }else{
          $(this).show();
        }
      })

    }

    function printEmojis (twittertext) {
      var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

      return(twittertext.match(regex));
    }
