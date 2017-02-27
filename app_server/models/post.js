var mongoose = require ('mongoose'),
    Schema = mongoose.Schema,

var postSchema = new Schema({
  title: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: User},
  duration: {type: Number, required: true, min: 0, max: 5, default: 0}
});

module.exports = mongoose.model('Post', postSchema);
