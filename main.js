SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {  });



SC.stream('/tracks/603692073',function(sound){ });
$('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });


SC.stream('/tracks/674421794',function(sound){ });
$('#start1').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
$('#stop1').click(function(e) {
                      e.preventDefault();
                      sound.stop();
                    });


SC.stream('/tracks/27888501',function(sound){ });
$('#start2').click(function(e) {
                              e.preventDefault();
                              sound.start();
                              });
$('#stop2').click(function(e) {
                              e.preventDefault();
                                sound.stop();
                                });



  SC.stream('/tracks/175000762',function(sound){ });
                $('#start3').click(function(e) {
                                     e.preventDefault();
                                              sound.start();
                                       });
                                    $('#stop3').click(function(e) {
                                                e.preventDefault();
                                                            sound.stop();
                                                          });
    SC.stream('/tracks/217913693',function(sound){ });
                  $('#start4').click(function(e) {
                                       e.preventDefault();
                                                sound.start();
                                         });
                                      $('#stop4').click(function(e) {
                                                  e.preventDefault();
                                                              sound.stop();

  SC.stream('/tracks/89114752',function(sound){ });
                $('#start5').click(function(e) {
                                     e.preventDefault();
                                              sound.start();
                                       });
                                    $('#stop5').click(function(e) {
                                                e.preventDefault();
                                                            sound.stop();
                                                          });
  SC.stream('/tracks/688082512',function(sound){ });
                $('#start6').click(function(e) {
                                     e.preventDefault();
                                              sound.start();
                                       });
                                    $('#stop6').click(function(e) {
                                                e.preventDefault();
                                                            sound.stop();
                                                          });


    SC.stream('/tracks/1281747',function(sound){ });
                  $('#start7').click(function(e) {
                                  e.preventDefault();
                                                sound.start();
                                    });
                    $('#stop7').click(function(e) {
                                    e.preventDefault();
                                                  sound.stop();
                                    });
