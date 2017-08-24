const Nodriza = require('../index')
const params = {
  hostname: 'bp.nodriza.io',
  accessToken: '56a69869-bf0a-4650-98e9-fcd9680b31d5'
}

const nodriza = new Nodriza(params)
/*
nodriza.api.user.me((err, profile) => {
  if (err) return console.log('->>> err:', err)
  console.log('->>> profile:', profile)
})
*/
nodriza.addListener('init', (url) => {
    console.log('Connecting to '.green, url)
}, false)

nodriza.addListener('connect', (socketId) => {
    console.log('Connected...')
}, false)

nodriza.addListener('authenticated', (socketId) => {
    console.log('--> Socket authenticated > ' + socketId)
}, false)

nodriza.addListener('disconnect', () => {
    console.log('--> Disconnected on ' + new Date())
}, false)

nodriza.addListener('exec', (event) => {
    console.log('--> Exec')
}, false)

nodriza.connect()
