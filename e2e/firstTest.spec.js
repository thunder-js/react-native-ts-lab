describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
  });
  
  it('should show hello text after tap', async () => {
    await element(by.id('helloButton')).tap();
    await expect(element(by.id('helloText'))).toBeVisible();
  
  });
})