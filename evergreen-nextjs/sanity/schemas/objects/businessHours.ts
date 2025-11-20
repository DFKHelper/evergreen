import { defineType } from 'sanity'

export default defineType({
  name: 'businessHours',
  title: 'Business Hours',
  type: 'object',
  fields: [
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'monday' },
          { title: 'Tuesday', value: 'tuesday' },
          { title: 'Wednesday', value: 'wednesday' },
          { title: 'Thursday', value: 'thursday' },
          { title: 'Friday', value: 'friday' },
          { title: 'Saturday', value: 'saturday' },
          { title: 'Sunday', value: 'sunday' },
        ],
      },
    },
    {
      name: 'open',
      title: 'Opening Time',
      type: 'string',
      description: 'e.g., 9:00 AM',
    },
    {
      name: 'close',
      title: 'Closing Time',
      type: 'string',
      description: 'e.g., 5:00 PM',
    },
    {
      name: 'closed',
      title: 'Closed',
      type: 'boolean',
      description: 'Check if closed on this day',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      day: 'day',
      open: 'open',
      close: 'close',
      closed: 'closed',
    },
    prepare(selection: any) {
      const { day, open, close, closed } = selection
      const dayStr = day ? day.charAt(0).toUpperCase() + day.slice(1) : 'Day'
      return {
        title: dayStr,
        subtitle: closed ? 'Closed' : `${open || ''} - ${close || ''}`,
      }
    },
  },
})
