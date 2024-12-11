// src/firestoreService.js

import { db } from '@/https/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export default {
  async getRecord(collectionName, fieldName, value) {
    try {
      // Create a query to find documents with the specific field value
      const colRef = collection(db, collectionName)
      const q = query(colRef, where(fieldName, '==', value))

      // Fetch the documents that match the query
      const snapshot = await getDocs(q)

      // Check if there are any documents returned
      if (!snapshot.empty) {
        // Retrieve the first matching document
        const doc = snapshot.docs[0]
        const documentData = { id: doc.id, ...doc.data() }

        console.log('Retrieved document:', documentData)
        return documentData
      } else {
        console.log('No document found with the specified field value.')
        return null
      }
    } catch (error) {
      console.error('Error retrieving document:', error)
      return null
    }
  },

  async filter(collectionName, fieldName, value) {
    try {
        // Reference the collection with a query
        const colRef = collection(db, collectionName);
        const q = query(colRef, where(fieldName, "==", value));
        
        // Retrieve matching documents
        const snapshot = await getDocs(q);
        
        // Map over snapshot to get document data
        const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        if (documents.length > 0) {
            console.log("Matching documents:", documents);
            return documents;
        } else {
            console.log("No documents found matching the criteria");
            return [];
        }
    } catch (error) {
        console.error("Error retrieving documents:", error);
        return [];
    }
}
}
