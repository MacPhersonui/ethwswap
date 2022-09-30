import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Season Swap',
  description:'Season Swap',
  // image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ETHWSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('ETHWSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('ETHWSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('ETHWSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('ETHWSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('ETHWSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ETHWSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ETHWSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('ETHWSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ETHWSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('ETHWSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ETHWSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ETHWSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ETHWSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ETHWSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('ETHWSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('ETHWSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('ETHWSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('ETHWSwapInfo & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('ETHWSwapInfo & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('ETHWSwapInfo & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('ETHWSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('ETHWSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('ETHWSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('ETHWSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('ETHWSwap')}`,
      }
    default:
      return null
  }
}
