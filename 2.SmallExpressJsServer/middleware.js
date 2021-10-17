const { ApiCallLogsService } = require('./services');

module.exports = {
  saveApiCallLogs: () => async (req, res, next) => {
    console.log('req', req)
     ApiCallLogsService.create({
      endpoint: req.path,
      parameter: JSON.stringify(req.query),
      created_at: Date.now()
    })
  
    next();
  }
}