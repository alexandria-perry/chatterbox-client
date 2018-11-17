var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
    // MessagesView.$chats.on('submit', MessagesView.render);
    // $.ajax({
    //   success: function (message) {
    //     $("#chats").append(message);
    //   }
    // })
  },

  render: function() {
    
    
  },
  
  renderMessage: function() {
    ($('#chats')).append('<p></p>')
    
  }

};