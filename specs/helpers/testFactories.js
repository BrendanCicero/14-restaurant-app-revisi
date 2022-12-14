import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import FavoriteRestaIdb from '../../src/scripts/data/favorite-resta-idb'

const createLikeButtonPresenterWithResta = async (resta) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestas: FavoriteRestaIdb,
    resta,
  });
};

export { createLikeButtonPresenterWithResta };
