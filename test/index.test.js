'use strict'

import localStorage from '../lib/nodeLocalStorage'
import { Nodriza } from '../lib/index'
// import { expect } from 'chai'
// import _ from 'lodash'

// Set local storage trasporter for node client
global.localStorage = localStorage
const params = {
  hostname: 'bp.nodriza.io'
}
const nodriza = new Nodriza(params)

for (let i in nodriza) {
  let obj = nodriza[i]
  console.log('\nnodriza.' + i, '-->', typeof obj)
  // if (_.isObject(obj)) { 
  //  for (let j in obj) {
  //    console.log(' nodriza.' + i + '.' + j, '-->',typeof obj[j])
  //  }
  // }
}
console.log('->>> nodriza.api.user:', nodriza.api.user.get)
nodriza.api.user.login({username: 'jprieto@nodriza.io', password: 'Shox009_'}, (err, user) => {
  if (err) return console.log('->>> err:', err)
  console.log('->>> user:', user)
  nodriza.session.set(user)
  console.log('->>> obj:', nodriza.session.get(user))
})
// describe('When user try to login with wrong password', function(){
//   it('should return an array', function() {
//  nodriza.api.user.login({username: 'jprieto@nodriza.io', password: 'xxx'}, (err, user) => {
//    expect(err, 'User can login with wrong password').to.exist()
//  })
//   })
// })