import Restaurants from '../views/pages/restaurants';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurants,
  '/home': Restaurants,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;