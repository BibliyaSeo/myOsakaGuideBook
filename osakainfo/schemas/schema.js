import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import passtype from './passtype';
import plan from './plan';
import destination from './destination';
import restaurant from './restaurant';
import daytype from './daytype';
import reservation from './reservation';
import region from './region';
import category from './category';
import pay from './pay';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    passtype,
    daytype,
    region,
    category,
    destination,
    restaurant,
    plan,
    pay,
    reservation,
  ]),
});
