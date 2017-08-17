const Nodriza = require('../lib/index')
console.log(Object.keys(Nodriza))
const params = {
  hostname: 'bp.nodriza.io',
  accessToken: '-56a69869-bf0a-4650-98e9-fcd9680b31d5'
}
const nodriza = new Nodriza(params)
nodriza.api.user.me((err, profile) => {
  if (err) return console.log('->>> err:', err)
  console.log('->>> profile:', profile)
})
