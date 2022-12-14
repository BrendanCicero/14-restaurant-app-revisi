import {
  createLikeRestaButtonTemplate,
  createUnlikeRestaButtonTemplate,
} from "../views/templates/template-creator";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestas, resta }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resta = resta;
    this._favoriteRestas = favoriteRestas;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resta;

    if (await this._isRestaExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaExist(id) {
    const resta = await this._favoriteRestas.getResta(id);
    return !!resta;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestas.putResta(this._resta);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestas.deleteResta(this._resta.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
