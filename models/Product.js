var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: { type: String, unique: true, lowercase: true },
  description: String,
  measures: Array,

  profile: {
    width: { type: String, default: '' },
    height: { type: String, default: '' },
    length: { type: String, default: '' }
  },

  lastModified: Date
});



module.exports = mongoose.model('product', productSchema);
