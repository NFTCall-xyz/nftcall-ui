import Dialog from 'components/dialog/Dialog'
import { useCallPools } from 'domains/data'

type NFTSettingDialogProps = {}
const NFTSettingDialog: FC<NFTSettingDialogProps> = () => {
  const {
    dialogs: { nftSetting },
  } = useCallPools()
  return <Dialog {...{ ...nftSetting, title: 'Setting' }}></Dialog>
}

export default NFTSettingDialog
