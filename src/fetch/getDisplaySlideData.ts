export async function getDisplaySlideData(
  displaySlideContent: { apiKey: any; name: string }[]
) {
  const displaySliderData = await Promise.all(
    displaySlideContent?.map(async (item) => {
      const displaySliderRequest = await fetch(item.apiKey);
      const displaySliderResponse = await displaySliderRequest?.json();
      return { name: item.name, displaySliderResponse };
    })
  );

  return displaySliderData;
}
