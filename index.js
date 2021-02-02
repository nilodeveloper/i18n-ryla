 function getHeadersLanguages(headers){
    let lang = headers.split(",");
    console.log('test',lang)
 }
 
 function i18n(req){
  try{
    const headers = getHeadersLanguages(req.headers["accept-language"])
    console.log(headers)
    let language = require(`../../languages/${headers}.json`)
    return language
  }catch(e){
    let language = require(`../../languages/pt-br.json`)
    return language
  }
}

module.exports = { 
  message: i18n
}