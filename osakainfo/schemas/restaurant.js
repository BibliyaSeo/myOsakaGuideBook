export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
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
      title: 'Image of the Restaurant',
      type: 'image',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'map',
      title: 'Google map Restaurant',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time of the Restaurant',
      type: 'string',
    },
    {
      name: 'menu',
      title: 'Main Menu of the Restaurant',
      type: 'string',
    },
    {
      name: 'regions',
      title: 'Regions',
      type: 'reference',
      to: [{type: 'region'}],
    },
    {
      name: 'memo',
      title: 'Memo of Restaurant',
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
