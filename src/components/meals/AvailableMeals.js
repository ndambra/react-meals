import './AvailableMeals.css';
import Card from '../ui/Card';
import MealItem from './MealItem';

// dummy data for dev purposes
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const renderedMealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} mealItem={meal} />
  ));

  return (
    <div className='meals'>
      <Card>
        <ul>{renderedMealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
