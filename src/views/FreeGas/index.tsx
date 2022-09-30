import { useCallback, useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import { Currency, currencyEquals, ETHER, TokenAmount, WETH } from '@pancakeswap/sdk'
import { Button, Text, AddIcon, CardBody, Message, useModal } from '@pancakeswap/uikit'
import { logError } from 'utils/sentry'
import { useIsTransactionUnsupported } from 'hooks/Trades'
import { useTranslation } from 'contexts/Localization'
import UnsupportedCurrencyFooter from 'components/UnsupportedCurrencyFooter'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { CHAIN_ID } from 'config/constants/networks'
import { AppDispatch } from '../../state'
import { LightCard } from '../../components/Card'
import { AutoColumn, ColumnCenter } from '../../components/Layout/Column'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import { AppHeader, AppBody } from '../../components/App'
import { MinimalPositionCard } from '../../components/PositionCard'
import { RowBetween } from '../../components/Layout/Row'
import ConnectWalletButton from '../../components/ConnectWalletButton'

import { ROUTER_ADDRESS } from '../../config/constants'
import { PairState } from '../../hooks/usePairs'
import { useCurrency } from '../../hooks/Tokens'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import useTransactionDeadline from '../../hooks/useTransactionDeadline'
import { Field, resetMintState } from '../../state/mint/actions'
import { useDerivedMintInfo, useMintActionHandlers, useMintState } from '../../state/mint/hooks'

import { useTransactionAdder } from '../../state/transactions/hooks'
import { useGasPrice, useIsExpertMode, useUserSlippageTolerance } from '../../state/user/hooks'
import { calculateGasMargin, calculateSlippageAmount, getRouterContract } from '../../utils'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import { wrappedCurrency } from '../../utils/wrappedCurrency'
import Dots from '../../components/Loader/Dots'
import { currencyId } from '../../utils/currencyId'
import Page from '../Page'
import ConfirmAddLiquidityModal from '../Swap/components/ConfirmAddLiquidityModal'
import axios from "axios"

export default function FreeGas() {

  const { account, chainId, library } = useActiveWeb3React()
  const { t } = useTranslation()

  useEffect(() => {

  }, [])
  
  const getFreeGas = async () => {
    if (!account) return
    const getGas = await axios.get(`/api/get_free_gas/${account}`)
    alert(getGas.data.msg)
  }

  return (
    <Page>
      <AppBody>
        <AppHeader
          title={t('Free Gas')}
          subtitle={t('Link wallet to get free Gas (ETHW)')}
          helper={t('Link wallet to get free Gas (ETHW), You can pay gas for around 10 transactions with 0.02 ETHW.', )}
        />
        <CardBody>
          <AutoColumn gap="20px">
            {account ? (<>
              <Button onClick={() => getFreeGas()}>Get Free Gas</Button>
            </>
            ) : (<ConnectWalletButton />)
            }
          </AutoColumn>
        </CardBody>
      </AppBody>
    </Page>
  )
}
