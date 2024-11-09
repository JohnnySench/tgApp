export type TContactData = 'first_name' | 'last_name' | 'phone_number' | 'user_id';

export type TPizza = {
	id: number;
	name: string;
	ingredients: string[];
	instructions: string[];
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	servings: number;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	cuisine: string;
	caloriesPerServing: number;
	tags: string[];
	userId: number;
	image: string;
	rating: number;
	reviewCount: number;
	mealType: string[];
};

export interface IPizza {
	limit: number;
	recipes: Array<TPizza>;
	skip: number;
	total: number;
}
