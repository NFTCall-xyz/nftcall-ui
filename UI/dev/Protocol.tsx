import type { FC } from 'react'
import { Fragment, useMemo } from 'react'

import Button from '@mui/material/Button'

import { useDialog } from 'app/hooks/useDialog'
import { createToastifyPromise } from 'app/utils/promise/toastify'

import Dialog from 'components/dialog/Dialog'

import { useForm } from 'lib/protocol/dev/api/code-template/form/useForm'

import { DevCard } from './components/DevCard'
import { DevForm } from './components/DevForm'

export const Protocol: FC = () => {
  const codeTemplateContractServiceDialog = useDialog()
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
        path: '/api/protocol/code-template/contract-service',
        description: '生成模板代码 - 合约服务文件',
        action: (
          <Button
            onClick={() => {
              codeTemplateContractServiceDialog.open()
            }}
          >
            open dialog
          </Button>
        ),
      },
    ]
  }, [codeTemplateContractServiceDialog])

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
          ...codeTemplateContractServiceDialog,
          title: ' Code Template - ContractService',
        }}
      >
        <DevForm {...formData} />
      </Dialog>
    </Fragment>
  )
}
