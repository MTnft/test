export function usePieChartData() {
  const getPieChartData = (themes: ColorThemes) => ({
    labels: ["Africa", "Asia", "Europe"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [themes.primary, themes.warning, themes.danger],
        data: [2478, 5267, 734],
      },
    ],
  });

  return { getPieChartData };
}
