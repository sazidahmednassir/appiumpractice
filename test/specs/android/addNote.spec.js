const addNote = require("../../screenobjects/android/addNote");

describe("Add Note", () => {
  it("skip tutorial", async () => {
    await addNote.skipBtn.click();
    await expect(addNote.addNoteText).toBeDisplayed();
  });

  it("add note", async () => {
    await addNote.addNoteText.click();
    await addNote.addTextOption.click();
    await expect(addNote.editingText).toBeDisplayed();

    await addNote.addNoteTitle.addValue("Favorite Anime List");
    await addNote.addNoteContent.addValue("One Punch\nAOT\nSakamoto");

    await addNote.saveNote();

    await expect(addNote.editBtn).toBeDisplayed();

    await expect(addNote.viewNote).toHaveText("One Punch\nAOT\nSakamoto");
  });
});
