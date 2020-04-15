const Food = require('../../models/food');
const User = require('../../models/user');
const { transformFood } = require('./merge');
  
module.exports = {
    fooditems: async () => {
      try {
        const fooditems = await Food.find();
        return fooditems.map(food => {
          return transformFood(food);
        });
      } catch (err) {
        throw err;
      }
    },
    createFoodItem: async args => {
      const food = new Food({
        name: args.foodItemInput.name,
        price: +args.foodItemInput.price,
        date: new Date(args.foodItemInput.date),
        creator: '5e96b8cfaaeb517a34ebb174'
      });
      let createdFoodItem;
      try {
        const result = await food.save();
        createdFoodItem = transformFood(result);
        const creator = await User.findById('5e96b8cfaaeb517a34ebb174');
  
        if (!creator) {
          throw new Error('User not found.');
        }
        creator.createdFoodItems.push(food);
        await creator.save();
  
        return createdFoodItem;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  };
  