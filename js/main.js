var recipes = [
  {
    title: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    image: "./imgs/photo-1633504581786-316c8002b1b9.avif",
    badge1: "Easy",
    badge2: "Seafood",
    rating: "4.8",
    reviewsCount: "(356 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    calories: "520 kcal",
    protein: "36g",
    carbs: "54g",
    fat: "18g",
    fiber: "3g",
    sodium: "620mg",
    chefTips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  {
    title: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    image: "./imgs/photo-1546069901-eacef0df6022.avif",
    badge1: "Easy",
    badge2: "Asian",
    rating: "4.7",
    reviewsCount: "(367 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    calories: "540 kcal",
    protein: "42g",
    carbs: "58g",
    fat: "14g",
    fiber: "4g",
    sodium: "1240mg",
    chefTips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    title: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    image: "./imgs/photo-1559314809-0d155014e29e.avif",
    badge1: "Intermediate",
    badge2: "Asian",
    rating: "4.8",
    reviewsCount: "(445 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    calories: "540 kcal",
    protein: "32g",
    carbs: "62g",
    fat: "16g",
    fiber: "4g",
    sodium: "1120mg",
    chefTips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  {
    title: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "./imgs/photo-1574071318508-1cdbab80d002.avif",
    badge1: "Intermediate",
    badge2: "Italian",
    rating: "4.9",
    reviewsCount: "(512 reviews)",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    calories: "580 kcal",
    protein: "24g",
    carbs: "68g",
    fat: "22g",
    fiber: "4g",
    sodium: "920mg",
    chefTips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    title: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image: "./imgs/photo-1455619452474-d2be8b1e70cd.avif",
    badge1: "Intermediate",
    badge2: "Asian",
    rating: "4.7",
    reviewsCount: "(312 reviews)",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves"
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
    ],
    calories: "420 kcal",
    protein: "26g",
    carbs: "22g",
    fat: "26g",
    fiber: "5g",
    sodium: "890mg",
    chefTips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce"
    ]
  },
  {
    title: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    image: "./imgs/photo-1509722747041-616f39b57569.avif",
    badge1: "Easy",
    badge2: "Italian",
    rating: "4.5",
    reviewsCount: "(189 reviews)",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately."
    ],
    calories: "480 kcal",
    protein: "22g",
    carbs: "48g",
    fat: "22g",
    fiber: "3g",
    sodium: "680mg",
    chefTips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich"
    ]
  },
  {
    title: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    image: "./imgs/photo-1601050690597-df0568f70950.avif",
    badge1: "Intermediate",
    badge2: "Mediterranean",
    rating: "4.8",
    reviewsCount: "(234 reviews)",
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil"
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
    ],
    calories: "580 kcal",
    protein: "36g",
    carbs: "32g",
    fat: "32g",
    fiber: "8g",
    sodium: "820mg",
    chefTips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving"
    ]
  },
  {
    title: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "./imgs/photo-1612874742237-6526221588e3.avif",
    badge1: "Easy",
    badge2: "Italian",
    rating: "4.8",
    reviewsCount: "(234 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
    ],
    calories: "520 kcal",
    protein: "28g",
    carbs: "62g",
    fat: "18g",
    fiber: "3g",
    sodium: "680mg",
    chefTips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only"
    ]
  },
  {
    title: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    image: "./imgs/photo-1603133872878-684f208fb84b.avif",
    badge1: "Easy",
    badge2: "Asian",
    rating: "4.5",
    reviewsCount: "(324 reviews)",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated"
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles."
    ],
    calories: "320 kcal",
    protein: "34g",
    carbs: "18g",
    fat: "12g",
    fiber: "5g",
    sodium: "840mg",
    chefTips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch"
    ]
  },
  {
    title: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    image: "./imgs/photo-1565299585323-38d6b0865b47.avif",
    badge1: "Easy",
    badge2: "American",
    rating: "4.6",
    reviewsCount: "(278 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa"
    ],
    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
    ],
    calories: "420 kcal",
    protein: "26g",
    carbs: "32g",
    fat: "20g",
    fiber: "4g",
    sodium: "780mg",
    chefTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option"
    ]
  },
  {
    title: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image: "./imgs/photo-1467003909585-2f8a72700288.avif",
    badge1: "Easy",
    badge2: "Seafood",
    rating: "4.9",
    reviewsCount: "(187 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced"
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
    ],
    calories: "380 kcal",
    protein: "35g",
    carbs: "28g",
    fat: "14g",
    fiber: "0g",
    sodium: "720mg",
    chefTips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal"
    ]
  },
  {
    title: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    image: "./imgs/photo-1529692236671-f1f6cf9683ba.avif",
    badge1: "Easy",
    badge2: "American",
    rating: "4.7",
    reviewsCount: "(412 reviews)",
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving"
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top."
    ],
    calories: "620 kcal",
    protein: "48g",
    carbs: "52g",
    fat: "22g",
    fiber: "3g",
    sodium: "1180mg",
    chefTips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months"
    ]
  },
  {
    title: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    image: "./imgs/photo-1568901346375-23c9450c58cd.avif",
    badge1: "Easy",
    badge2: "American",
    rating: "4.6",
    reviewsCount: "(421 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments"
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
    ],
    calories: "650 kcal",
    protein: "38g",
    carbs: "42g",
    fat: "35g",
    fiber: "2g",
    sodium: "920mg",
    chefTips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor"
    ]
  },
  {
    title: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    image: "./imgs/photo-1546793665-c74683f339c1.avif",
    badge1: "Easy",
    badge2: "Mediterranean",
    rating: "4.4",
    reviewsCount: "(198 reviews)",
    prepTime: "15 min",
    cookTime: "0 min",
    servings: "2 people",
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper"
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using."
    ],
    calories: "320 kcal",
    protein: "12g",
    carbs: "18g",
    fat: "22g",
    fiber: "3g",
    sodium: "680mg",
    chefTips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve"
    ]
  },
  {
    title: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "./imgs/photo-1547592166-23ac45744acd.avif",
    badge1: "Intermediate",
    badge2: "Mediterranean",
    rating: "4.7",
    reviewsCount: "(267 reviews)",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated"
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
    ],
    calories: "380 kcal",
    protein: "18g",
    carbs: "36g",
    fat: "18g",
    fiber: "4g",
    sodium: "980mg",
    chefTips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning"
    ]
  }
];

