import axios from "axios";
import {receipeDetails, receipes} from "../assets/data";

const api = axios.create({
    baseURL: "https://api.spoonacular.com",
    headers: {
        "Content-Type": "application/json"
    }
})

export const getReceipesByIngredients = (ingredients, number = 10, ranking = 1, ignorePantry = true) => {
    //this is only for dev
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({status: 200, data: receipes})
    //     }, 0)
    // })
    return api.get(`/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}&ingredients=${ingredients.join()}&number=${number}&ranking=${ranking}&ignorePantry=${ignorePantry}`)
}

export const getReceipeById = (receipeId) => {
    //this is only for dev
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({status: 200, data: receipeDetails})
    //     }, 0)
    // })
    return api.get(`/recipes/${receipeId}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`)
}

