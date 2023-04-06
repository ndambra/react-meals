const useAddMeals = () => {
  const dbUrl = '<INSERT_DB_URL>';

  const addMeals = (meals) => {
    meals.forEach(async (meal) => {
      await addMeal(meal)
        .then((data) => console.log(`${data} added to db.`))
        .catch((err) => console.log('Error adding meal to db', err));
    });
  };

  const addMeal = async (meal) => {
    console.log(`Adding ${meal.name}`);
    await fetch(dbUrl, {
      method: 'POST',
      body: JSON.stringify(meal),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return { addMeals };
};

export default useAddMeals;
