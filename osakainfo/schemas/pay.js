export default {
  name: 'pay',
  title: 'Pay',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Pay title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'day',
      title: 'Pay Day',
      type: 'reference',
      to: [{type: 'daytype'}],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'categorise',
      title: 'Categories',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date of Pay',
      type: 'string',
    },
    {
      name: 'Memo',
      title: 'Pay Memo',
      type: 'string',
    },
  ],
};
