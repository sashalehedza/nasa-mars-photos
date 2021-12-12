// import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()

// //const photosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9AHfZKRZ4uMNIyjEGWIcAC73qt6B7bDBCsddYMOy`
// export const getPhotos = async () => {
//   // let api_key = process.env.REACT_APP_API_KEY
//   let api_key
//   let photosUrl
//   if (api_key) {
//     photosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`
//     // } else if (!api_key) {
//     //   api_key = 'DEMO_KEY'
//     //   photosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`
//   } else if (!api_key) {
//     photosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9AHfZKRZ4uMNIyjEGWIcAC73qt6B7bDBCsddYMOy`
//   }

//   // console.log(api_key)
//   return await axios.get(`${photosUrl}`)
// }

import axios from 'axios'
//const photosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9AHfZKRZ4uMNIyjEGWIcAC73qt6B7bDBCsddYMOy`
export const getPhotos = async () => {
  // console.log(api_key)
  return await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9AHfZKRZ4uMNIyjEGWIcAC73qt6B7bDBCsddYMOy`
  )
}
