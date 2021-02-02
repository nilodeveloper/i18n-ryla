 function getHeadersLanguages(headers){
    let lang = headers.split(",");
    lang = lang.map(lang.split(';')[0])
    console.log(lang)
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