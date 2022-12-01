export default {
  name: 'reservation',
  title: 'Reservation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Reservation name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time of the Reservation',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Reservation address',
      type: 'string',
    },
    {
      name: 'number',
      title: 'Reservation number',
      type: 'string',
    },
    {
      name: 'memo',
      title: 'Memo of Reservation',
      type: 'string',
    },
  ],
};
