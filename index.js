const testFolder = './languages';
const fs = require('fs');

 function getHeadersLanguages(headers){
    let header = headers.split(",");
    let languages = []
    let names = []
    
    fs.readdirSync(testFolder).forEach(file => {
      names.push(file.split(".")[0])
    });

    header.forEach(lang => {
      if(lang){
        language = lang.toLowerCase()
        languages.push(language.split(";")[0])
      }
    })
    console.log("languages", languages)

    for(let i=0;i<languages.length;i++){
      if(names.includes(languages[i])){
        return languages[i]
      }
    }
 }
 
 function i18n(req){
  try{
    const headers = getHeadersLanguages(req.headers["accept-language"])
    console.log('headers', headers)
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