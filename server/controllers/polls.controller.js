const { Polls } = require("../models/polls.model");

module.exports.createPolls = async (req, res) => {
    try {
        const { question, opt1, opt2, opt3, opt4 } = req.body;
        poll = await Polls.create({
            question,
            opt1,
            opt2,
            opt3,
            opt4,
            votOpt1: 0,
            votOpt2: 0,
            votOpt3: 0,
            votOpt4: 0,
            totalVot: 0,
        });
        res.json(poll);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.getAllPolls = async (req, res) => {
    try {
        const polls = await Polls.find().sort({ createdAt: -1 })
        res.json(polls);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.getTop = async (req, res) => {
    try {
        const polls = await Polls.find().sort({ totalVot: -1 }).limit(3)
        res.json(polls);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.getPolls = async (req, res) => {
    try {
        const poll = await Polls.findOne({ _id: req.params.id })
        res.json(poll);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.updatePolls = async (req, res) => {
    try {
        const poll = await Polls.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        console.log(req.body)
        res.json(poll);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.deletePolls = async (req, res) => {
    try {
        const persona = await Polls.deleteOne({ _id: req.params.id })
        res.json(persona);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}