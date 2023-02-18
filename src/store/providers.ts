import { debug } from 'console'

export interface GBProviderConfig {
  name: string;
  url: string;
  displayName: string;
  active: boolean;
  token: string;
}

export interface GBProviderState {
  providers: Map<string, GBProviderConfig>
}

const state = (): GBProviderState => ({
  providers: new Map<string, GBProviderConfig>()
})

const mutations = {
  initProviders(state: GBProviderState, payload: {providers: GBProviderConfig[]}) {
    payload.providers.forEach((p: GBProviderConfig) => {
      state.providers.set(p.name, p)
    })
  }
  , activate(state: GBProviderState, payload: {name: string, token: string}) {
    const provider = state.providers.get(payload.name)
    if(provider) {
      provider.active = true
      provider.token = payload.token
    }
  }
  , deactivate(state: GBProviderState, payload: {name: string}) {
    if (payload.name === '*'){
      for (const [_, providerValue] of state.providers) {
        if (providerValue.active) {
          providerValue.active = false
          providerValue.token = ''
        }
      }
      return
    }

    const provider = state.providers.get(payload.name)

    if (provider && provider.active) {
      provider.active = false
      provider.token = ''
    }
  }
}

const getters = {
  activeToken (state: GBProviderState) {
    for (const [_, providerValue] of state.providers) {
      if (providerValue.active) {
        return providerValue.token
      }
    }

    return null
  }
}

export default {
  state
  , mutations
  , getters
}
