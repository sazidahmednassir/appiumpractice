describe("Textfield test", () => {
  it("textfield exercise", async () => {
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();
    const text = await $("//*[@resource-id='io.appium.android.apis:id/edit']");
    await text.addValue("USA");

    await expect(text).toHaveText("USA");
  });
});
