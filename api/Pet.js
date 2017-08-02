import u from '@/modules/Utils'
const tableName = 'pet'

export default {

  hello () {
    alert('hola mundo')
  }

  // logout () {
  //   this.delete('/v1/user/logout', (err, session) => {
  //     if (err) console.log(err)
  //     localStorage.removeItem('session')
  //     delete this.session
  //     u.goTo('login')
  //   })
  // }

  // isAuth () {
  //   if (!this.session) u.goTo('login')
  // }

  // resetPassword (body, callback) {
  //   let params = {
  //     url: '/v1/user/resetPassword',
  //     body
  //   }
  //   this.put(params, (err, session) => {
  //     if (err) return callback(err)
  //     callback(null, session)
  //   })
  // }
}
