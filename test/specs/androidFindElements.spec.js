describe("Android element tests", () => {
  xit("find elements by accessibility id", async () => {
    const appEle = await $("~App");
    await appEle.click();

    const actionEle = await $("~Action Bar");
    actionEle.waitForDisplayed({ timeout: 5000 });
    await expect(actionEle).toBeExisting();
  });

  it("find elements by className", async () => {
    const className = await $("android.widget.TextView");
    console.log(await className.getText());

    await expect(className).toHaveText("API Demos");
  });

  xit("find elements by xpath", async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    await $('//android.widget.Button[@content-desc="List dialog"]').click();

    await $('//android.widget.TextView[@text="Command two"]').click();

    const textAlert = await $(
      '//android.widget.TextView[@class="android.widget.TextView"]'
    );
    await expect(textAlert).toHaveText("You selected: 1 , Command two");
  });

  xit("Finf element by uiautomator", async () => {
    await $('android=new UiSelector().textContains("Alert Dialogs")').click();
  });

  xit("find multiple elements", async () => {
    const expectList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];
    const textList = await $$("android.widget.TextView");

    for (const text of textList) {
      actualList.push(await text.getText());
    }

    await expect(actualList).toEqual(expectList);
    await driver.quit();
  });

  it("textfield exercise", async () => {
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();
    const text = await $("//*[@resource-id='io.appium.android.apis:id/edit']");
    await text.addValue("USA");

    await expect(text).toHaveText("USA");
  });
});
