var requestBody_calories = {
    aggregateBy: [
        {
            dataTypeName: "com.google.calories.expended",
            dataSourceId:
                "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended",
        },
    ],
    bucketByTime: { durationMillis: 86400000 },
    startTimeMillis: startTimeMillis,
    endTimeMillis: endTimeMillis,
};

var requestBody_steps = {
    aggregateBy: [
        {
            dataTypeName: "com.google.step_count.delta",
            dataSourceId:
                "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
        },
    ],
    bucketByTime: { durationMillis: 3600000 },
    startTimeMillis: startTimeMillis,
    endTimeMillis: endTimeMillis,
};

var requestBody_steps_week = {
    aggregateBy: [
        {
            dataTypeName: "com.google.step_count.delta",
            dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
        },
    ],
    bucketByTime: { durationMillis: 86400000  },
    startTimeMillis: wAgoMidnightMillis,
    endTimeMillis: endTimeMillis,
};

var requestBody_steps_month = {
    aggregateBy: [
        {
            dataTypeName: "com.google.step_count.delta",
            dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
        },
    ],
    bucketByTime: { durationMillis: 24192000000 },
    startTimeMillis: mAgoMidnightMillis,
    endTimeMillis: endTimeMillis,
};