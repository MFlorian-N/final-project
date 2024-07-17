import axios from "axios";

const api = axios.create({
    baseURL: "https://api.spoonacular.com",
    headers: {
        "Content-Type": "application/json"
    }
})

export const getReceipesByIngredients = (ingredients, number = 10, ranking = 1, ignorePantry = true) => {
    return api.get(`/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}&ingredients=${ingredients.join()}&number=${number}&ranking=${ranking}&ignorePantry=${ignorePantry}`)
}

export const getReceipeById = (receipeId) => {
    return api.get(`/recipes/${receipeId}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`)
}

