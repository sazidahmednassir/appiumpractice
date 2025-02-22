describe("Date picker tests", () => {
  it("date picker testing", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );
    const date = await $(
      "//.[@resource-id='io.appium.android.apis:id/dateDisplay']"
    );
    const currentDate = await date.getText();

    await $("~change the date").click();

    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    // );

    //for three times
    for (let i = 0; i < 3; i++) {
      await $(
        "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
      );
    }

    await $("//.[@text='10']").click();
    await $("//.[@text='OK']").click();

    await expect(await date.getText()).not.toEqual(currentDate);
  });
});
