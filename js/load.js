var i=0;
var main_section;

function init()
{
    main_section=document.getElementById("main_section").innerHTML;
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