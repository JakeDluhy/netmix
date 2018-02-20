const _ = require('lodash');

const getDataObject = (obj, type) => ({
  type,
  id:         obj.id,
  attributes: _.mapKeys(_.omit(obj, ['id', 'objectType']), (val, key) => _.kebabCase(key)),
});

const getDataType = (url) => {
  const noQuery = url.split('?')[0];

  return _.last(
    noQuery.split('/').filter((part) => isNaN(Number(part)))
  );
}

exports.serializeJsonapi = (req, res) => {
  const { data } = res.locals;

  const type = getDataType(req.originalUrl);

  return res.json(
    _.isArray(data) ?
      { data: data.map((obj) => getDataObject(obj, type)) } :
      { data: getDataObject(data, type) },
  );
};

exports.deserializeJsonapi = (req, res, next) => {
  if(_.isEmpty(req.body)) return next();

  const { id, attributes } = req.body.data;

  req.body = _.assign(
    { id },
    _.mapKeys(attributes, (val, key) => _.camelCase(key)),
  );

  return next();
};
