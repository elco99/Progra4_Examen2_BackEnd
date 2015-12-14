var mongoose = require('mongoose');

var RegaloSchema = new mongoose.Schema({
  nombre : String,
  descripcion : String,
  peso: Number,
  destinario: String,
  status: String,
  estado: Boolean
});

module.exports = mongoose.model('Regalo', RegaloSchema);
