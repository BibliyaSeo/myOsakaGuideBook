export default {
  name: 'plan',
  title: 'Plan',
  type: 'document',
  fields: [
    {
      name: 'day',
      title: 'Plan Day',
      type: 'reference',
      to: [{type: 'daytype'}],
    },
    {
      name: 'Memo',
      title: 'Plan Memo',
      type: 'string',
    },
  ],
};
