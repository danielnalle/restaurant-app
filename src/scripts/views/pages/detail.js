import UrlParser from '../../routes/url-parser';
import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail" tabindex="0"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant-detail');

    try {
      const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);

      if (!restaurant) {
        restaurantContainer.innerHTML = '<p>Restaurant not found</p>';
        return;
      }

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      console.log(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          description: restaurant.restaurant.description,
          pictureId: restaurant.restaurant.pictureId,
          city: restaurant.restaurant.city,
          rating: restaurant.restaurant.rating,
        },
      });

    } catch (error) {
      restaurantContainer.innerHTML = `<p>Error loading restaurant detail: ${error.message}</p>`;
    }
  },
};

export default Detail;