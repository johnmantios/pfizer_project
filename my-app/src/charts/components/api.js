export const getStats = async () => {
  const res = await fetch("https://api.npoint.io/81566954678d8e4b613a");
  const data = await res.json();

  return data;
};

export const getLineChartData = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/v1.0/stats");
  const data = await res.json();
  // console.log(data)
  
  return data["stats"]["bar_data3"];
  
};

export const getAreaChartData = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/v1.0/stats");
  const data = await res.json()
  // console.log(data["stats"]["bar_data2"])
  return data["stats"]["bar_data2"];;
};

export const getBarChartData = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/v1.0/stats");
  const data = await res.json();

  return data["stats"]["bar_data"];
};

export const getPieChartData = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/v1.0/stats");
  const data = await res.json();
  // console.log(data)
  return data["stats"]["pie_data"];
};
