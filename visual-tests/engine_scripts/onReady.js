module.exports = async (page, scenario, vp) => {
  console.log(`SCENARIO > ${scenario.label}`);
  await page.waitForFunction(() => document.fonts.status === 'loaded');
  await page.waitForFunction(() => {
    const images = Array.from(document.images);
    return images.every((img) => img.complete && img.naturalHeight !== 0);
  });
};
