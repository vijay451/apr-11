import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
 due: attr('string'),
 description: attr('string'),
});
