'use strict'
import { Nodriza } from '../index'
import localStorage from '../NodeLocalStorage'

const params = {
  hostname: 'bp.nodriza.io',
  localStorage
}
const nodriza = new Nodriza(params)

nodriza.api.user.login({username: 'jprieto@nodriza.io', password: 'xxx'}, (err, user) => {
	if (err) return console.log('->>> err:', err)
	console.log('->>> user:', user)
	nodriza.session.set(user)
	console.log('->>> obj:', nodriza.session.get(user))
})
