import { GBProviderConfig } from '@store/providers'

export default function getProviders(): Promise<GBProviderConfig[]> {
  return Promise.resolve( [{
    name: 'github'
    , displayName: 'Github.com'
    , url: ''
    , active: false
    , token: ''
  }
  , {
    name: 'githubenterprise'
    , displayName: 'Github Enterprise'
    , url: ''
    , active: false
    , token: ''
  }])
}
