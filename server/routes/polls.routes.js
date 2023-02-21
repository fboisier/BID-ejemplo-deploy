const PollsController = require('../controllers/polls.controller');
module.exports = function (app) {
    app.post('/polls/new', PollsController.createPolls);
    app.get('/polls', PollsController.getAllPolls);
    app.get('/polls/top', PollsController.getTop);
    app.get('/polls/:id', PollsController.getPolls);
    app.put('/polls/:id', PollsController.updatePolls);
    
    // app.delete('/polls/:id', PollsController.deletePolls);
}
