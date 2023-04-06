import './AvailableMeals.css';
import { useEffect, useState } from 'react';
import Card from '../ui/Card';
import MealItem from './MealItem';

const url = 'https://react-meals-f562e-default-rtdb.firebaseio.com/meals.json';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const availableMeals = [];
    const fetchMeals = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error fetching meals from db.');
        }

        const data = await response.json();
        for (const key in data) {
          const { name, description, price } = data[key];
          availableMeals.push({
            id: key,
            name,
            description,
            price,
          });
        }
        setMeals(availableMeals);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  const renderedMealsList = meals.map((meal) => (
    <MealItem key={meal.id} mealItem={meal} />
  ));

  let content;
  if (isLoading) {
    content = <p>Loading meals...</p>;
  } else if (error) {
    content = <p>Error: Unable to fetch meals</p>;
  }

  return (
    <div className='meals'>
      <Card>{content || <ul>{renderedMealsList}</ul>}</Card>
    </div>
  );
};

export default AvailableMeals;
