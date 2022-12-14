/* eslint-disable no-undef */
Feature("Liking Resta");
const assert = require("assert");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restas", ({ I }) => {
  I.seeElement(".resta");
  I.see("Silahkan tambah resta favoritemu dulu di halaman utama", ".resta");
});

Scenario("liking one resta", async ({ I }) => {
  I.see("Silahkan tambah resta favoritemu dulu di halaman utama", ".resta");

  I.amOnPage("/");

  I.seeElement(".resta__list a");

  const firstResta = locate(".resta__list a").first();
  const firstRestaTitle = await I.grabTextFrom(firstResta);

  I.click(firstResta);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".resta__list");
  const likedRestaTitle = await I.grabTextFrom(".resta__title");
  assert.strictEqual(firstRestaTitle, likedRestaTitle);
});

Scenario("unlike resta", async ({ I }) => {
  I.see("Silahkan tambah resta favoritemu dulu di halaman utama", ".resta");

  I.amOnPage("/");

  I.waitForElement(".resta__list a", 10);
  const firstResta = locate(".resta__list a").first();
  const firstRestaTitle = await I.grabTextFrom(firstResta);
  I.click(firstResta);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".resta__list");

  const likedRestaTitle = await I.grabTextFrom(".resta__title");
  assert.strictEqual(firstRestaTitle, likedRestaTitle);

  I.click(likedRestaTitle);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".resta");
  const unlikedResta = await I.grabTextFrom(".resta");

  assert.strictEqual(
    unlikedResta,
    "Silahkan tambah resta favoritemu dulu di halaman utama"
  );
});
