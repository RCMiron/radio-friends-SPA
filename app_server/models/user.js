var mongoose = require ('mongoose'),
    Schema = mongoose.Schema,
    mongooseUniqueValidator = require ('mongoose-unique-validator');

var userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  posts: {type: Schema.Types.ObjectId, ref: 'Post'},
  following: {type: Schema.Types.ObjectId, ref: 'Following'},
  followers: {type: Schema.Types.ObjectId, ref: 'Followers'}
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
