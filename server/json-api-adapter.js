const _ = require('lodash');

const serializeObject = (obj) => ({
  data: {
    id:         obj.id,
    type:       obj.objectType,
    attributes: _.mapKeys(_.omit(obj, ['id', 'objectType']), (val, key) => _.kebabCase(key)),
  },
});

exports.serializeJsonapi = (req, res) => {
  const { data } = res.locals;

  return res.json(
    _.isArray(data) ? data.map(serializeObject) : serializeObject(data),
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
