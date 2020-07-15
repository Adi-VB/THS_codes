function timeConversion(s) {
    to24HourTime(s)
    console.log(to24HourTime(s))
}

function add12Hours(time) {
    var hourMinute = time.split(':');
    return 12 + parseFloat(hourMinute[0]) + ':' + hourMinute[1] + ':' + hourMinute[2];
}
function to24HourTime(time) {
    var parts = time.split(' ');
    if (parts[1] === 'AM') {
        return parts[0];
    }
    return add12Hours(parts[0]);
}

timeConversion('07:05:45 PM')