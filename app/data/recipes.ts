// "export" makes this data accessible to your page files
// "const" means this list is a fixed set of data (a constant)
// "recipes" is the name of our variable
// ": Recipe[]" is a TypeScript "Type". It tells the computer: 
// "This variable must strictly follow the structure defined in the Recipe blueprint below."
export const recipes: Recipe[] = [
    {
        id: 'rec-001', // A unique identifier used to create the specific URL for this recipe
        title: 'Classic Spinach & Feta Tortilla', // The name displayed on the card
        prepTime: 15, // Numerical value representing minutes
        difficulty: 'Easy', // A label to help the user gauge the effort required
        calories: 320, // Health data for the user
        // An image URL (can be a link or a local path)
        image: 'https://images.unsplash.com/photo-1599921841143-8190e5a5c0bb?q=80&w=800',
        // "ingredients" is a nested list (an array inside an object)
        ingredients: [
            { name: 'Fresh Spinach', amount: '2 cups' }, // Each ingredient is its own small object
            { name: 'Feta Cheese', amount: '50g' },
            { name: 'Eggs', amount: '2 large' },
            { name: 'Whole Wheat Tortilla', amount: '1' }
        ]
    },
    {
        id: 'rec-002',
        title: 'Mediterranean Quinoa Salad',
        prepTime: 20,
        difficulty: 'Medium',
        calories: 450,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800',
        ingredients: [
            { name: 'Quinoa', amount: '1 cup' },
            { name: 'Cherry Tomatoes', amount: '10' },
            { name: 'Cucumber', amount: '1/2' },
            { name: 'Olive Oil', amount: '2 tbsp' }
        ]
    }
];

// "type" is a TypeScript feature. It creates a "Blueprint" or "Contract".
// As a PO, think of this as your "Data Schema". 
// It ensures that every developer (or AI) follows the same rules when adding a new recipe.
export type Recipe = {
    id: string; // Must be text
    title: string; // Must be text
    prepTime: number; // Must be a number
    difficulty: 'Easy' | 'Medium' | 'Hard'; // Must be one of these three specific words
    calories: number; // Must be a number
    image: string; // Must be a text link
    ingredients: Ingredient[]; // Must be a list of items that follow the Ingredient blueprint
};

// This is a sub-blueprint used specifically for the ingredients list above
export type Ingredient = {
    name: string; // The name of the food
    amount: string; // The measurement (e.g., "1 cup")
};