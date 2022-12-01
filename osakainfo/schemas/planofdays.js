export default {
  name: 'planofdays',
  title: 'PlanOfDays',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Plan title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Day',
      type: 'reference',
      to: [{type: 'daytype'}],
    },
    {
      name: 'destinations',
      title: 'Destinations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'destination'}]}],
    },
    {
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
};
