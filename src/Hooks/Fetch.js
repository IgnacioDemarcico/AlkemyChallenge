//https://api.spoonacular.com/food/menuItems/{id}
const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=0cc22eb6e1284670be72ba7779ba6745'

export default async function Fetch(id) {
    var result
        const response = await fetch(API)
        result = await response.json()
    if (id) return result.results.find((plate) => plate.id === id)
    return result.results
}