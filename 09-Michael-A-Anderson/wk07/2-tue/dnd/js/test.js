$("#cocktails").on("submit",function(event){
    event.preventDefault();
    let $cocktail = $("#cocktail").val();
    $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${$cocktail}`).done(function(data){
        const drink = data.drinks[0];
        $("#name").html(drink.strDrink);
        $("#instructions").html(drink.strInstructions);
        $("#ingredients").html("");
        $("#cocktailImage").attr("src",drink.strDrinkThumb);
        for(let i=1;i<=15;i++){
            const ingredient = drink[`strIngredient${i}`];
            if(ingredient !== null ){
                $("#ingredients").append(`<li>${ingredient}</li>`);
            }else {
                break;
            }
        }
    });
})

