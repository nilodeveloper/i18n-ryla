const DEFAULT_LANGUAGE = 'pt-br'
function i18n(req){
    const headers = req.headers["accept-language"].toLowerCase()
    try{
        let language = require(path.resolve(__dirname, `./languages/${headers}.json`))
        return language
    }catch(e){
        let language = require(path.resolve(__dirname, `./languages/${DEFAULT_LANGUAGE}.json`))
        return language
    }
}

export { i18n };