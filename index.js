const languageFolder = './languages';
const config = require('../../languages/config.json');
const fs = require('fs');

 function getHeadersLanguages(headers){
    let header = headers.split(",");
    let languages = []
    let lang_resem = []
    let names = []
    let names_resem = []
    
    fs.readdirSync(languageFolder).forEach(file => {
      names.push(file.split(".")[0])
      names_resem.push(file.split(".")[0].split('-')[0])
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

    if(config.resemblance){
      for(let i=0;i<languages.length;i++){
        lang_resem.push(languages[i].split('-')[0])
        if(lang_resem.includes(names_resem[i])){
          return names[i]
        }
      }
    }
 }
 
 function i18n(req, res, next){
  try{
    const headers = getHeadersLanguages(req.headers["accept-language"])
    let language = require(`../../languages/${headers}.json`)
    req.message = language
    req.language = language
    next()
  }catch(e){
    let default_language = config.default
    let language = require(`../../languages/${default_language}.json`)
    req.message = language
    req.language = language
    next()
  }
}

module.exports = { 
  message: i18n
}