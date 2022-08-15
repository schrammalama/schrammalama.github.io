// load first feed on document load
$(document).ready(
    function() {
       load_feed( $('select#feedSelect')[0], 'feedDiv' ) ); // pick first
    }
);

function load_feed( ctl, contentArea )  // load based on select
{
   var content = $('#' + contentArea )[0]; //pick first

   content.html( 'Loading feed, please wait...' );

   var feedUrl = ctl.options[ctl.selectedIndex].value;

   $.getFeed( { url: feedUrl,
        function(feed) {
           content.html( '' );
           content.append( '<h1>' + feed.title + '</h1>' );
           feed.items.each( 
              function(i,item) {
                  content.append( '<h2><a href="'
                                     + item.link
                                     + '">' 
                                     + feed.title
                                     + '</a></h2>' );
                  content.append( '<p>' + feed.description + '</p>' );
              }
           );
         }
     });
 }// JavaScript Document