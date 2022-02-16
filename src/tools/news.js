const request = require('request')
const news  = (callback) => {
  const url = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=5abef1652ccd46c7bd945aac32f6b022'
  request({url, json: true }, (error, response) => {

    if (error) {
      callback('unable to connect to news services', undefined)
    }
    else {
      callback(undefined,{news:response.body.articles})
    }
  })
}
module.exports = news