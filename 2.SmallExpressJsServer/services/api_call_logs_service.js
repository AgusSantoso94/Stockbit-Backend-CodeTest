const { ApiCallLogsModel } = require('../models')

const ApiCallLogsService = {}

ApiCallLogsService.create = async (params) => {
  return ApiCallLogsModel.create(params)
}

module.exports = ApiCallLogsService
