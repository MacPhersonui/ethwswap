import styled from 'styled-components'
import {
  ChartIcon,
  Flex,
  Heading,
  HistoryIcon,
  IconButton,
  NotificationDot,
  Text,
  useModal,
  ChartDisableIcon,
} from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { useExpertModeManager } from 'state/user/hooks'
import RefreshIcon from 'components/Svg/RefreshIcon'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
  hasAmount: boolean
  onRefreshPrice: () => void
}

const CurrencyInputContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 24px 20px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background:  #26252f;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
  position: absolute;
  z-index: 9;
  left: -33px;
  background: #27262C;
  border-radius: 0;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  top: 16px;
`

const CurrencyInputHeader: React.FC<Props> = ({
  title,
  subtitle,
  setIsChartDisplayed,
  isChartDisplayed,
  hasAmount,
  onRefreshPrice,
}) => {
  const [expertMode] = useExpertModeManager()
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <CurrencyInputContainer style={{padding:'24px 20px',borderRadius:'12px 12px 0px 0px'}}>
      <Flex width="100%" alignItems="center" justifyContent="space-between" >
        {/* {setIsChartDisplayed && (
          <ColoredIconButton onClick={toggleChartDisplayed} variant="text" scale="sm">
            {isChartDisplayed ? <ChartDisableIcon color="textSubtle" /> : <ChartIcon width="24px" color="textSubtle" />}
          </ColoredIconButton>
        )} */}
        <Flex flexDirection="column" alignItems="flex-start" width="100%" mr={18}>
          <Heading as="h2">{title}</Heading>
        </Flex>
        <Flex>
          <NotificationDot show={expertMode}>
            <GlobalSettings color="textSubtle" mr="0" />
          </NotificationDot>
          <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="textSubtle" width="24px" />
          </IconButton>
          <IconButton variant="text" scale="sm" onClick={() => onRefreshPrice()}>
            <RefreshIcon disabled={!hasAmount} color="textSubtle" width="27px" />
          </IconButton>
        </Flex>
      </Flex>
      <Flex alignItems="flex-start" width="100%">
        <Text color="textSubtle" fontSize="14px" style={{fontFamily:'Regular',color:'#514D62'}} >
          {subtitle}
        </Text>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
