const PollsController = require('../controllers/polls.controller');
module.exports = function (app) {
    app.post('/api/polls/new', PollsController.createPolls);
    app.get('/api/polls', PollsController.getAllPolls);
    app.get('/api/polls/top', PollsController.getTop);
    app.get('/api/polls/:id', PollsController.getPolls);
    app.put('/api/polls/:id', PollsController.updatePolls);
    
    // app.delete('/polls/:id', PollsController.deletePolls);
}
