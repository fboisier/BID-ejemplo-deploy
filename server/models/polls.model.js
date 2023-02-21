const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PollsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "The question is required"],
        unique: [true, "This question already exist"],
        min: [10, 'The question must have at least 10 characters']
    },
    opt1: {
        type: String,
        required: [true, "The option is required"],
        min: [2, 'The question must have at least 2 characters']
    },
    opt2: {
        type: String,
        required: [true, "The option is required"],
        min: [2, 'The question must have at least 2 characters']
    },
    opt3: {
        type: String,
        required: false,
        min: [2, 'The question must have at least 2 characters']
    },
    opt4: {
        type: String,
        required: false,
        min: [2, 'The question must have at least 2 characters']
    },
    votOpt1: {
        type: Number,
        required: false,
    },
    votOpt2: {
        type: Number,
        required: false,
    },
    votOpt3: {
        type: Number,
        required: false,
    },
    votOpt4: {
        type: Number,
        required: false,
    },
    totalVot: {
        type: Number,
        required: false,
    },
}, { timestamps: true });

PollsSchema.plugin(uniqueValidator)
module.exports.Polls = mongoose.model('Polls', PollsSchema);

