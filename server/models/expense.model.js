import mongoose from 'mongoose'
const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required. Please, enter title.'
  },
  category: {
    type: String,
    trim: true,
    required: 'Category is required. Please, enter category.'
  },
  amount: {
      type: Number,
      min: 0,
      required: 'Amount is required. Please, enter amount.'
  },
  incurred_on: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  recorded_by: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

export default mongoose.model('Expense', ExpenseSchema)
