 function i18n(req){
  try{
    const headers = (req.headers["accept-language"])
    .toString()
    .toLowerCase()
    .replace(/["]/g, "");
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