var currentIndex = 0;

function displayRecipe(index) {
  currentIndex = index;

  var recipe = recipes[index];

  document.getElementById("recipe-title").innerHTML = recipe.title;
  document.getElementById("recipe-description").innerHTML = recipe.description;

  var imgElement = document.getElementById("recipe-image");
  if (imgElement) {
    imgElement.src = recipe.image;
  }

  if (document.getElementById("recipe-rating")) {
    document.getElementById("recipe-rating").innerHTML = recipe.rating;
  }
  if (document.getElementById("recipe-reviews")) {
    document.getElementById("recipe-reviews").innerHTML = recipe.reviewsCount;
  }
  if (document.getElementById("prep-time")) {
    document.getElementById("prep-time").innerHTML = recipe.prepTime;
  }
  if (document.getElementById("cook-time")) {
    document.getElementById("cook-time").innerHTML = recipe.cookTime;
  }
  if (document.getElementById("servings")) {
    document.getElementById("servings").innerHTML = recipe.servings;
  }

  var badgesHTML =
    '<span class="badge badge-1">' +
    recipe.badge1 +
    "</span>" +
    '<span class="badge badge-2">' +
    recipe.badge2 +
    "</span>";
  if (document.getElementById("recipe-badges")) {
    document.getElementById("recipe-badges").innerHTML = badgesHTML;
  }

  if (recipe.prepTime == "90 min" || parseInt(recipe.cookTime) > parseInt("25 min")) {
    document.getElementById("alert-text").innerHTML = `<div class="costumize">
          <span><i class="fa-solid fa-triangle-exclamation"></i></span>
          <div>
          <p class="par-1">Extended Preparation Time</p>
          <p class="par-2">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
        </div>
        </div>`;
  } else {
    document.getElementById("alert-text").innerHTML = "";
  }

  var ingredientsHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredientsHTML +=
      "<li><div>" +
      (i + 1) +
      "</div><span>" +
      recipe.ingredients[i] +
      "</span></li>";
  }
  if (document.getElementById("recipe-ingredients")) {
    document.getElementById("recipe-ingredients").innerHTML = ingredientsHTML;
  }

  var instructionsHTML = "";
  for (var j = 0; j < recipe.instructions.length; j++) {
    instructionsHTML +=
      '<div class="d-flex align-items-center mb-4">' +
      '<div class="number"><span>' +
      (j + 1) +
      "</span></div>" +
      '<div class="parg-1"><p>' +
      recipe.instructions[j] +
      "</p></div>" +
      "</div>";
  }
  if (document.getElementById("recipe-instructions")) {
    document.getElementById("recipe-instructions").innerHTML = instructionsHTML;
  }

  if (document.getElementById("nutr-calories"))
    document.getElementById("nutr-calories").innerHTML = recipe.calories;
  if (document.getElementById("nutr-protein"))
    document.getElementById("nutr-protein").innerHTML = recipe.protein;
  if (document.getElementById("nutr-carbs"))
    document.getElementById("nutr-carbs").innerHTML = recipe.carbs;
  if (document.getElementById("nutr-fat"))
    document.getElementById("nutr-fat").innerHTML = recipe.fat;
  if (document.getElementById("nutr-fiber"))
    document.getElementById("nutr-fiber").innerHTML = recipe.fiber;
  if (document.getElementById("nutr-sodium"))
    document.getElementById("nutr-sodium").innerHTML = recipe.sodium;

  var tipsHTML = "";
  for (var k = 0; k < recipe.chefTips.length; k++) {
    tipsHTML +=
      '<div class="chef-tips">' +
      '<div><i class="fa-solid fa-circle-check"></i></div>' +
      "<p>" +
      recipe.chefTips[k] +
      "</p>" +
      "</div>";
  }
  if (document.getElementById("recipe-chef-tips-container")) {
    document.getElementById("recipe-chef-tips-container").innerHTML = tipsHTML;
  }
}

function getRandomRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);

  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * recipes.length);
  }

  displayRecipe(randomIndex);
}

var nextBtn = document.getElementById("btn-next-recipe");
if (nextBtn) {
  nextBtn.onclick = getRandomRecipe;
}

displayRecipe(0);
