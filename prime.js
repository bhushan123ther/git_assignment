function isPrime(num)
{
    let count = 0;
    for(let i=1; i<=num.length; i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        console.log("Prime number");
    }
    else
    {
        console.log("Not Prime number");
    }
}