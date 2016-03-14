import moment from 'moment';

class DateService {

  combineDateAndTime(date, time) {
    let momentTime = moment(time);
    return moment(date).set({
      hour: momentTime.hour(),
      minute: momentTime.minute(),
      second: momentTime.second()
    }).toDate();
  }

  dateFromTime(hours, minutes) {
    return moment(`1970-01-01 ${hours}:${minutes}Z`, 'YYYY-MM-DD HH:mm').toDate();
  }

  now() {
    return DateService._currentDate || new Date();
  }

  today() {
    return moment(this.now()).startOf('day').toDate();
  }

  static setCurrentDate(date) {
    DateService._currentDate = date;
  }
}

export default DateService;
