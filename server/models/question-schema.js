const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  question: String,
  // answerId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Answer'
  // },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question