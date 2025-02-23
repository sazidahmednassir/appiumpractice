const deleteNote = require("../../screenobjects/android/deleteNote");

describe("Delete Note", () => {
  it("delete note", async () => {
    await deleteNote.skipTutorial();
    await deleteNote.addAndSaveNote(
      "Favorite Anime List",
      "One Punch\nAOT\nSakamoto"
    );

    await driver.back();
    const note = await deleteNote.firstNote.getText();
    await deleteNote.firstNote.click();

    await deleteNote.moreIcon.click();

    await deleteNote.deleteButton.click();

    await driver.acceptAlert();

    await deleteNote.navIcon.click();

    await deleteNote.trashCan.click();

    // const trashCan = await $(
    //   '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    // ).getText();

    const trashCanTitle = await deleteNote.trashCanTitle;

    await expect(trashCanTitle).toHaveText(note);

    // await expect(trashCan).toEqual(note);
  });
});
