

function normalizeURL(url) {
    const urlToNormalize = new URL(url)
    if (urlToNormalize.pathname != '/') return urlToNormalize.host + urlToNormalize.pathname
    return urlToNormalize.host 
}


module.exports = {
    normalizeURL
  }