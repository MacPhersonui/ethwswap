import styled from 'styled-components'
import { Image, Flex, Heading, Text } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import TopCard from './components/TopCard'
import EntryCard from './components/EntryCard'
import Footer from './components/Footer'

const HomeWrap = styled.div`
  background: #17181d;
  position: relative;
`
const HomeContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
const TopContent = styled.div`
  background: url(/images/home/season/bg.svg);
  height: 400px;
  background-size: cover;
  position: absolute;
  left: 0;
  z-index: 1;
  top:-100px;
  right: 0;
`
const LarnMore = styled.div`
  margin: 100px 0;
  color: #292a36;
  font-size: 28px;
  text-align: center;
  span {
    cursor: pointer;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background: url(/images/home/season/mouse.svg);
      width: 15px;
      height: 75px;
      background-size: 100% 100%;
      left: 50%;
      transform: translateX(-50%);
      top: -55px;
    }
  }
`
const Intro = styled.div`
  text-align: center;
  background: url(/images/home/season/wordbg.svg) no-repeat center;
  height: 170px;
  background-size: auto 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top:15px;
  @media screen and (max-width: 500px) {
    height: 70px;
    h2{
      font-size: 20px !important;
    }
  }
`
const DataSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  // const { account } = useWeb3React()

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <HomeWrap>
        <HomeContent>
          <TopContent></TopContent>
          <TopCard></TopCard>
          <LarnMore style={{ fontSize: '12px' }}>
            <span>{t('Scroll down')}</span>
          </LarnMore>
          <Intro>
            <Heading scale="xxl" color="#fff" mb="20px" mt="20px" style={{ fontSize: '45px', fontStyle: 'bold' }}>
              {t('Easy Access to Decentralized Crypto Trading')}
            </Heading>
            <Text fontSize="18px" color="#414456">
              {t('We make it possible for ordinary people to trade crypto securely and without the need for an intermediary.')}
            </Text>
          </Intro>
          {/* <DataSection style={{ width: '70%', margin: '50px auto' }}>
            <Flex flexDirection="column" alignItems="center">
              <Flex>
                <Text color="#6062A1" fontSize="54px" style={{ fontStyle: 'bold' }}>
                  $6.10b
                </Text>
              </Flex>
              <Flex>
                <Text color="#fff" mt="15px" mb="0px" fontSize="22px">
                  {t('Trading Volume')}
                </Text>
              </Flex>
              <Flex>
                <Text color="#414456" fontSize="22px">
                  {t('All-Time')}
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Flex>
                <Text color="#6062A1" fontSize="54px">
                  33,306
                </Text>
              </Flex>
              <Flex>
                <Text color="#fff" mt="15px" mb="0px" fontSize="22px">
                  {t('Trades')}
                </Text>
              </Flex>
              <Flex>
                <Text color="#414456" fontSize="22px">
                  {t('Last-30D')}
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Flex>
                <Text color="#6062A1" fontSize="54px">
                  $24.1m
                </Text>
              </Flex>
              <Flex>
                <Text color="#fff" mt="15px" mb="0px" fontSize="22px">
                  {t('Open Interest')}
                </Text>
              </Flex>
              <Flex>
                <Text color="#414456" fontSize="22px">
                  {t('Last-24h')}
                </Text>
              </Flex>
            </Flex>
          </DataSection> */}
          <EntryCard></EntryCard>
          {/* <Intro>
            <Heading scale="xxl" color="#fff" mb="20px" mt="20px">
              {t('Your No.1 DeFi Station in ETHW Ecosystem')}
            </Heading>
          </Intro> */}
          {/* <Flex padding="20px" justifyContent="center" margin="40px">
            <Image ml="10px" mr="10px" src={'/images/home/season/fund2.svg'} width={194} height={52.8} />
            <Image ml="10px" mr="10px" src={'/images/home/season/fund1.svg'} width={194} height={52.8} />
          </Flex> */}
        </HomeContent>
        <Footer />
      </HomeWrap>
    </>
  )
}

export default Home
