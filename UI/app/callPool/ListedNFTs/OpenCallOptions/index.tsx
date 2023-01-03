import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { H3 } from 'components/Typography'
import type { MutableRefObject } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallPoolDetails, useNetwork } from 'domains/data'
import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { transaction } from 'domains/controllers/adapter/transaction'
import type { OpenCallProps } from 'lib/protocol/typechain/nftcall'
import { useWallet } from 'domains'

type OpenCallOptionsProps = { setRef: MutableRefObject<Set<string>>; size: number }
const OpenCallOptions: FC<OpenCallOptionsProps> = ({ setRef, size }) => {
  const [strikePriceGapIdx, setStrikePriceGapIdx] = useState(0)
  const [durationIdx, setDurationIdx] = useState(0)
  const [premiumToOwner, setPremiumToOwner] = useState(toBN(0))
  const [premiumToReserve, setPremiumToReserve] = useState(toBN(0))
  const [strikePrice, setStrikePrice] = useState(toBN(0))
  const ids = useMemo(() => {
    return Array.from(setRef.current.values())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])

  const { callPool } = useCallPoolDetails()
  const { networkAccount } = useWallet()
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: OpenCallProps) => {
      console.log(props)
      return transaction({
        createTransaction: callPoolService.openCall(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )

  return (
    <Card>
      <H3>Open Call Options</H3>
      <p>{JSON.stringify(ids)}</p>
      <Select
        value={strikePriceGapIdx}
        onChange={(e) => {
          setStrikePriceGapIdx(parseInt(e.target.value as any))
        }}
      >
        <MenuItem value={0}>0%</MenuItem>
        <MenuItem value={1}>10%</MenuItem>
        <MenuItem value={2}>20%</MenuItem>
        <MenuItem value={3}>30%</MenuItem>
        <MenuItem value={4}>50%</MenuItem>
        <MenuItem value={5}>100%</MenuItem>
      </Select>
      <Select
        value={durationIdx}
        onChange={(e) => {
          setDurationIdx(parseInt(e.target.value as any))
        }}
      >
        <MenuItem value={0}>3 days</MenuItem>
        <MenuItem value={1}>7 days</MenuItem>
        <MenuItem value={2}>14 days</MenuItem>
        <MenuItem value={3}>28 days</MenuItem>
      </Select>
      <p>
        Total Premium <NumberDisplay value={premiumToOwner.plus(premiumToReserve)} />
      </p>
      <p>
        Strike Price <NumberDisplay value={strikePrice} />
      </p>
      <p>Your Balance</p>
      <Button
        onClick={() => {
          callPoolService
            .previewOpenCall({
              callPool: callPool.address.CallPools,
              tokenIds: ids,
              strikePriceGapIdx: strikePriceGapIdx,
              durationIdx: durationIdx,
            })
            .then(({ premiumToOwner, premiumToReserve, strikePrice }) => {
              setPremiumToOwner(premiumToOwner)
              setPremiumToReserve(premiumToReserve)
              setStrikePrice(strikePrice)
            })
        }}
      >
        previewOpenCall
      </Button>
      <Button
        onClick={() => {
          fn({
            callPool: callPool.address.CallPools,
            tokenIds: ids,
            strikePriceGapIdx: strikePriceGapIdx,
            durationIdx: durationIdx,
            user: networkAccount,
          })
        }}
      >
        Call
      </Button>
    </Card>
  )
}

export default OpenCallOptions
