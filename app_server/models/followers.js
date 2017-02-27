var mongoose = require ('mongoose'),
    Schema = mongoose.Schema,
    mongooseUniqueValidator = require ('mongoose-unique-validator');

var followerSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  posts: {type: Schema.Types.ObjectId, ref: Post},
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Follower', followerSchema);
