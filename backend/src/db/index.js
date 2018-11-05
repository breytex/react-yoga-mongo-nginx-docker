import mongoose from 'mongoose'
import Post from './models/post'
import User from './models/user'

// SET UP Mongoose Promises.
mongoose.Promise = global.Promise


let connectionAttemptCounter = 1
export const startDB = (creds) => {
  return new Promise((resolve, reject)=>{
    const { user, pwd, url, db } = creds
    mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`)
      .then((...params) => {
        console.log("connection to mongodb successful")
        resolve(...params)
      })
      .catch(() => {
        if (connectionAttemptCounter <= 10) {
          connectionAttemptCounter++
          console.log("couldnt connect to mongodb. "+connectionAttemptCounter+". attempt in 10s ...")
          setTimeout(() => {
            startDB(creds).then(resolve).catch(reject)
          },10000)
        } else {
          reject()
        }
    })
  })
}
  
export const models = {
  Post, User,
}
