let convert = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            array[i] = String(array[i]);
        } else if (typeof array[i] === 'string') {
            array[i] = parseInt(array[i]);
        }
    }
}


let executeforEach = function(array, f) {
    for (let i = 0; i < array.length; i++) {
        f(array[i]);
    }
}

let mapArray = function(array, f) {
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
        array[i] = f(array[i]);
    }
    return array;
}


let filterArray = function(array, f) {
    let newarray = []; 	
    for (let i = 0; i < array.length; i++) {
        if (f(array[i]) === true) {
            newarray.push(array[i]);
        }
    }
    return newarray;
}

let flipOver = function(s) {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        let index = s.length - i - 1;
        res += s[index];
    }
    return res;
}

let makeListFromRange = function(given) {
    let newArray = [];
    for (let i = given[0]; i <= given[1]; i++) {
        newArray.push(i);
    }
    return newArray;
}


let getArrayOfKeys = function(array, key) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i][key]);
    }
    return newArray;
}


let substitute = function(array) {
	let border = 30;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= border) {
            newArray.push(array[i]);
        } else {
            newArray.push('*');
        }
    }
    return newArray;
}


let getPastDay = function(date, days) {
    let newdate = new Date(date);
    newdate.setDate(newdate.getDate() - days + 1)
    return newdate.getUTCDate();
}

let formatDate = function(date) {
    let newDate = new Date(date);
    let res = '';
    res += newDate.getFullYear() + '/';
    res += newDate.getMonth() + 1 + '/';
    res += newDate.getUTCDate() + ' ';
    if (String(newDate.getHours()).length === 1) {
        res += '0';
    }
    res += newDate.getHours() + ':';
    if (String(newDate.getMinutes()).length === 1) {
        res += '0';
    }
    res += newDate.getMinutes();
    return res;
}