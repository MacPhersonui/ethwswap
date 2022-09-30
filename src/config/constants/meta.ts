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
        title: `${t('Home')} | ${t('SeasonSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SeasonSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SeasonSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SeasonSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SeasonSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SeasonSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SeasonSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SeasonSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SeasonSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SeasonSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SeasonSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SeasonSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SeasonSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SeasonSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SeasonSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SeasonSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SeasonSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SeasonSwap')}`,
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
        title: `${t('Overview')} | ${t('SeasonSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SeasonSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('SeasonSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('SeasonSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SeasonSwap')}`,
      }
    default:
      return null
  }
}
