const Queries = 'http://api.themoviedb.org/3/search/movie?api_key=a049d6086798142f1ce78897272be805&query="'
const Queries2 = "/videos?api_key=a049d6086798142f1ce78897272be805&language=es";

export const getQuery = async (busqueda) =>{
    const resp = await fetch(Queries + busqueda + Queries2);
    const data = await resp.json();
    return data
  }

  export const getDatos = async (api, setPelis) =>{
    const resp = await fetch(api);
    const data = await resp.json()
    setPelis(data.results)
  }