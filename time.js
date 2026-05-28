 function formartDuration(seconds){
  second = seconds % 60
  minutes = seconds / 60;
  hours = minutes / 60;
  days = hours / 24;
  months = days / 30;

    if(seconds === 0){
    return "Now";
    } else if (second <= 60 ) {
    return second + "seconds";

    } else if (minutes <= 60 ){
    return Math.trunc(minutes )+ " minutes " +" and "  + second + "seconds"

    } else if (hours <= 24 ){
    return  Math.trunc(hours )+" hours, " +  minutes + " minutes " +" and "  + second + "seconds"

    } else if(days <= 30 ){
    return  Math.trunc(days) +" days, " + hours +" hours, " +  minutes + " minutes " +" and "  + second + "seconds"

    } else if(months <= 12 ){
    return  Math.trunc(months) + " months, " + days +" days, " + hours +" hours, " +  minutes + " minutes " +" and "  + seconds + "seconds"

    } else { 
        return "no result"
    }
 }




console.log(formartDuration(3600))