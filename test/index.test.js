'use strict'

import { Nodriza } from '../lib/index'
// import { expect } from 'chai'
// import _ from 'lodash'
const params = {
  hostname: 'bp.nodriza.io',
  accessToken: '-56a69869-bf0a-4650-98e9-fcd9680b31d5'
}
const nodriza = new Nodriza(params)

nodriza.api.user.me((err, profile) => {
  if (err) return console.log('->>> err:', err)
  console.log('->>> profile:', profile)
})

// describe('When user try to login with wrong password', function(){
//   it('should return an array', function() {
//  nodriza.api.user.login({username: 'jprieto@nodriza.io', password: 'xxx'}, (err, user) => {
//    expect(err, 'User can login with wrong password').to.exist()
//  })
//   })
// })

