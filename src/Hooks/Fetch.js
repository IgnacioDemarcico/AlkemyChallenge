const API2 = 'https://api.spoonacular.com/recipes'
const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=0cc22eb6e1284670be72ba7779ba6745'

export default async function Fetch(id) {
    var result
        const response = await fetch(API)
        result = await response.json()
        console.log(id)
    if (id) return result.results.find((plate) => plate.id === id)
    return  await result.results
}
export const FetchInformation = async (id) => {
    var result2
    const response = await fetch(API2 + `${id}` + `/information?apiKey=0cc22eb6e1284670be72ba7779ba6745&includeNutrition=true`)
    result2 = await response.json()
    if (id) return result2.results.find((plate) => plate.id === id)
    return  await result2.results
}

