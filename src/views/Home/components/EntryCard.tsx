import { Image, Flex, Heading, Text, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { random } from 'lodash'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: -1;
  @media screen and (max-width: 500px) {
    position: absolute;
    z-index: 8;
    width: 70%;
    right: -16%;
    &::after{
      width: 80px !important;
    }
    .area {
      &::before {
        width: 50px !important;
        height: 70px !important;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    background: url('/images/home/season/cubebg.png');
    width: 303px;
    height: 299px;
    right: -60px;
    bottom: 10px;
    z-index: 9;
  }
  .area {
    position: relative;
    z-index: 12;
    &::before {
      content: '';
      position: absolute;
      background: url('/images/home/season/cube.gif') no-repeat center;
      width: 162px;
      height: 270px;
      background-size: 100% auto;
      left: 50%;
      transform: translate(-50%);
      top: 30px;
      z-index: 80;
    }
  }
`
const shine = keyframes`
	0% { 
    opacity: 0;
  }
	50% { 
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
`

const rotate = keyframes`
	0% { 
    transform: scale(1) rotateZ(0deg);
  }
  100% { 
    transform: scale(1.2) rotateZ(10deg);
  }
`


const ImageBg = styled.div`
  background: url('/images/home/season/swap_window_bg.png') no-repeat center;
  background-size: 100% auto;
  width: 640px;
  height: 420px;
  position: relative;
  z-index: 99;
  .swap_line{
    background: url('/images/home/season/swap_line.png') no-repeat center;
    background-size: 100% auto;
    width: 84%;
    height: 84%;
    position: absolute;
    z-index: 99;
    top: 10%;
    left: 8%;
    i{
      width: 18px;
      height: 18px;
      position: absolute;
      &:nth-child(even){
        background: url('/images/home/season/swap_dot_1.png') no-repeat center;
        background-size:100% auto ;
      }
      &:nth-child(odd){
        background: url('/images/home/season/swap_dot_2.png') no-repeat center;
        background-size:100% auto;
      }
      &:nth-child(1){
        left: 20%;
        top: 69%;
        animation: ${shine} 4s infinite -1s;
      }
      &:nth-child(2){
            left: 57%;
    top: 86%;
        animation: ${shine} 4s infinite -3.5s;

      }
      &:nth-child(3){
           left: 81.5%;
    top: 64%;
        animation: ${shine} 4s infinite -2s;
      }
      &:nth-child(4){
          left: 88.7%;
    top: 38%;
        animation: ${shine} 4s infinite -5s;

      }
      &:nth-child(5){
       left: 67.8%;
    top: 19.8%;
        animation: ${shine} 4s infinite -3s;

      }
      &:nth-child(6){
        left: 29.3%;
    top: 19.8%;
        animation: ${shine} 4s infinite -1.5s;
      }
      &:nth-child(7){
            left: 7.7%;
    top: 37.8%;
        animation: ${shine} 4s infinite -0.5s;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .swap_line{
        i{
          width: 6px;
          height: 6px;
          &:nth-child(1){
            left: 21%;
            top: 58%;
          }
          &:nth-child(2){
            left: 57.3%;
            top: 65.5%;
          }
          &:nth-child(3){
            left: 79.5%;
    top: 57.4%;
          }
          &:nth-child(4){
              left: 88.7%;
        top: 38%;

          }
          &:nth-child(5){
          left: 68.8%;
    top: 36.9%;

          }
          &:nth-child(6){
              left: 29.6%;
    top: 36.8%;
          }
          &:nth-child(7){
                left: 7.7%;
       top: 44.8%;
          }
        }
      }
  }
  .swap_bg{
    background: url('/images/home/season/swap_bg.png') no-repeat center;
    background-size: 100% auto;
    width: 60%;
    height: 60%;
    position: absolute;
    z-index: 99;
    top: 22%;
    left: 20%;
    .swap_arrow{
      background: url('/images/home/season/swap_arrow.png') no-repeat center;
      background-size: 100% auto;
      width: 23%;
      height: 40%;
      position: absolute;
      z-index: 99;
      top: 25%;
      left: 39%;
      animation: ${rotate} 2s infinite alternate;
    }
  }
`




const TextWrap = styled(Flex)`
  .line {
    width: 60px;
    height: 4px;
    background: #797dff;
    margin-bottom: 14px;
  }
  @media screen and (max-width: 500px) {
    width: 70%;
    position: relative;
    left: -14%;
    z-index: 9;
    div{
      font-size: 16px !important;
    }
    .detail{
      font-size: 12px !important;
    }
  }
`
const Entry = styled(Flex)`
  align-items: center;

  .entrance {
    padding-left: 40px;
    position: relative;
    cursor: pointer;
    &::before {
      content: '';
      width: 30px;
      height: 30px;
      position: absolute;
      background: url('/images/home/season/code.svg');
      background-size: 100% 100%;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  }
`
const EntryCard = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <Flex
        style={{ zIndex: 5, position: 'relative', alignItems: 'center', padding: '100px 20px' }}
        justifyContent="space-around"
        margin="0 auto"
      >
        <TextWrap width="45%" flexDirection="column">
          <div className="line" style={{ borderRadius: '100px', marginBottom: '15px' }}></div>
          <Text fontSize="20px" color="#fff" mr="15px">
            {t('Trade')}
          </Text>
          <Text fontSize="30px" color="#797dff" style={{ marginTop: '10px' }}>
            {t('Trade anything.')}
          </Text>
          <Text className='title' fontSize="30px" color="#797dff">
            {t('Any time, without any limitation.')}
          </Text>
          <Text className='detail' fontSize="18px" color="#414456" mt="20px">
            {t('Simply connect your wallet and trade any token on ETHW Chain in seconds.')}
          </Text>
          <Entry mt="40px">
            <Link href="/swap" passHref>
              <Text fontSize="20px" color="#fff" mr="15px" className="entrance">
                {t('Trade on ETHWSwap')} <i className="arrow">→</i>
              </Text>
            </Link>
          </Entry>
        </TextWrap>
        <ImageWrapper>
          <ImageBg>
            <div className="swap_line">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="swap_bg">
              <div className='swap_arrow'></div>
            </div>
          </ImageBg>
        </ImageWrapper>
      </Flex>
      <Flex
        style={{ zIndex: 5, position: 'relative', alignItems: 'center', padding: '0 20px' }}
        justifyContent="space-around"
        margin="0 auto"
      >
        <ImageWrapper>
          <Image className="area" src={'/images/home/season/areaout.png'} width={600} height={350} />
        </ImageWrapper>
        <TextWrap width="68%" flexDirection="column">
          <div className="line"></div>
          <Text fontSize="26px" color="#fff" mr="15px">
            {t('Plant')}
          </Text>
          <Text fontSize="30px" color="#797dff">
            {t('Plant your crypto')}
          </Text>
          <Text fontSize="30px" color="#797dff">
            {t('Wait it grow, and harvest any time.')}
          </Text>
          <Text fontSize="18px" color="#414456" mt="20px">
            {t('ETHWSwap makes it easy for you to farm with your crypto.')}
          </Text>
          <Entry mt="40px">
            <Link href="/swap" passHref>
              <Text fontSize="20px" color="#fff" mr="15px" className="entrance">
                {t('Plant on ETHWSwap')}  <i className="arrow">→</i>
              </Text>
            </Link>
          </Entry>
        </TextWrap>
      </Flex>
    </>
  )
}

export default EntryCard
