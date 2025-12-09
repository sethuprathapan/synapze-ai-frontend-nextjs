// Type Imports
import type { KanbanType } from '@/types/apps/kanbanTypes'

export const db: KanbanType = {
  columns: [
    {
      id: 1,
      title: 'To Do',
      taskIds: [1, 2]
    },
    {
      id: 2,
      title: 'In Progress',
      taskIds: [3]
    },
    {
      id: 3,
      title: 'Done',
      taskIds: []
    }
  ],
  tasks: [
    {
      id: 1,
      title: 'Task 1'
    },
    {
      id: 2,
      title: 'Task 2'
    },
    {
      id: 3,
      title: 'Task 3'
    }
  ]
}

