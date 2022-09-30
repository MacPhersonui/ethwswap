import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none !important;
  border-radius: 0 !important;
  border-top-left-radius: 12px !important;
  border-bottom-left-radius: 12px !important;
  width: 100%;
  padding-top: 36px;
  ${({ theme }) => theme.mediaQueries.sm} {
    box-shadow: 0px 2px 15px #0000002b;
    padding-top: 8px;
    background: ${({ $isDark }) => ($isDark ? 'rgba(39, 38, 44, 0.5)' : '#1e1d22')};
    border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '16px')};
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? 'calc(100vh - 100px)' : '516px')};
  }
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
