export const chartOption = (
  countLinkWeeklies: adminDashboard['countLinkWeeklies'],
  countBotLinkWeeklies: adminDashboard['countBotLinkWeeklies']
) => {
  const data = {
    labels: countLinkWeeklies.map((data) => data.day),
    datasets: [
      {
        label: 'فعالیت کل سایت',
        data: countLinkWeeklies.map((data) => data.value),
        borderColor: 'rgb(54,162,235)',
        backgroundColor: 'transparent',
      },
      {
        label: 'فعالیت بات',
        data: countBotLinkWeeklies.map((data) => data.value),
        borderColor: 'rgba(235,21,26,0.71)',
        backgroundColor: 'transparent',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 0.5,
    plugins: {
      title: {
        display: true,
        text: 'نمودار لینک های کوتاه شده در هفته اخیر',
        titleColor: 'rgb(219,219,219)',
        font: {
          size: 14,
        },
      },
      tooltip: {
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {},
      },
      animation: {
        duration: 1000,
      },
    },
  };

  return { data, options };
};
