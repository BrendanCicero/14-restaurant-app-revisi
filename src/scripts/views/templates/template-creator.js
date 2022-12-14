import CONFIG from "../../globals/config";

const createRestaDetailTemplate = (resta) => `
  <div class='wrapper'>
    <div class='center'>
      <h2 class="resta__header">${resta.name}</h2>
      <img class="resta__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resta.pictureId}" alt="${resta.name}" />
      <h3>Information</h3>
    </div>
    <div class="resta__info">
      <h4>Alamat</h4>
      <p>${resta.address}</p>
      <h4>Kota</h4>
      <p>${resta.city}</p>
      <h4>Rating</h4>
      <p>${resta.rating}</p>
    </div>
    <div class="resta__overview">
      <h3>Deskripsi</h3>
      <p>${resta.description}</p>
    </div>
  </div>
  
  <div class="resta-menu">
    <h3 class='center'>Menu</h3>
    <div class='resta-menu-flex'>
      <div class="resta-food">
        <h4 class='center'>Food</h4>
        <ul>
          ${resta.menus.foods.map((food, i) => `
            <li><p>${i + 1}) ${food.name}</p></li>
          `).join('')}
        <ul>
      </div>

      <div class="resta-drink">
        <h4 class='center'>Drink</h4>
        <ul>
          ${resta.menus.drinks.map((drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
          `).join('')}
        <ul>
      </div>
  </div>
  </div>

  <div class="review">
  <h3 class='center'>Review</h3>
  <p>${resta.customerReviews.map((review) => `
    <div class="resta-review-item">
      <div class="review-header">
        <p class="review-name">${review.name}</p>

        <p class="review-date">${review.date}</p>
      </div>

      <div class="review-body">
        ${review.review}
      </div>
    </div>
    `).join('')}</p>
  </div>
`;

const createRestaItemTemplate = (resta) => `
  <article tabindex='0' class='resta__list'>
        <a href="/#/detail/${resta.id}">
          <img tabindex='0' class='resta__thumbnail lazyload' data-src='${CONFIG.BASE_IMAGE_URL + resta.pictureId}' alt='${resta.name}'/>
          <p tabindex='0' class='resta__city'>${resta.city}</p>
          <div class='resta__content'>
              <p tabindex='0' class='resta__rating'>Rating : ${resta.rating}</p>
              <h2 class='resta__title' tabindex='0' >${resta.name}</h2>
              <p tabindex='0' class='resta__description'>${resta.description} </p>
          </div>
        </a>
    </article>
`;

const createLikeRestaButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaItemTemplate,
  createRestaDetailTemplate,
  createLikeRestaButtonTemplate,
  createUnlikeRestaButtonTemplate,
};
