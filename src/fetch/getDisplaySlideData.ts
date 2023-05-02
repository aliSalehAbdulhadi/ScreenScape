export async function getDisplaySlideData(
  displaySlideContent: { apiKey: string; name: string }[]
) {
  const displaySliderData = await Promise.all(
    displaySlideContent?.map(async (item) => {
      const allResponses = [];
      for (let i = 1; i <= 2; i++) {
        const response = await fetch(`${item.apiKey}&page=${i}`);
        const data = await response.json();
        allResponses?.push(...data.results);
      }
      return { name: item?.name, displaySliderResponse: allResponses };
    })
  );

  return displaySliderData;
}
