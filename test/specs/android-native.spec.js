describe("Android NATIVE feature tests", () => {
  it("Access the app specific screen drirectly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    await driver.pause(3000);

    await expect($('//*[contains(@text, "Alert Dialogs")]')).toExist();
  });

  it("Working with dialog boxes", async () => {
    await $("~OK Cancel dialog with a message").click();
    // accept the alert
    // await driver.acceptAlert();
    //dismiss the alert
    // await driver.dismissAlert();

    //get alert text
    console.log(await driver.getAlertText());

    await $("//*[@resource-id='android:id/button1']").click();

    await expect($("//*[@resource-id='android:id/alertTitle']")).not.toExist();
  });

  it("Vetical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();
    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    // );

    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Secure Surfaces"))'
    ).click();

    // await $("~Secure Surfaces").click();
    await expect($("~Secure Dialog")).toExist();
  });

  it.only("Horizontal scrolling", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );

    await driver.pause(3000);
  });
});
