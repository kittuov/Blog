var i=0;
function init()
{
    
    a=$("#main_section").children().length;
    addcls(i);
    
}
function addcls ( k){
    if (k<=a) 
    {b=(k+1).toString();
    $(".blog_post:nth-child("+b+")").addClass("blog_load");i++; setTimeout(addcls(k+1),200);}
    else
    {clearInterval();}
}