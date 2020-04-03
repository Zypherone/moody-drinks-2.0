        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        $("#name-search-btn").on("click", function(e) {
            e.preventDefault();

            $(".results").empty();

            let name = $("#name").val();
            
            
            console.log(name);
            let nameURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

            $.ajax({
                url: nameURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);

                let results = response.drinks;

                let resultsNew = shuffle(results);

                let drinkIngredient = "";
                let drinkMesurement = "";
                let ingredients = "";

                if (results !== null) {
                    for (i = 0; i < 5; i++) {
                    let drinkNameS = $("<p>").text(resultsNew[i].strDrink);
                    let drinkImageS = $("<img>").attr("src", resultsNew[i].strDrinkThumb);
                    let drinkInstrS = $("<p>").text(resultsNew[i].strInstructions);
                    let drinkIngredientS = $("<p>");
                    let drinkDivS = $("<div>");
                    
                    for (j = 1; j < 15; j++) {
                        if (resultsNew[i]["strIngredient" + j] != null) {
                        let drinkIngredient = resultsNew[i]["strIngredient" + j];
                        } else {
                        let drinkIngredient = "";
                        }

                        if (resultsNew[i]["strMeasure" + j] != null) {
                        let drinkMesurement = resultsNew[i]["strMeasure" + j];
                        } else {
                        let drinkMesurement = "";
                        }

                        if (drinkIngredient != "" || drinkMesurement != "") {
                        ingredients +=
                            "<span>" + drinkMesurement + " " + drinkIngredient + "</span>";
                        }
                    }

                    drinkIngredientS.text(ingredients);

                    let favouritesBtn = $("<button>").text("Favourites");
                    let tryBtn = $("<button>").text("Try It Later");

                    drinkDivS.append(drinkNameS, drinkImageS, drinkInstrS, drinkIngredientS, favouritesBtn, tryBtn);
                    $(".results").append(drinkDivS);
                }
                }

                else {
                    $(".results").html("No results returned!")
                }
            })
        })

        $(".clear").on("click", function() {
            $("#name").val("");
            $(".results").empty();
        })

        $("#ingredient-search-btn").on("click", function(e) {
            e.preventDefault();

            $(".results").empty();

            

            let listURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

            $.ajax({
                url: listURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);

                let results2 = response.drinks;

                let list = $("<ul>");
                let listEl = "";
                let ingrEl = "";

                for (let i = 0; i < results2.length; i++) {
                    let listEl = $("<li>");
                    let ingrEl = $("<button>").text(results2[i].strIngredient1);
                    ingrEl.addClass("btnStyle");
                    ingrEl.addClass("list-element");
                    listEl.append(ingrEl);
                    list.append(listEl);

                    
                    
                }
                $(".results").append(list);

                let choiceDisplay = $("<div>");
                $(".results").append(choiceDisplay);
                

                $(".list-element").on("click", function() {
                    
                    let ingr = $(this).text();
                    console.log(ingr);

                    let ingrURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingr;

                    let yourChoice = $("<div>");
                    

                    $.ajax({
                        url: ingrURL,
                        method: "GET"
                    }).then(function(response) {
                        console.log(response);

                        let results4 = response.drinks;

                        function shuffle(array) {
                        var currentIndex = array.length, temporaryValue, randomIndex;
                        // While there remain elements to shuffle...
                        while (0 !== currentIndex) {
                            // Pick a remaining element...
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            // And swap it with the current element.
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                        }

                        let results4New = shuffle(results4);

                        
                    

                        if (results4.length < 5) {
                            
                            let drinkNameS = $("<p>").text(results4New[0].strDrink);
                            let drinkImageS = $("<img>").attr("src", results4New[0].strDrinkThumb);
                            let id = results4[0].idDrink;
                            let drinkInstrS = $("<p>");

                            // let idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

                            // $.ajax({
                            //     url: idURL,
                            //     method: "GET"
                            // }).then(function(response) {
                            //     console.log(response);

                            //     drinkInstrS.text(response.drinks.strInstructions);
                            // })

                            let favouritesBtn = $("<button>").text("Favourites");
                            let tryBtn = $("<button>").text("Try It Later");

                            let drinkDivS = $("<div>");

                            // drinkDivS.append(drinkNameS, drinkImageS, drinkInstrS);
                            drinkDivS.append(drinkNameS, drinkImageS, favouritesBtn, tryBtn);
                            yourChoice.append(drinkDivS);
                        }

                        else {
                            for (i = 0; i < 5; i++) {
                            let drinkNameS = $("<p>").text(results4[i].strDrink);
                            let drinkImageS = $("<img>").attr("src", results4[i].strDrinkThumb);
                            let drinkDivS = $("<div>");

                            let favouritesBtn = $("<button>").text("Favourites");
                            let tryBtn = $("<button>").text("Try It Later");

                            drinkDivS.append(drinkNameS, drinkImageS, favouritesBtn, tryBtn);
                            yourChoice.append(drinkDivS);
                            }
                        }

                        
                        choiceDisplay.html(yourChoice);
                        

                        
                    })
                })
            })


            

            
        })

        $("#category-search-btn").on("click", function(e) {
            e.preventDefault();

            $(".results").empty();

            

            let categoryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

            $.ajax({
                url: categoryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);

                let results3 = response.drinks;

                

                let category = $("<ul>");
                let categoryEl = "";
                let cateEl = "";

                for (i = 0; i < results3.length; i++) {
                    let categoryEl = $("<li>");
                    let cateEl = $("<button>").text(results3[i].strCategory);
                    //cateEl.attr("type", "button");
                    cateEl.addClass("btnStyle");
                    cateEl.addClass("cate-element");
                    categoryEl.append(cateEl);
                    category.append(categoryEl);

                    
                    

                    
                }

                $(".results").append(category);
                let choiceDisplay = $("<div>");
                $(".results").append(choiceDisplay);

                $(".cate-element").on("click", function() {
                    
                    let cate = $(this).text();
                    console.log(cate);

                    let cateURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + cate;

                    let yourChoice = $("<div>");
                    

                    $.ajax({
                        url: cateURL,
                        method: "GET"
                    }).then(function(response) {
                        console.log(response);

                        let results5 = response.drinks;

                        var results5New = shuffle(results5);
                        
                        
                    

                        if (results5.length < 5) {
                            
                            let drinkNameS = $("<p>").text(results5[0].strDrink);
                            let drinkImageS = $("<img>").attr("src", results5[0].strDrinkThumb);
                            let drinkDivS = $("<div>");

                            let favouritesBtn = $("<button>").text("Favourites");
                            let tryBtn = $("<button>").text("Try It Later");

                            drinkDivS.append(drinkNameS, drinkImageS, favouritesBtn, tryBtn);
                            yourChoice.append(drinkDivS);
                        }

                        else {
                            

                            for (i = 0; i < 5; i++) {
                                let drinkNameS = $("<p>").text(results5[i].strDrink);
                                let drinkImageS = $("<img>").attr("src", results5[i].strDrinkThumb);
                                let drinkDivS = $("<div>");

                                let favouritesBtn = $("<button>").text("Favourites");
                                let tryBtn = $("<button>").text("Try It Later");

                                drinkDivS.append(drinkNameS, drinkImageS, favouritesBtn, tryBtn);
                                yourChoice.append(drinkDivS);
                            }

                            

                            

                            

                        }

                        
                        choiceDisplay.html(yourChoice);
                        

                    
                    })


                })
            })
        })

            
        

        
 

        

        
