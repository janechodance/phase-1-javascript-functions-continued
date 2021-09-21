function saturdayFun (fun="roller-skate") {
    return `This Saturday, I want to ${fun}!`;
}
const mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`
}
function wrapAdjective(a = '*') {
    const adjective = function (b) {
        return `You are ${a}${b}${a}!`
};
return adjective;
}
