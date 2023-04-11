export const fetchDictionaryData = (data: any) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f01f620cabmsh14f0b90f280c52fp124b07jsn65de4e6e0870',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };
    
    return fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${data}`, options)
}

