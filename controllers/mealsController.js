const mealModel = require("../models/mealModel");
exports.getMenuController = (req, res, next) => {
  const meals = mealModel.getMeals();
  res.json(meals[0].name);
};
