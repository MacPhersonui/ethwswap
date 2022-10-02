import styled from 'styled-components'
import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Link from 'next/link'
// import LangSelector from '../../../../packages/uikit/src/components/LangSelector/LangSelector'
// import { Box } from '../../../../packages/uikit/src/components/Box'

const FootWraper = styled(Flex)`
  background: #191b20;
  padding-bottom: 60px;
  @media screen and (max-width: 500px) {
    >div{
      width: 100% !important;
      padding: 0 10px;
      h2{
        font-size: 14px !important;
      }
      .operate{
        font-size: 12px !important;
      }
    }
  }
  .operate {
    cursor: pointer;
    :hover {
      color: #ffb237;
    }
  }
  .icon{
    opacity: 0.4;
    &:hover{
      opacity: 1;
    }
  }
`
const Logo = styled.div`
  background: url(/logo.png) no-repeat center;
  width: 150px;
  height: 25px;
  background-size: auto 100%;
  display: inline-block;
  vertical-align: middle;
  border-right: 1px solid #ffffff1f;
`
interface Language {
  code: string
  language: string
  locale: string
}
const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}))
const Footer = () => {
  const contacts = []
  for (let index = 1; index < 8; index++) {
    contacts.push(
      <img src={'/images/home/season/contact' + index + '.svg'} width={40} height={40} />,
    )
  }
  const { t } = useTranslation()

  return (
    <FootWraper>
      <Flex width="1200px" margin="0 auto" flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center">
          <a href={'/'}>
            <Logo />
          </a>
          <Flex alignItems="center">
            <a href="https://discord.gg/DMG9a9VuPa" target="_blank"><img className='icon' src={'/images/home/season/contact1_hover.svg'} width={40} height={40} /></a>
            <a href="https://twitter.com/ethw_swap" target="_blank"><img className='icon' src={'/images/home/season/contact5_hover.svg'} width={40} height={40} /></a>
            {/* <a href="https://medium.com/@seasonswap" target="_blank"><img className='icon' src={'/images/home/season/contact6_hover.svg'} width={40} height={40} /></a>
            <a href="https://github.com/ETHWSwap" target="_blank"><img className='icon' src={'/images/home/season/contact4_hover.svg'} width={40} height={40} /></a> */}
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDirection="column" mr="80px">
            <Heading scale="lg" color="#fff" mb="20px" mt="20px">
              {t('About')}
            </Heading>
            <Text onClick={() => { window.open("mailto:webmaster@example.com")}} className="operate" fontSize="16px" color="#414456" mb="10px">
              {t('Contact')}
            </Text>
            <Text className="operate" fontSize="16px" color="#414456" mb="10px">
              {t('SEA Token')}
            </Text>
          </Flex>
          <Flex flexDirection="column" mr="80px">
            <Heading scale="lg" color="#fff" mb="20px" mt="20px">
              {t('Help')}
            </Heading>
            <Text onClick={() => { window.open("https://docs.ethwswap.finance/")}} className="operate" fontSize="16px" color="#414456" mb="10px">
              {t('FAQ')}
            </Text>
            <Text onClick={() => { window.open("https://docs.ethwswap.finance/")} } className="operate" fontSize="16px" color="#414456" mb="10px">
              {t('Guides')}
            </Text>
          </Flex>
          <Flex flexDirection="column" mr="80px">
            <Heading scale="lg" color="#fff" mb="20px" mt="20px">
              {t('Developers')}
            </Heading>
            <Text onClick={() => { window.open("https://github.com")}} className="operate" fontSize="16px" color="#414456" mb="10px">
              {t('Contract')}
            </Text>
            <Text onClick={() => { window.open("https://github.com") }} className="operate" fontSize="16px" color="#414456" mb="10px">
              {t('Audit Report')}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </FootWraper>
  )
}

export default Footer
