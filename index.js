const languageFolder = './languages';
const config = require('../../languages/config.json');
const fs = require('fs');

 function getHeadersLanguages(headers){
    let header = headers.split(",");
    let languages = []
    let names = []
    
    fs.readdirSync(languageFolder).forEach(file => {
      names.push(file.split(".")[0])
    });

    header.forEach(lang => {
      if(lang){
        language = lang.toLowerCase()
        languages.push(language.split(";")[0])
      }
    })

    for(let i=0;i<languages.length;i++){
      if(names.includes(languages[i])){
        return languages[i]
      }
    }
 }
 
 function i18n(req){
  try{
    const headers = getHeadersLanguages(req.headers["accept-language"])
    let language = require(`../../languages/${headers}.json`)
    return language
  }catch(e){
    let default_language = config.default
    let language = require(`../../languages/${default_language}.json`)
    return language
  }
}

module.exports = { 
  message: i18n
}