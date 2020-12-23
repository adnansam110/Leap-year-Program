var year = prompt("Enter a year");
if (year%4==0 && year%100==0)
{
     if(year%400==0)
        {
            document.write("It is a leap year");   
            
        }
        else {
            document.write("Not a leap year");
        }
}
else if (year%4==0 && year%100!=0) {
    document.write("it is a leap year");
}
else {
    document.write("Not a leap year");
}