// Toastify
import 'toastify-js/src/toastify.css'
import toastify from 'toastify-js'

import defaultImage from '@/assets/img/placeholder.webp'

// / Import Firebase and Firestore
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebaseApp from '@/https/firebase' // Import your Firebase configuration file

// Initialize Firestore
const firestore = getFirestore(firebaseApp)

// Import Services
import { services } from '@/services/services'
// Register all services globally

// Filters
import { currencyFormat, formatDate } from './filters'

const setupGlobalProperties = (app) => {
  app.config.globalProperties.$toastify = toastify
  app.config.globalProperties.$firestore = firestore
  app.config.globalProperties.$getDocs = getDocs
  app.config.globalProperties.$collection = collection
  app.config.globalProperties.$currencyFormat = currencyFormat
  app.config.globalProperties.$formatDate = formatDate
  Object.keys(services).forEach((key) => {
    app.config.globalProperties[`$${key}`] = services[key]
  })
  app.config.globalProperties.$defaultImage = defaultImage
}

export default setupGlobalProperties
