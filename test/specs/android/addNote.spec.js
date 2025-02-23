describe("Add Note", () => {
  it("skip tutorial", async () => {
    await $('//*[@text="SKIP"]').click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it("add note", async () => {
    await $('//*[@text="Add note"]').click();
    await $('//*[@class="android.widget.LinearLayout"]').click();
    await expect($('//*[@text="Editing"]')).toBeDisplayed();

    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    ).addValue("Favorite Anime List");
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    ).addValue("One Punch\nAOT\nSakamoto");

    await driver.back();
    await driver.back();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )
    ).toHaveText("One Punch\nAOT\nSakamoto");
  });
});
