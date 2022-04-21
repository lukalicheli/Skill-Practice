const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    text: String,
    username: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  },
  // schema options argument
  {
    toJSON: {
      // by default, mongoose leaves out virtuals when converting instances to
      // json, this option changes that behavior
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
