var gift = require('../schemas/regalos');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');


 exports.GetGift = {
    handler: function(request, reply){
      var regalos = regalo.find({});
      reply(regalos);
    }
  };

  exports.PostGift = {
    handler: function(request, reply) {
      var newregalo = new regalo({
        nombre: request.payload.nombre,
        descripcion: request.payload.descripcion,
        peso: request.payload.peso,
        destinario: request.payload.destinario,
        descripcion: request.payload.descripcion,
        status: "Pendiente de entrega",
        estado: true
      });
       newregalo.save(function (err) {
        
      });
    }
  };

  exports.PutGift = {
    handler: function(request,reply){

    regalo.findOne({regaloname: request.payload.regaloname},function(err,regalos){
      
      if (request.payload.estado === "true") {
        regalos.estado = true;
      }else{
        regalos.estado = false;
      };

      regalos.save(function(err){
        if(err) throw err;
      })
    })

  }
  };
