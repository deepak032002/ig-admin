'use client'

import React from 'react'
import { Button } from 'flowbite-react'

import { TableIcon } from '@/asset/icon'

interface ActionBtnProps {
  editAction?: () => void
  deleteAction?: () => void
  viewAction?: boolean
}

const ActionBtn: React.FC<ActionBtnProps> = ({ editAction, deleteAction, viewAction }) => {
  return (
    <>
      {viewAction ? (
        <Button
          className="h-10 w-10"
          color={'gray'}
          theme={{
            size: {
              md: 'p-2 flex items-center',
            },
          }}
        >
          <TableIcon.ViewIcon />
        </Button>
      ) : (
        <>
          <Button.Group className="border-[#E6E6E6]">
            <Button
              className="h-10 w-10"
              color={'gray'}
              theme={{
                size: {
                  md: 'p-2',
                },
              }}
              onClick={editAction}
            >
              <TableIcon.EditIcon />
            </Button>
            <Button
              className="h-10 w-10"
              color={'gray'}
              theme={{
                size: {
                  md: 'p-2',
                },
              }}
              onClick={deleteAction}
            >
              <div className="text-red-500">
                <TableIcon.DeleteIcon />
              </div>
            </Button>
          </Button.Group>
        </>
      )}
    </>
  )
}

export default ActionBtn
