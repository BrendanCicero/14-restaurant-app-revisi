/* eslint-disable no-undef */
const itActsAsFavoriteRestaModel = (favoriteResta) => {
  it("should return the resta that has been added", async () => {
    favoriteResta.putResta({ id: 1 });
    favoriteResta.putResta({ id: 2 });

    expect(await favoriteResta.getResta(1)).toEqual({ id: 1 });
    expect(await favoriteResta.getResta(2)).toEqual({ id: 2 });
    expect(await favoriteResta.getResta(3)).toEqual(undefined);
  });

  it("should refuse a resta from being added if it does not have the correct property", async () => {
    favoriteResta.putResta({ aProperty: "property" });

    expect(await favoriteResta.getAllRestas()).toEqual([]);
  });

  it("can return all of the restas that have been added", async () => {
    favoriteResta.putResta({ id: 1 });
    favoriteResta.putResta({ id: 2 });

    expect(await favoriteResta.getAllRestas()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("should remove favorite resta", async () => {
    favoriteResta.putResta({ id: 1 });
    favoriteResta.putResta({ id: 2 });
    favoriteResta.putResta({ id: 3 });

    await favoriteResta.deleteResta(1);

    expect(await favoriteResta.getAllRestas()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it("should handle request to remove a resta even though the resta has not been added", async () => {
    favoriteResta.putResta({ id: 1 });
    favoriteResta.putResta({ id: 2 });
    favoriteResta.putResta({ id: 3 });

    await favoriteResta.deleteResta(4);

    expect(await favoriteResta.getAllRestas()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

export { itActsAsFavoriteRestaModel };
