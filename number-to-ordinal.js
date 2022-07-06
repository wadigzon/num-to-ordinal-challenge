const numberToOrdinal = number => {
  let end = ['st', 'nd', 'rd', 'th'];
  let ordinal; 
  if (number > 10 && number < 20) {
    ordinal = `${number}${end[3]}`;
  } else {
    const digit = number % 10;
    if (digit > 0 && digit < 4){
        ordinal = `${number}${end[digit-1]}`
    } else {
        ordinal = `${number}${end[3]}`
    }
  }
  return ordinal; 
};
