function isLeapYear(year) {
    let data = new Date(year).getFullYear();
    let hightYear = new Date(data, 1, 29).getDate();
    if (isNaN(data)) {
        return 'Invalid Date';
    } else if (hightYear === 29) {
        return `${data} is a leap year`;
    } else {
        return `${data} is not a leap year`;
    }
}

isLeapYear('2020-01-01 00:00:00'); 
isLeapYear('2019-06-09 00:00:00'); 
isLeapYear('2021-12-24 13:00:00'); 
isLeapYear('2200-01-15 13:00:00'); 
isLeapYear(3587138318135465356624561646547382192091); 
isLeapYear(1357911135);  