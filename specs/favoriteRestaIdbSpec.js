/* eslint-disable no-undef */
import { itActsAsFavoriteRestaModel } from "./contract/favoriteRestaContract";
import FavoriteRestaIdb from "../src/scripts/data/favorite-resta-idb";

describe("Favorite Resta Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaIdb.getAllRestas()).forEach(async (resta) => {
      await FavoriteRestaIdb.deleteResta(resta.id);
    });
  });

  itActsAsFavoriteRestaModel(FavoriteRestaIdb);
});
