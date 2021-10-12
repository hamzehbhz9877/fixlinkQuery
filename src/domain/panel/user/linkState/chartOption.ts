export const chartOption = (res: any, dataRes: any) => {
  const data = {
    labels: res,
    datasets: [
      {
        label: 'تعداد بازدید',
        data: dataRes.map((data: any) => data.value),
        borderColor: '#EAD727',
        backgroundColor: '#EAD727',
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
