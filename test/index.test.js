'use strict'
import
import Nodriza from '../src'
// import { expect } from 'chai'
// import _ from 'lodash'

const params = {
  hostname: 'dev.nodriza.io',
  accessToken: '45881fa9-6e76-4e6d-b3f5-d12758308376'
}

const nodriza = new Nodriza(params)


	nodriza.api.user.me((err, profile) => {
	  if (err) return console.log('->>> err:', err)
	  console.log('->>> profile:', profile)
	})


nodriza.addListener('init', (url) => {
  console.log('--> Connecting to ' + url)
}, false)

nodriza.addListener('connect', () => {
  console.log('--> Connected...')
}, false)

nodriza.addListener('authenticated', (socketId) => {
  console.log('--> Socket authenticated > ' + socketId)
}, false)

nodriza.addListener('disconnect', () => {
  console.log('--> Disconnected on ' + new Date())
}, false)

nodriza.addListener('exec', (event) => {
  console.log(event)
}, false)

nodriza.connect()
