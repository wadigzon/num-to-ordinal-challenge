const numberToOrdinal = number => {
    let end = ['st', 'nd', 'rd', 'th'];
    let ordinal; 
    if (number > 10 && number < 20) {
        ordinal = `${number}${end[3]}`;
    } else {
        const digit = number % 10;
        if (digit === 1){
            ordinal = `${number}${end[0]}`
        } else if (digit === 2) {
            ordinal = `${number}${end[1]}`
        } else if (digit === 3) {
            ordinal = `${number}${end[2]}`
        } else {
            ordinal = `${number}${end[3]}`
        }
    }
    return ordinal; 
};
