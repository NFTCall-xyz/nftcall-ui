import type { FC } from 'react'
import { Fragment, useMemo } from 'react'

import Button from '@mui/material/Button'

import { useDialog } from 'app/hooks/useDialog'

import Dialog from 'components/dialog/Dialog'

import { useForm } from 'store/dev/api/code-template/create-store/form/useForm'

import { DevCard } from './components/DevCard'
import { DevForm } from './components/DevForm'

export const Store: FC = () => {
  const codeTemplateCreateStoreDialog = useDialog()
  const formData = useForm()
  const data = useMemo(() => {
    return [
      {
        path: '/api/store/code-template/create-store',
        description: '生成模板代码 - 创建仓库',
        action: (
          <Button
            onClick={() => {
              codeTemplateCreateStoreDialog.open()
            }}
          >
            open dialog
          </Button>
        ),
      },
    ]
  }, [codeTemplateCreateStoreDialog])

  return (
    <Fragment>
      <DevCard
        {...{
          title: 'Store',
          data,
        }}
      />
      <Dialog
        {...{
          ...codeTemplateCreateStoreDialog,
          title: ' Code Template - CreateStore',
        }}
      >
        <DevForm {...formData} />
      </Dialog>
    </Fragment>
  )
}
