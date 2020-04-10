// 添加本地存储
export const toSetIterm = (itemName: any, itemVal: any) => {
  return localStorage.setItem(itemName, itemVal);
};

// 获取本地存储
export const toGetItem = (itemName: any) => {
  return localStorage.getItem(itemName)
    ? localStorage.getItem(itemName)
    : false;
};

// 获取当前星期
export const getWeek = () => {
  var mydate = new Date();
  var myddy = mydate.getDay(); //获取存储当前日期
  var weekday = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  return weekday[myddy];
};
