import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import { useTranslation } from 'contexts/Localization'

const ValueWrap = styled.div``

export interface DataItemProps {
  volume: number
  trades: number
  interest: number
}

const DataSection: React.FC<DataItemProps> = (item) => {
  const { volume, trades, interest } = item
  const { t } = useTranslation()
  return (
    <Flex>
      <Flex>
        <Flex>
          <Text color="#6062A1" fontSize="40px">
            ${volume}b
          </Text>
        </Flex>
        <Flex>
          <Text color="#414456" fontSize="22px">
            {t('Trading Volume')}
          </Text>
        </Flex>
        <Flex>
          <Text color="#fff" fontSize="18px">
            {t('All-Time')}
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex>
          <Text color="#6062A1" fontSize="40px">
            {trades}
          </Text>
        </Flex>
        <Flex>
          <Text color="#414456" fontSize="22px">
            {t('Trades')}
          </Text>
        </Flex>
        <Flex>
          <Text color="#fff" fontSize="18px">
            {t('Last-30D')}
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex>
          <Text color="#6062A1" fontSize="40px">
            ${interest}m
          </Text>
        </Flex>
        <Flex>
          <Text color="#414456" fontSize="22px">
            {t('Open Interest')}
          </Text>
        </Flex>
        <Flex>
          <Text color="#fff" fontSize="18px">
            {t('Last-24h')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default DataSection
