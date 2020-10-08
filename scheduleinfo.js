
exports.getinfo = function(){
    var n = new Date();
    var d = n.getDay();
    if (d > 5)
    {
        return 'No school today! :)';
    }
    else if(d == 1)
    {
        return 'Today is Monday: EBI 1, class periods 1, 4, 5, and 7. HW: Periods 3, 8, and 9';
    }
    else if(d == 2)
    {
        return 'Today is Tuesday: EBI 4, class periods 2, 6, 8, and 9. HW: Periods 1 and 5';
    }
    else if(d == 3)
    {
        return 'Today is Wednesday: EBI 5, class periods 3, 4, and 7. HW: Periods 2 and 6';
    }
    else if(d == 4)
    {
        return 'Today is Thursday: EBI 2 and 3, class periods 1, 5, 8, and 9. HW: NONE';
    }
    else if(d == 5)
    {
        return 'Today is Friday: no EBI, class periods 3, 2, and 6. HW: Periods 4 and 7';
    }
}