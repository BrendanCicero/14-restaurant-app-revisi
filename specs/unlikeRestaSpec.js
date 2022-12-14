/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriteRestaIdb from "../src/scripts/data/favorite-resta-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Resta", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaIdb.putResta({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaIdb.deleteResta(1);
  });

  it("should display unlike widget when the resta has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it("should be able to remove liked resta from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));
    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([]);
  });

  it("should not throw error if the unliked resta is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResta({ id: 1 });

    await FavoriteRestaIdb.deleteResta(1);

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));
    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([]);
  });
});
