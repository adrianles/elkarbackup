require(['dojo', 'dojo/ready'],
function(dojo, ready){
    ready(function() {
              dojo.query('.delete-script')
                  .connect('onsubmit',
                           function (e){
                               var msg;
                               msg = dojo.getAttr(e.target, 'data-bnv-message');
                               if (confirm(msg)) {
                                   return true;
                               } else {
                                   e.preventDefault();
                                   return false;    
                               }
                           });
          });
});