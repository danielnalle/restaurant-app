import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <h2 tabindex="0">Daftar Restoran</h2>
      <div class="restaurant-list" id="restaurantList">
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.listRestaurants();

    const restaurantsContainer = document.querySelector('#restaurantList');
    restaurantsContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('article');
      restaurantElement.className = 'restaurant-item';
      restaurantElement.tabIndex = 0;

      restaurantElement.innerHTML += createRestaurantItemTemplate(restaurant);

      restaurantsContainer.appendChild(restaurantElement);
    });
  },
};

export default Restaurants;