/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestaModel } from "./contract/favoriteRestaContract";

let favoriteRestas = [];

const FavoriteRestaArray = {
  getResta(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteRestas.find((resta) => resta.id == id);
  },

  getAllRestas() {
    return favoriteRestas;
  },

  putResta(resta) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resta.hasOwnProperty("id")) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestas
    if (this.getResta(resta.id)) {
      return;
    }

    favoriteRestas.push(resta);
  },

  deleteResta(id) {
    favoriteRestas = favoriteRestas.filter((resta) => resta.id != id);
  },
};

describe("Favorite Resta Array Contract Test Implementation", () => {
  afterEach(() => (favoriteRestas = []));

  itActsAsFavoriteRestaModel(FavoriteRestaArray);
});
