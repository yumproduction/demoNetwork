export const requiredField = (value) => {
    if (value) return undefined

    return "Field is requiered!";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length>maxLength) return `Field is more than ${maxLength}!`;
    return undefined;
}

