const axios = require('axios')
const { parse } = require('url')

const HTTPClient = axios.create({
  baseURL: 'https://api.redtube.com',
  params: {
    data: 'redtube.Videos.searchVideos',
    output: 'json',
    thumbsize: 'medium'
  }
})

module.exports = async (req, res) => {
  const { query } = parse(req.url, true)
  const { data: redtubeResponse } = await HTTPClient.get('/', { params: query })
  console.log('* Redtube response', redtubeResponse)
  res.end(JSON.stringify(redtubeResponse))
}
