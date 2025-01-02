// src/firestoreService.js
import { storage } from '@/https/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { db } from '@/https/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { catchAxiosError, catchAxiosSuccess } from './response'

export default {
  async uploadImage(file) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User is logged in:', user)
      } else {
        console.log('No user logged in.')
      }
    })
    try {
      const storageRef = ref(storage, `images/${file.name}`)
      const snapshot = await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(snapshot.ref)
      console.log('Image uploaded, URL:', downloadURL)
      return downloadURL
    } catch (error) {
      console.error('Error uploading image:', error)
      throw error
    }
  },

  async create(data, imageUrl) {
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        ...data,
        imageUrl, // Add image URL to the document
        createdAt: new Date().toISOString()
      })
      console.log('Document added with ID:', docRef.id)
      catchAxiosSuccess('News Created')
      return docRef.id
    } catch (error) {
      console.error('Error adding document:', error)
      catchAxiosError('News not created')
      throw error
    }
  },

  async list() {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'))
      const members = []
      querySnapshot.forEach((doc) => {
        members.push(doc.data())
      })
      console.log(members, 'kkkk')
      return members
    } catch (error) {
      console.error('Error fetching members:', error)
    }
  }
}
