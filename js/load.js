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
    //$(".blog_post").removeClass("post_load");
    $(".blog_post").removeClass("blog_load");
    //$(".blog_post").hide();
    //$(this).addClass("post_load");
    //$(this).show();
    $(this).animate({opacity:'1',transform:"scaleX(1.5)"},1000,"swing",hide_blog);
 //   $(this).css("height","auto");
 //   $(this).children("article").css("overflowY","scroll");
    
}
function hide_blog()
{
    $(".blog_post").hide();
    $(this).show();
    $(this).css("height","auto");
    $(this).children("article").css("overflowY","scroll");
    $(this).children("article").css("padding-right","10px");
}