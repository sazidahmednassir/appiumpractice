const addNote = require("./addNote");

class deleteNote {
  async skipTutorial() {
    await addNote.skipBtn.click();
    await expect(addNote.addNoteText).toBeDisplayed();
  }

  async addAndSaveNote(noteHeading, noteBody) {
    await addNote.addNoteText.click();
    await addNote.addTextOption.click();
    await expect(addNote.editingText).toBeDisplayed();

    await addNote.addNoteTitle.addValue(noteHeading);
    await addNote.addNoteContent.addValue(noteBody);

    await addNote.saveNote();

    await expect(addNote.editBtn).toBeDisplayed();

    await expect(addNote.viewNote).toHaveText("One Punch\nAOT\nSakamoto");
  }

  get firstNote() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }

  get moreIcon() {
    return $("~More");
  }

  get deleteButton() {
    return $('//*[@text="Delete"]');
  }

  get navIcon() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    );
  }

  get trashCan() {
    return $('//*[@text="Trash Can"]');
  }

  get trashCanTitle() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }
}

module.exports = new deleteNote();
