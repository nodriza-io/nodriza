'use strict'
import { Nodriza } from '../lib/index'
import localStorage from '../lib/nodeLocalStorage'
import { expect } from 'chai'

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
// describe('When user try to login with wrong password', function(){
//   it('should return an array', function() {
// 	nodriza.api.user.login({username: 'jprieto@nodriza.io', password: 'xxx'}, (err, user) => {
// 		expect(err, 'User can login with wrong password').to.exist()
// 	})
//   })
// })