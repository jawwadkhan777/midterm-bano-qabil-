export const exerciseOptions = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '68c827d74bmsh5f3e3358114e6fdp194a20jsnf382994411c5'
    }
  };



export const fetchData = async(url, options)=> {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}