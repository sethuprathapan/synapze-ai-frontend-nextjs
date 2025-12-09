// Type Imports
import type { EmailType } from '@/types/apps/emailTypes'

export const db: EmailType = {
  emails: [
    {
      id: 1,
      from: {
        email: 'john.doe@example.com',
        name: 'John Doe',
        avatar: '/images/avatars/1.png'
      },
      to: [
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com'
        }
      ],
      subject: 'Welcome to our platform',
      cc: [],
      bcc: [],
      message: 'This is a sample email message.',
      attachments: [],
      isStarred: false,
      labels: [],
      time: new Date('2024-01-15T10:00:00'),
      replies: [],
      folder: 'inbox',
      isRead: false
    }
  ]
}

