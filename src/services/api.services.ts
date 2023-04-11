
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

export const fetchData = async (userId: any = 1) => {

    return await fetch(
      //TODO: Development use - Will have to move this url in env
      `https://readiverse-1-default-rtdb.firebaseio.com/user.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  export const updateData = async (userId: any = 1, data: any) => {

    return await fetch(
      //TODO: Development use - Will have to move this url in env
      `https://readiverse-1-default-rtdb.firebaseio.com/user.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      },
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);
      });
  };