// Third-party Imports
import type { EventInput } from '@fullcalendar/core'

export const events: EventInput[] = [
  {
    id: '1',
    title: 'Meeting',
    start: new Date('2024-01-15T10:00:00'),
    end: new Date('2024-01-15T11:00:00'),
    extendedProps: {
      calendar: 'Business'
    }
  },
  {
    id: '2',
    title: 'Lunch',
    start: new Date('2024-01-16T12:00:00'),
    end: new Date('2024-01-16T13:00:00'),
    extendedProps: {
      calendar: 'Personal'
    }
  }
]

