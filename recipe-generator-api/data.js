db.ingredients.insertMany([{name: "onion", category: "vegetables"},
{name: "tomato", category: "vegetables"},
{name: "potato", category: "vegetables"}]);



db.ingredients.insertMany([{name: "apple", category: "fruits"},
{name: "banana", category: "fruits"},
{name: "orange", category: "fruits"}]);


// dairy
db.ingredients.insertMany([{name: "sour cream", category: "dairy"},
{name: "ice cream", category: "dairy"},
{name: "custard", category: "dairy"},
{name: "parmesan", category: "dairy"},
{name: "cheddar", category: "dairy"},
{name: "american cheese", category: "dairy"},
{name: "cream cheese", category: "dairy"},
{name: "mozzarella", category: "dairy"},
{name: "whipped cream", category: "dairy"},
{name: "cottage cheese", category: "dairy"},
{name: "swiss cheese", category: "dairy"},
{name: "paneer", category: "dairy"},
{name: "ricotta", category: "dairy"}]);

db.ingredients.insert({name: "eggs", category: "dairy"});

//vegetables
db.ingredients.insertMany([{name: "garlic", category: "vegetables"},
{name: "carrot", category: "vegetables"},
{name: "basil", category: "vegetables"},
{name: "bell pepper", category: "vegetables"},
{name: "broccoli", category: "vegetables"},
{name: "mushroom", category: "vegetables"},
{name: "ginger", category: "vegetables"},
{name: "spinach", category: "vegetables"},
{name: "corn", category: "vegetables"},
{name: "celery", category: "vegetables"},
{name: "sweet potato", category: "vegetables"},
{name: "cucumber", category: "vegetables"},
{name: "olive", category: "vegetables"},
{name: "cilantro", category: "vegetables"},
{name: "avocado", category: "vegetables"},
{name: "eggplant", category: "vegetables"},
{name: "pumpkin", category: "vegetables"},
{name: "cabbage", category: "vegetables"},
{name: "okra", category: "vegetables"},
{name: "parsley", category: "vegetables"},
{name: "green beans", category: "vegetables"},
{name: "cauliflower", category: "vegetables"},
{name: "dill", category: "vegetables"},
{name: "chili pepper", category: "vegetables"}]);

//fruits
db.ingredients.insertMany([{name: "lemon", category: "fruits"},
{name: "lime", category: "fruits"},
{name: "strawberry", category: "fruits"},
{name: "pineapple", category: "fruits"},
{name: "blueberry", category: "fruits"},
{name: "coconut", category: "fruits"},
{name: "grape", category: "fruits"},
{name: "raspberry", category: "fruits"},
{name: "cranberry", category: "fruits"},
{name: "mango", category: "fruits"},
{name: "cherry", category: "fruits"},
{name: "watermelon", category: "fruits"},
{name: "kiwi", category: "fruits"},
{name: "pear", category: "fruits"},
{name: "peach", category: "fruits"},
{name: "raisin", category: "fruits"},
{name: "guava", category: "fruits"},
{name: "passion fruit", category: "fruits"},
{name: "honeydew", category: "fruits"},
{name: "blackberry", category: "fruits"},
{name: "grapefruit", category: "fruits"},
{name: "cantaloupe", category: "fruits"},
{name: "clementine", category: "fruits"},
{name: "papaya", category: "fruits"},
{name: "plantain", category: "fruits"},
{name: "apricot", category: "fruits"},
{name: "plum", category: "fruits"},
{name: "pomegranate", category: "fruits"},
{name: "dates", category: "fruits"},
{name: "berries", category: "fruits"},
{name: "mandarin", category: "fruits"}]);

//meat
db.ingredients.insertMany([{name: "bacon", category: "meat"},
{name: "turkey", category: "meat"},
{name: "lamb", category: "meat"},
{name: "rabbit", category: "meat"},
{name: "deer", category: "meat"},
{name: "quail", category: "meat"},
{name: "ostrich", category: "meat"},
{name: "veal", category: "meat"},
{name: "goose", category: "meat"},
{name: "boar", category: "meat"},
{name: "duck", category: "meat"}]);

//fish
db.ingredients.insertMany([{name: "tuna", category: "fish"},
{name: "salmon", category: "fish"},
{name: "cod", category: "fish"},
{name: "tilapia", category: "fish"},
{name: "halibut", category: "fish"},
{name: "catfish", category: "fish"},
{name: "mahi mahi", category: "fish"},
{name: "sole", category: "fish"},
{name: "pike", category: "fish"},
{name: "eel", category: "fish"},
{name: "monkfish", category: "fish"},
{name: "swordfish", category: "fish"},
{name: "red snapper", category: "fish"},
{name: "caviar", category: "fish"},
{name: "trout", category: "fish"},
{name: "haddock", category: "fish"},
{name: "mackerel", category: "fish"}]);

//seafood
db.ingredients.insertMany([{name: "shrimp", category: "seafood"},
{name: "crab", category: "seafood"},
{name: "prawns", category: "seafood"},
{name: "scallops", category: "seafood"},
{name: "clam", category: "seafood"},
{name: "lobster", category: "seafood"},
{name: "oyster", category: "seafood"},
{name: "squid", category: "seafood"},
{name: "mussel", category: "seafood"},
{name: "calamari", category: "seafood"},
{name: "crawfish", category: "seafood"},
{name: "octopus", category: "seafood"},
]);

