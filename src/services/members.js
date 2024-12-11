// src/firestoreService.js
import { storage } from '@/https/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { db } from '@/https/firebase'
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore'

export default {
  async uploadUserImage(file) {
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

  async addDocumentWithImage(data, imageUrl) {
    try {
      const docRef = await addDoc(collection(db, 'members'), {
        ...data,
        imageUrl, // Add image URL to the document
        createdAt: new Date().toISOString()
      })
      console.log('Document added with ID:', docRef.id)
      return docRef.id
    } catch (error) {
      console.error('Error adding document:', error)
      throw error
    }
  },

  async fetchMembers() {
    try {
      const querySnapshot = await getDocs(collection(db, 'members'))
      const members = []
      querySnapshot.forEach((doc) => {
        members.push(doc.data())
      })
      console.log(members, 'kkkk')
      return members
    } catch (error) {
      console.error('Error fetching members:', error)
    }
  },

  async getMember(documentId) {
    try {
      const docRef = doc(db, 'members', documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        return docSnap.data(); // Return the document data
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving document:', error);
      throw error;
    }
  }
}
