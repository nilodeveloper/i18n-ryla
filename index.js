 function message(req){
  const headers = (req.headers["accept-language"]).toString()
  try{
    let language = require(`../../languages/${headers}.json`)
    return language
  }catch(e){
    let language = require(`../../languages/pt-br.json`)
    return language
  }
}

module.exports = { 
  i18n: message
}