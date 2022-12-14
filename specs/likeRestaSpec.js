/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriteRestaIdb from "../src/scripts/data/favorite-resta-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Resta", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the resta has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the resta has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeFalsy();
  });

  it("should be able to like the resta", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resta = await FavoriteRestaIdb.getResta(1);

    expect(resta).toEqual({ id: 1 });
    FavoriteRestaIdb.deleteResta(1);
  });

  it("should not add a resta again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 });

    await FavoriteRestaIdb.putResta({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([{ id: 1 }]);
    FavoriteRestaIdb.deleteResta(1);
  });

  it("should not add a resta when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([]);
  });
});
