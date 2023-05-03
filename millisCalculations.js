
var endTimeMillis = new Date().getTime(); //right now

const now = new Date(); //start of the day
now.setHours(0, 0, 0, 0);
var startTimeMillis = now.getTime();


const sevenDaysAgo = new Date(now.getTime() - (6 * 24 * 60 * 60 * 1000));
sevenDaysAgo.setHours(0, 0, 0, 0);
const wAgoMidnightMillis = sevenDaysAgo.getTime();



const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
const mAgoMidnightMillis = startOfMonth.getTime();

let dayOfWeek = now.getDay(); // get the day of the week (0-6)
dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;