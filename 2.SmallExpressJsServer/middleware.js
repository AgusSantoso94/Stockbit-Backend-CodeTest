const { ApiCallLogsService } = require('./services');

module.exports = {
  saveApiCallLogs: () => async (req, res, next) => {
     ApiCallLogsService.create({
      endpoint: req.hostname + req.path,
      parameter: JSON.stringify(req.query),
      created_at: Date.now()
    })
  
    next();
  }
}