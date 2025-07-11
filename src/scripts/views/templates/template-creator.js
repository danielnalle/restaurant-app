import CONFIG from '../../globals/config';

const smallImg = `${CONFIG.BASE_IMAGE_URL}small/`;
const mediumImg = `${CONFIG.BASE_IMAGE_URL}medium/`;

const createRestaurantItemTemplate = (restaurant) => `
    <a href="/#/detail/${restaurant.id}">
      <img
      class="restaurant-image lazyload"
      data-src="${restaurant.pictureId ? smallImg + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
      alt="Foto restoran ${restaurant.name}"
      crossorigin="anonymous"
      >
      <div class="restaurant-info">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <p class="restaurant-city">📍 ${restaurant.city}</p>
        <p class="restaurant-rating">⭐ ${restaurant.rating}</p>
        <p class="restaurant-description">${restaurant.description}</p>
      </div>
    </a>
`;

const createRestaurantDetailTemplate = ({ restaurant }) => `
  <h2 tabindex="0">${restaurant.name}</h2>
  <img 
    class="restaurant-image lazyload" 
    data-src="${mediumImg + restaurant.pictureId}" 
    alt="${restaurant.name}"
  >
  <div class="restaurant-info">
    <h3>Information</h3>
    <p><strong>Alamat:</strong> ${restaurant.address}</p>
    <p><strong>Kota:</strong> ${restaurant.city}</p>
    <p><strong>Deskripsi:</strong> ${restaurant.description}</p>
  </div>

  <div class="restaurant-menu">
    <div class="food-menu">
      <h3>Menu Makanan</h3>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="drink-menu">
      <h3>Menu Minuman</h3>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>

  <div class="restaurant-reviews">
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews.map((review) => `
      <div class="review">
        <p><strong>${review.name}</strong> - ${review.date}</p>
        <p>${review.review}</p>
      </div>
    `).join('')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;



export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};