//spices
db.ingredients.insertMany([{name: "cinnamon", category: "spices"},
{name: "oregano", category: "spices"},
{name: "chili powder", category: "spices"},
{name: "cumin", category: "spices"},
{name: "garlic powder", category: "spices"},
{name: "thyme", category: "spices"},
{name: "cayenne", category: "spices"},
{name: "nutmeg", category: "spices"},
{name: "curry powder", category: "spices"},
{name: "onion powder", category: "spices"},
{name: "bay leaf", category: "spices"},
{name: "sage", category: "spices"},
{name: "turmeric", category: "spices"},
{name: "coriander", category: "spices"},
{name: "cardamom", category: "spices"},
{name: "vanilla", category: "spices"},
{name: "paprika", category: "spices"},
{name: "italian seasoning", category: "spices"},
{name: "cloves", category: "spices"},
{name: "chives", category: "spices"},
{name: "peppercorn", category: "spices"},
{name: "cajun", category: "spices"},
{name: "saffron", category: "spices"},
{name: "chipotle", category: "spices"},
{name: "star anise", category: "spices"},
{name: "tamarind", category: "spices"},
{name: "garam masala", category: "spices"},
{name: "fenugreek", category: "spices"}]);

//condiments
db.ingredients.insertMany([{name: "mustard", category: "condiments"},
{name: "ketchup", category: "condiments"},
{name: "soy sauce", category: "condiments"},
{name: "hot sauce", category: "condiments"},
{name: "fish sauce", category: "condiments"},
{name: "vinegar", category: "condiments"},
{name: "mayonnaise", category: "condiments"},
{name: "balsamic vinegar", category: "condiments"},
{name: "worcestershire", category: "condiments"},
{name: "barbecue sauce", category: "condiments"},
{name: "ranch", category: "condiments"},
{name: "italian dressing", category: "condiments"},
{name: "tobasco", category: "condiments"},
{name: "sriracha", category: "condiments"},
{name: "wine vinegar", category: "condiments"},
{name: "apple cider vinegar", category: "condiments"},
{name: "teriyaki", category: "condiments"},
{name: "steak sauce", category: "condiments"},
{name: "tahini", category: "condiments"},
{name: "thousand island", category: "condiments"},
{name: "buffalo sauce", category: "condiments"},
{name: "oyster sauce", category: "condiments"},
{name: "honey mustard", category: "condiments"},
{name: "caesar dressing", category: "condiments"}
]);


//nuts
db.ingredients.insertMany([{name: "walnut", category: "nuts"},
{name: "almond", category: "nuts"},
{name: "peanut butter", category: "nuts"},
{name: "peanuts", category: "nuts"},
{name: "pecans", category: "nuts"},
{name: "cashew nuts", category: "nuts"},
{name: "pistachios", category: "nuts"},
{name: "flax", category: "nuts"},
{name: "hazelnut", category: "nuts"},
{name: "chest nut", category: "nuts"}]);

//sweeteners
db.ingredients.insertMany([{name: "sugar", category: "sweeteners"},
{name: "brown sugar", category: "sweeteners"},
{name: "honey", category: "sweeteners"},
{name: "maple syrup", category: "sweeteners"},
{name: "corn syrup", category: "sweeteners"},
{name: "confectioners sugar", category: "sweeteners"},
{name: "agave nectar", category: "sweeteners"},
{name: "molasses", category: "sweeteners"}]);

//baking and grains
db.ingredients.insertMany([{name: "rice", category: "baking and grains"},
{name: "pasta", category: "baking and grains"},
{name: "flour", category: "baking and grains"},
{name: "bread", category: "baking and grains"},
{name: "baking powder", category: "baking and grains"},
{name: "baking soda", category: "baking and grains"},
{name: "bread crumbs", category: "baking and grains"},
{name: "cornstarch", category: "baking and grains"},
{name: "rolled oats", category: "baking and grains"},
{name: "noodles", category: "baking and grains"},
{name: "yeast", category: "baking and grains"},
{name: "quinoa", category: "baking and grains"},
{name: "brown rice", category: "baking and grains"},
{name: "cake mix", category: "baking and grains"},
{name: "popcorn", category: "baking and grains"},
{name: "cereal", category: "baking and grains"},
{name: "biscuits", category: "baking and grains"},
{name: "ramen", category: "baking and grains"},
{name: "pancake mix", category: "baking and grains"},
{name: "cornmeal", category: "baking and grains"},
{name: "barley", category: "baking and grains"},
{name: "cornflour", category: "baking and grains"},
{name: "cornbread", category: "baking and grains"},
{name: "wheat", category: "baking and grains"},
{name: "rice flour", category: "baking and grains"},
{name: "basmati rice", category: "baking and grains"},
{name: "ravioli", category: "baking and grains"},
{name: "gnocchi", category: "baking and grains"},
{name: "semolina", category: "baking and grains"},
{name: "vermicelli", category: "baking and grains"},
{name: "bagel", category: "baking and grains"},
{name: "pizza dough", category: "baking and grains"},
{name: "pita", category: "baking and grains"},
{name: "risotto", category: "baking and grains"}]);


db.recipes.insert({
name: "Scrambled Eggs",
ingredients: ["eggs", "milk", "butter"],
procedure: ["BEAT eggs, milk, salt and pepper in medium bowl until blended.","HEAT butter in large nonstick skillet over medium heat until hot. POUR IN egg mixture. As eggs begin to set, GENTLY PULL the eggs across the pan with a spatula, forming large soft curds.","CONTINUE cooking – pulling, lifting and folding eggs – until thickened and no visible liquid egg remains. Do not stir constantly. REMOVE from heat. SERVE immediately."]
});


db.recipes.find({ingredients:{$not:{$elemMatch:{$nin:["milk","butter","eggs","salt"]}}}});
