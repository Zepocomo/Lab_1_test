function days_passed(dt) {
    let current = new Date(dt.getTime());
    let previous = new Date(dt.getFullYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);
}
console.log(days_passed(new Date()));