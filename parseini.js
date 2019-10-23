/*module.exports = function parseIni(content) {
    const lines = content.split("\n");
    const ini = {}
    const regexValue = /^([\w].+)=(.+)/gm;
    const regexKey = /^\[(.+)\]$/gm;
    let key = ""
    let value = ""

    for(const line of lines) {
        let keyMatch = regexKey.exec(line);
        let valueMatch = regexValue.exec(line);
        if(keyMatch !== null ) {
            key = keyMatch[1]
            //ini[key] = {keyMatch:line.split("=")}
        } else if (valueMatch !== null){
            value = valueMatch[1]
            ini[value] = {keyMatch:line.split('\n')}

        }
    }
    console.log(ini)
    return JSON.stringify(ini,key,2)
}*/

// Uniquement les key : values sans les "Titres" ex : [PHP]
//      const regex = /^([\w].+)=(.+)/gm; == regex du contenues "":""
//      const regex = /(^\[(.+)\])/gm; == regex des titres []
// regex du contenue

module.exports = function parseIni(content) {
    let m;
    const ini = {}
    const regex = /^([\w].+)=(.+)/gm;
    while ((m = regex.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        let key = ""
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if(groupIndex === 1) {
                key = match;
            } else if(groupIndex === 2) {
                value = match;
                ini[key] = value;
            }
        });
    }    return JSON.stringify(ini,null,2)
}

// tentative foireuse avec le méga reg ex complet 
//     const regex = /(^\[(.+)\])|(^([\w].+)=(.+))/gm;
// regex de fou furieux avec gr1 pour les titres [] et gr3 pour le contenue
/*module.exports = function parseIni(content) {
    let m;
    const ini = {}
    const regex = /(^\[(.+)\])|(^([\w].+)=(.+))/gm;
    while ((m = regex.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        let key = ""
        let value = ""
    
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if(groupIndex === 1) {
                key = match;}
            else if (groupIndex === 3){
                value = match;
                ini[key] = value;
            }
        });
    }    console.log(ini)
    return JSON.stringify(ini,null,2)
}*/
    
// Uniquement les key : values sans les "Titres" ex : [PHP]
//      const regex = /^([\w].+)=(.+)/gm; == regex du contenues "":""
//      const regex = /(^\[(.+)\])/gm; == regex des titres []
// regex du contenue

/*module.exports = function parseIni(content) {
    let m;
    let l;
    const ini = {}
    const res = {}
    let keys = ""
    const regexValue = /^([\w].+)=(.+)/gm;
    const regexKey = /(^\[(.+)\])/gm;
    while ((m = regexKey.exec(content)) !== null) {
        if (m.index === regexKey.lastIndex) {
            regexKey.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            if(groupIndex === 1) {
                keys = match;
            }
        });}
        while ((m = regexValue.exec(content)) !== null) {
        if (m.index === regexValue.lastIndex) {
            regexValue.lastIndex++;
        }
        let key = ""
        /*.forEach((match, groupIndex) => {
            if (groupIndex === 1)
        });
*//*
        m.forEach((match, groupIndex) => {
            if(groupIndex === 1) {
                key = match;
            } else if(groupIndex === 2) {
                value = match;
                ini[key] = value;
            }
        });
    }    return JSON.stringify(res,null,2)
}
*/