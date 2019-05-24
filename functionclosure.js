function mul(a)
{
    function mul1(b)
    {
        console.log("multipe is:",a*b)
    }
    return mul1;
}
var c=mul(5)(4)