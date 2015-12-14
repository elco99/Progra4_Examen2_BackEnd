var regalo = require('../schemas/regalos');

exports.getRegalo = {
  auth: {
    mode:'required',
    strategy:'session'
  },
  handler: function(request, reply){
    var regalos = regalo.find({});
    reply(regalos);
  }
}

exports.createRegalo = {
  auth: {
    mode:'required',
    strategy:'session'
  },
  handler: function(request, reply){
    var newregalo = new regalo({
      name: request.payload.name,
      account: request.payload.account
    });
    newregalo.save();
    console.log('regalo saved');
    return reply('ok');
  }
}
