/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// Scenario('showing empty liked movies', ({ I }) => {
//   I.seeElement('#query');

//   I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
// });

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item a', 3);
  I.seeElement('.restaurant-item a');
  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantName = firstRestaurant.find('.restaurant-name');
  const firstRestaurantNameText = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 3);
  I.seeElement('.restaurant-item');
  const likedRestaurantNameText = await I.grabTextFrom('.restaurant-item .restaurant-name');

  assert.strictEqual(firstRestaurantNameText, likedRestaurantNameText);

  // Unliking restaurant
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item a', 5);
  I.seeElement('.restaurant-item a');
  const firstLikedRestaurantNameText = await I.grabTextFrom('.restaurant-item .restaurant-name');

  const firstLikedRestaurant = locate('.restaurant-item a').first();
  I.click(firstLikedRestaurant);
  const restaurantNameText = await I.grabTextFrom('#restaurant-detail h2');

  assert.strictEqual(firstLikedRestaurantNameText, restaurantNameText);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item a');
});
