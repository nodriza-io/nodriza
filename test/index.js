'use strict'
import { Nodriza } from '../index'

const params = {
  hostname: 'bp.nodriza.io',
  storage: 'localStorage'
}
const nodriza = new Nodriza(params)

nodriza.api.user.login({username: 'jprieto@nodriza.io', password: 'xxxxxx'}, (err, user) => {
	console.log('->>> err:', err)
	console.log('->>> user:', user)
})
