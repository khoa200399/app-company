import React from "react";
import moment from 'moment';


export const increaseDate = (startDate:any, daysAdd:any) => {
    const newDate = moment(startDate).add(daysAdd,'days').format()
    return newDate;
}

export const dateFormat =(date:string | any, formatStr:string) => {
    const newDate = moment(date,formatStr);
    return newDate
}