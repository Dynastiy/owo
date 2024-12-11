// import $request from '@/axios/index'
import { catchAxiosError, catchAxiosSuccess } from './response'
import { auth } from '@/https/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  async login(formData) {
    try {
      //   let res = await $request.post(`login`, formData)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      console.log(userCredential.user)
      catchAxiosSuccess('Welcome')
    //   toast.success('Welcome', {
    //     timeout: 4000
    //   })
      return userCredential.user
    } catch (error) {
    //   toast.error(error, {
    //     timeout: 4000
    //   })
      catchAxiosError(error)
      throw error
    }
  }
}
