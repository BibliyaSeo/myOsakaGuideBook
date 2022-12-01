export default {
  title: 'Destination',
  name: 'destination',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Destination Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the Destination',
      type: 'image',
    },
    {
      name: 'address',
      title: 'Destination address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'map',
      title: 'Google map Destination',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time of the Destination',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Pass Type',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [{type: 'passtype'}],
    },
    {
      name: 'regions',
      title: 'Regions',
      type: 'reference',
      to: [{type: 'region'}],
    },
    {
      name: 'memo',
      title: 'Memo of Destination',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
