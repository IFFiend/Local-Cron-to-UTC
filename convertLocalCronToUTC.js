convertLocalCronToUTC(cronspec){
    var [min, hour, dom, month, dow] = cronspec.split(" ")
    if (dow === "0") {
      dow = "7" 
    }
    
    var temp = new Date("Feb 11, 2019 00:00:01");

    if (min !== "*") temp = moment(temp).add(parseInt(min), 'm').toDate();
    if (hour !== "*") temp = moment(temp).add('hours', parseInt(hour)).toDate();
    if (dow !== "*") temp = moment(temp).add('days', parseInt(dow)).toDate();
    if (dom !== "*") temp.setDate(parseInt(dom))

    temp = new Date(temp.toUTCString().substr(0, 25))

    if (min !== "*") min = temp.getMinutes()
    if (hour !== "*") hour = temp.getHours()
    if (dow !== "*") dow = temp.getDay()
    if (dom !== "*") dom = temp.getDate()

    var newCron = [min, hour, dom, month, dow].join(" ")
    return newCron
  }
