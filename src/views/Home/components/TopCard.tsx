import { Image, Flex, Heading, Text, Button } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Wrapper = styled(Flex)`
  z-index: 5;
  padding: 60px 100px 0 100px; 
  position: relative;
  width: 1200px;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 10px 20px 0 20px;
  }
`
const hueRotate = keyframes`
	0% { 
    filter: hue-rotate(0deg) drop-shadow(0px 0px 30px #3ad1a969);
  }
	100% { 
    filter: hue-rotate(360deg) drop-shadow(0px 0px 30px #936ce75e);
  }
`

const BunnyWrapper = styled.div`
  width: 75%;
  position: relative;
  .line {
    position: absolute;
    top: 5px;
    left: 42px;
    animation: ${ hueRotate } 10s infinite ;
  }
  @media screen and (max-width: 500px) {
    left: 50%;
    width: 50%;
    top: 10%;
    position: absolute;
    z-index: 6;
    .line{
      left: 14px;
    }
  }
`

const TextWrapper = styled(Flex)`
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {

  }
`

const TopCard = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <Wrapper
        justifyContent="space-around"
        margin="0 auto"
      >
        <TextWrapper flexDirection="column"  style={{marginTop:'50px'}}>
          <Flex>
            <Heading scale="xl" color="#fff" mr="15px">
              {t('Your')}
            </Heading>
            <Heading scale="xl" color="#797dff">
              {t('All-Seasons')}
            </Heading>
          </Flex>
          <Heading scale="xl" color="#fff">
            {t('DeFi protocol')}.
          </Heading>
          <Flex flexWrap="wrap">
            <Text fontSize="16px" color="#797dff" mt="20px">
              {t('Trade, earn and wealth-grow')}
            </Text>
            <Text fontSize="16px" color="#414456" ml="5px" mt="20px">
              {t('in all seasons of the year.')}
            </Text>
          </Flex>
          <Flex mt="60px">
            <Link href="/swap" passHref><Button mr="20px">Go to App</Button></Link>
            <Button onClick={() => window.open("https://docs.ethwswap.com/")} style={{ backgroundColor: '#3B3C62' }}>Learn More</Button>
          </Flex>
        </TextWrapper>
        <BunnyWrapper>
          <Image className="winbg" src={'/images/home/season/winbg.svg'} width={635} height={450} />
          <Image className="line" src={'/images/home/season/line.svg'} width={503} height={390} />
        </BunnyWrapper>
      </Wrapper>
    </>
  )
}

export default TopCard
