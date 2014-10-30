var i=0;
//var main_section;
var a=0;

function init()
{
   // main_section=document.getElementById("main_section").innerHTML;
    //a=$("#main_section").children().length;
    $(".blog_post").addClass("blog_load");
    $(".blog_post").click(doit);
}
function doit(e)
{
    $(".blog_post").removeClass("post_load");
    $(".blog_post").removeClass("blog_load");
    //$(".blog_post").hide();
    $(this).children().hide();
    $(this).addClass("post_load");
    setTimeout(hide_blog(this),1000);
    //$(this).show();
    //$(this).animate({opacity:'1',transform:"scaleX(1.5)"},1000,"swing",hide_blog);
    //$(this).css("animation",
 //   $(this).css("height","auto");
 //   $(this).children("article").css("overflowY","scroll");
    
}
function hide_blog(k)
{   
    $(".blog_post").hide();
    $(k).children().show();
    $(k).show();
    $(k).css("height","auto");
    $(k).children("article").css("overflowY","scroll");
    $(k).children("article").css("padding-right","10px");
}