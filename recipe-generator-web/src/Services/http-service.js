import 'whatwg-fetch';

class HttpService{
    getIngredients = (category) => {
        var promise = new Promise((resolve, reject) => {
            fetch("http://localhost:3000/recipe-generator/ingredients/"+category).then(response => {
                resolve(response.json());
            });
        });
        return promise;
    }
    
    getRecipes = (ingredients) => {
        var promise = new Promise((resolve, reject) => {
            fetch("http://localhost:3000/recipe-generator/get-recipe",{
                method: "POST",
                body: JSON.stringify(ingredients),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                resolve(response.json());
            });
        });
        return promise;
    }
}

export default HttpService;