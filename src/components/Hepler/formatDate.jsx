import { analyzeAccount } from "../../@core/api/userApi";
import { analyzeCompetitorAccount } from "../../@core/api/competitorApi";

function format(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}

export const formatDate = async ({ value, id, isMyUser }) => {
  const now = new Date();
  const start = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - value
  );

  const oneDayAftereStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - value + 1
  );

  const startDate = format(start.toDateString());
  const oneDayAfterStartDate = format(oneDayAftereStart.toDateString());
  const filteredData = {
    id,
    startDate: startDate,
    endDate: oneDayAfterStartDate,
  };

  let filterRes = null;

  if (isMyUser) {
    filterRes = await analyzeAccount(filteredData);
  } else {
    filterRes = await analyzeCompetitorAccount(filteredData);
  }

  return { filterRes };
};

export const formatTodayDate = async ({ id, isMyUser }) => {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );

  const nowDate = format(now.toDateString());
  const tomorrowDate = format(tomorrow.toDateString());
  const yesterdayDate = format(yesterday.toDateString());

  const todayData = {
    id,
    startDate: nowDate,
    endDate: tomorrowDate,
  };

  let data = null;

  if (isMyUser) {
    data = await analyzeAccount(todayData);
  } else {
    data = await analyzeCompetitorAccount(todayData);
  }

  if (data === 401) {
    return 401;
  }

  return { data };
};

export const formatChartDate = async (value, id, isMyUser) => {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const startedDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - value
  );

  const nowDate = format(tomorrow.toDateString());
  const startedDayDate = format(startedDay.toDateString());

  const chartData = {
    id,
    startDate: startedDayDate,
    endDate: nowDate,
  };

  let data = null;

  if (isMyUser) {
    data = await analyzeAccount(chartData);
  } else if (!isMyUser) {
    data = await analyzeCompetitorAccount(chartData);
  }

  let y = [
    {
      id: Math.random(100000),
      new_likes: 0,
      total_followers: 0,
      new_comments: 0,
      new_followers: 0,
      engagement: 0,
      created: startedDayDate + "T22:56:28",
    },
    {
      id: Math.random(100000),
      new_likes: 0,
      total_followers: 0,
      new_comments: 0,
      new_followers: 0,
      engagement: 0,
      created: nowDate + "T22:56:28",
    },
  ];

  if (data === 401) {
    return 401;
  }
  if (data.id) {
    return [data];
  } else if (data[0]?.id) {
    return data;
  } else {
    return y;
  }
};
