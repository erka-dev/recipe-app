// This is your "Recipe List" - The heart of your app
export const recipes = [
    {
        id: "rec-001",
        title: "Classic Spanish Tortilla",
        prepTime: 30,
        difficulty: "Intermediate",
        calories: 450,
        costLevel: "$",
        ingredients: [
            { name: "Eggs", amount: "4 large" },
            { name: "Potatoes", amount: "500g" },
            { name: "Onion", amount: "1 medium" }
        ],
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=500" // Temporary placeholder image
    },
    {
        id: "rec-002",
        title: "Healthy Greek Salad",
        prepTime: 10,
        difficulty: "Easy",
        calories: 250,
        costLevel: "$$",
        ingredients: [
            { name: "Cucumber", amount: "1 large" },
            { name: "Feta Cheese", amount: "100g" },
            { name: "Olives", amount: "50g" }
        ],
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=500"
    }
];