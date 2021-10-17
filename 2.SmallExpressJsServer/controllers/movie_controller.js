const { OmdbApiService } = require('../services');

const MovieController = {
  search: async (req, res, next) => {
    try {
      const result = await OmdbApiService.getMoviesDataByParameter(req.query);

      res.send({
        status: 200,
        message: 'success',
        data: {
          response: result.data.Response,
          totalResults: result.data.totalResults,
          searchData: result.data.Search
        }
      });

    } catch (error) {
      next(error);
    }
  },

  detail: async (req, res, next) => {
    try {
      const result = await OmdbApiService.getMoviesDataByParameter(req.query);

      res.send({
        status: 200,
        message: 'success',
        data: {
          response: result.data.Response,
          searchData: result.data
        }
      });

    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController

