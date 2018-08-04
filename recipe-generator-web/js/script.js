var dairyLoaded = false;
var meatLoaded = false;
var vegetablesLoaded = false;
var fruitsLoaded = false;
var fishLoaded = false;
var seafoodLoaded = false;
var spicesLoaded = false;
var condimentsLoaded = false;
var nutsLoaded = false;
var sweetenersLoaded = false;
var bakingAndGrainsLoaded = false;

function dropDownClicked(button){
    switch(button.value){
        case "dairy":
            if(!dairyLoaded){
                getData(button.value,"#dairyIngredients");
                dairyLoaded = true;
            }
            break;
        case "meat":
            if(!meatLoaded){
                getData(button.value,"#meatIngredients");
                meatLoaded = true;
            }
            break;
        case "vegetables":
            if(!vegetablesLoaded){
                getData(button.value,"#vegetableIngredients");
                vegetablesLoaded = true;
            }
            break;
        case "fruits":
            if(!fruitsLoaded){
                getData(button.value,"#fruitIngredients");
                fruitsLoaded = true;
            }
            break;
        case "fish":
            if(!fishLoaded){
                getData(button.value,"#fishIngredients");
                fishLoaded = true;
            }
            break;
        case "seafood":
            if(!seafoodLoaded){
                getData(button.value,"#seafoodIngredients");
                seafoodLoaded = true;
            }
            break;
        case "spices":
            if(!spicesLoaded){
                getData(button.value,"#spiceIngredients");
                spicesLoaded = true;
            }
            break;
        case "condiments":
            if(!condimentsLoaded){
                getData(button.value,"#condimentsIngredients");
                condimentsLoaded = true;
            }
            break;
        case "nuts":
            if(!nutsLoaded){
                getData(button.value,"#nutsIngredients");
                nutsLoaded = true;
            }
            break;
        case "sweeteners":
            if(!sweetenersLoaded){
                getData(button.value,"#sweetenersIngredients");
                sweetenersLoaded = true;
            }
            break;
        case "baking and grains":
            if(!bakingAndGrainsLoaded){
                getData(button.value,"#bakingAndGrainsIngredients");
                bakingAndGrainsLoaded = true;
            }
            break;
    }
}

function getData(category, id){
    var request = new XMLHttpRequest();
    var baseURL = "http://localhost:3000/recipe-generator/ingredients/";

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", baseURL+category, true);
    request.send();

    getElements = function(ingredients){
        $.each(ingredients, function(){
            var checkBoxContainer = $('<div class="custom-control custom-checkbox"></div>');
            var checkBox = $('<input type="checkbox" class="custom-control-input ingredient" value="'+this.name+'" id="'+this.name+'">');
            var label = $('<label class="custom-control-label" for="'+this.name+'">'+this.name+'</label>');
            checkBoxContainer.append(checkBox);
            checkBoxContainer.append(label);
            $(id).append(checkBoxContainer);
        });
    }
}

function getRecipe(){
    $('#recipesCol').empty();
    
    var data = {};
    data.ingredientsList = [];
    $.each($('.ingredient'), function(){
        if(this.checked){
            data.ingredientsList.push(this.value);
        }
    });
    if(data.ingredientsList.length === 0){
        alert("Please select ingredients");
        return;
    }
    var json = JSON.stringify(data);

    var request = new XMLHttpRequest();
    var url = "http://localhost:3000/recipe-generator/get-recipe";

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("POST", url, true);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send(json);

    getElements = function(recipes){
        $('#recipesCol').append('<h2 class="display-4 recipesHeader">Your Recipes</h2>');
        $.each(recipes, function(index){
            var card = $('<div class="card" style="width: 22rem;"></div>');
            var imgConatiner = $('<div class="imgContainer"></div>');
            imgConatiner.append('<img class="card-img-top img-fluid recipeImg" src="' + this.imageURL + '" alt="Card image cap">');
            card.append(imgConatiner);
            var cardBody = $('<div class="card-body"></div>');
            cardBody.append('<label>'+this.name+' </label><button type="button" class="btn btn-sm viewRecipeBtn" data-toggle="modal" data-target="#modal'+index+'">View recipe</button>');
            card.append(cardBody);
            $('#recipesCol').append(card);
            
            var modal = $('<div class="modal fade" id="modal'+index+'" tabindex="-1" role="dialog" aria-labelledby="modal'+index+'Label" aria-hidden="true"></div>');
            var modalDialog = $('<div class="modal-dialog" role="document"></div>');
            var modalContent = $('<div class="modal-content"></div>');
            var modalHeader = $('<div class="modal-header"></div>');
            modalHeader.append('<h5 class="modal-title" id="modal'+index+'Label">Procedure</h5>');
            modalHeader.append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
            modalContent.append(modalHeader);
            var modalBody = $('<div class="modal-body"></div>')
            for(var ind=0; ind<this.procedure.length; ind++){
                modalBody.append('<p>'+this.procedure[ind]+'</p>');
            }
            modalContent.append(modalBody);
            var modalFooter = $('<div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div>');
            modalContent.append(modalFooter);
            modalDialog.append(modalContent);
            modal.append(modalDialog);
            $('#recipesCol').append(modal);
        });
    }
}

