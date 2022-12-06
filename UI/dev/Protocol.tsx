import type { FC } from 'react'
import { useMemo, Fragment } from 'react'
import Button from '@mui/material/Button'

import { useDialog } from 'app/hooks/useDialog'
import { createToastifyPromise } from 'app/utils/promise/toastify'
import Dialog from 'components/dialog/Dialog'

import { DevCard } from './components/DevCard'
import { DevForm } from './components/DevForm'
import { useForm } from 'lib/protocol/dev/api/code-template/form/useForm'

export const Protocol: FC = () => {
  const codeTemplateDialog = useDialog()
  const formData = useForm()
  const data = useMemo(() => {
    return [
      {
        path: '/api/protocol/generate',
        description: '根据 lib/protocol/src, 更新合约地址',
        action: (
          <Button
            onClick={() => {
              createToastifyPromise(fetch('/api/protocol/generate'))
            }}
          >
            执行
          </Button>
        ),
      },
      {
        path: '/api/protocol/code-template',
        description: '生成模板代码',
        action: (
          <Button
            onClick={() => {
              codeTemplateDialog.open()
            }}
          >
            执行
          </Button>
        ),
      },
    ]
  }, [codeTemplateDialog])

  return (
    <Fragment>
      <DevCard
        {...{
          title: 'Protocol',
          data,
        }}
      />
      <Dialog
        {...{
          ...codeTemplateDialog,
          title: ' Code Template',
        }}
      >
        <DevForm {...formData} />
      </Dialog>
    </Fragment>
  )
}
