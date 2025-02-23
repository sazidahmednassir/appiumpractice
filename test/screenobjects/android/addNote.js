class addNote {
  get skipBtn() {
    return $('//*[@text="SKIP"]');
  }

  get addNoteText() {
    return $('//*[@text="Add note"]');
  }

  get addTextOption() {
    return $('//*[@class="android.widget.LinearLayout"]');
  }

  get editingText() {
    return $('//*[@text="Editing"]');
  }

  get addNoteTitle() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
  }

  get addNoteContent() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
  }

  get editBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
    );
  }

  get viewNote() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
    );
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

module.exports = new addNote();
