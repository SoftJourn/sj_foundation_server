const models = require('../models');
const _ = require('underscore');

const defaultParams = {
  category: false,
  sort: false,
  status: false,
};

exports.search = (params) => {
  const searchParams = _.defaults(_.pick(params, _.keys(defaultParams)), defaultParams);

  return models.projects.getByParams(
    searchParams.category,
    searchParams.sort,
    searchParams.status
  );
};