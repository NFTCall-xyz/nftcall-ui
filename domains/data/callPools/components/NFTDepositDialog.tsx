import Dialog from 'components/dialog/Dialog'
import { useCallPools } from 'domains/data'

type NFTDepositDialogProps = {}
const NFTDepositDialog: FC<NFTDepositDialogProps> = () => {
  const {
    dialogs: { nftDeposit },
  } = useCallPools()
  return <Dialog {...{ ...nftDeposit, title: 'Deposit' }}></Dialog>
}

export default NFTDepositDialog
