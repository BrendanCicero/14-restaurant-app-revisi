import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaDetailTemplate } from "../templates/template-creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import FavoriteRestaIdb from "../../data/favorite-resta-idb";

const Detail = {
  async render() {
    return `
      <div id="resta__detail" class="resta__detail"></div>
      <div id='likeButtonContainer'></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resta = await RestaurantSource.getRestaurantDetail(url.id);
    const restaItem = resta.restaurant;
    const restaDetail = document.querySelector("#resta__detail");
    restaDetail.innerHTML = createRestaDetailTemplate(restaItem);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestas: FavoriteRestaIdb,
      resta: {
        id: restaItem.id,
        name: restaItem.name,
        description: restaItem.description,
        city: restaItem.city,
        rating: restaItem.rating,
        address: restaItem.address,
        pictureId: restaItem.pictureId,
      },
    });
  },
};

export default Detail;
