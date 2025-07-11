import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2 tabindex="0">Favorite Restaurants</h2>
      <div id="restaurants" class="restaurant-list">
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('article');
      restaurantElement.className = 'restaurant-item';
      restaurantElement.tabIndex = 0;

      restaurantElement.innerHTML += createRestaurantItemTemplate(restaurant);

      restaurantsContainer.appendChild(restaurantElement);
    });
  },
};

export default Favorite;