// Type Imports
import type { ChatDataType } from '@/types/apps/chatTypes'

export const db: ChatDataType = {
  profileUser: {
    id: 1,
    fullName: 'John Doe',
    role: 'Admin',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: '/images/avatars/1.png',
    status: 'online',
    settings: {
      isNotificationsOn: true,
      isTwoStepAuthVerificationEnabled: true
    }
  },
  contacts: [
    {
      id: 2,
      fullName: 'AI Maths Teacher',
      role: 'Frontend Developer',
      about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      avatar: '/images/avatars/1.png',
      status: 'offline'
    },
    {
      id: 3,
      fullName: 'AI History Teacher',
      role: 'UI/UX Designer',
      about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      avatarColor: 'success',
      status: 'away'
    },
    {
      id: 4,
      fullName: 'Joaquina Weisenborn',
      role: 'Town planner',
      about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      avatar: '/images/avatars/1.png',
      status: 'busy'
    }
  ],
  chats: [
    {
      id: 1,
      userId: 2,
      unseenMsgs: 2,
      chat: [
        {
          message: 'How can we help? We are here for you!',
          time: new Date('2023-10-18T10:00:00'),
          senderId: 2,
          msgStatus: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'Hey, I am looking for the best admin template. Could you please help me to find it out?',
          time: new Date('2023-10-18T10:05:00'),
          senderId: 1,
          msgStatus: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'It should be MUI 6.x compatible.',
          time: new Date('2023-10-18T10:06:00'),
          senderId: 1,
          msgStatus: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        }
      ]
    },
    {
      id: 2,
      userId: 3,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hi',
          time: new Date('2023-10-17T14:00:00'),
          senderId: 3,
          msgStatus: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        }
      ]
    }
  ]
}

