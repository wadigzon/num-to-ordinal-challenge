const numberToOrdinal = number => {
    let end = ['st', 'nd', 'rd', 'th'];
    const digit = number % 10;
    return number > 10 && number < 20 ? `${number}${end[3]}` : ( digit > 0 && digit < 4 ? `${number}${end[digit-1]}` : `${number}${end[3]}` );
};
