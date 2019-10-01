describe("Button", () => {
  it("visually looks correct", () => {
    // APIs from jest-puppeteer
    return page
      .goto("http://localhost:9012/iframe.html?id=button--basic-label")
      .then(() => {
        return page.screenshot();
      })
      .then(image => {
        expect(image).toMatchImageSnapshot();
      });
  });
});
