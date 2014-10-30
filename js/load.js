var i=0;
var main_section;
var a=0;
var post;
function init()
{
    main_section=document.getElementById("main_section").innerHTML;
    //a=$("#main_section").children().length;
    $(".blog_post").addClass("blog_load");
    $(".blog_post").click(doit);
    $("#home_button").click(reset);
}
function doit(e)
{
    //$(".blog_post").removeClass("post_load");
    //$(".blog_post").removeClass("blog_load");
    //$(".blog_post").hide();
    //$(this).children().css("opacity",'0');
    //$(this).addClass("post_load");
    //setTimeout(hide_blog(this),1000);
    //$(this).show();
    //$(this).animate({opacity:'1',transform:"scaleX(1.5)"},1000,"swing",hide_blog);
    //$(this).css("animation",
 //   $(this).css("height","auto");
 //   $(this).children("article").css("overflowY","scroll");
    post=this.innerHTML;
    var a=this.screenLeft;
    $("#post").animate({
        opacity:'1',
        width:'100%',
        height:'100%',
        left:"0px",
        top:"0px"
    },1000,"swing");
    $("#blog_data").html(post);
    $("#blog_data").addClass("blog_post");
    $("#blog_data").css("flex",'1');
    $("#blog_data").css("height",'100%');
    
    //$("#post").css("position","absolute");
    $("#blog_data").css("opacity","1");
    //$("#post").css("padding","10px");
    $("#main_section").css("overflow","hidden");
    $("#blog_data").children("article").css("overflowY","scroll");
    $("#blog_data").children("article").css("padding-right","10px");
    
}
function hide_blog(k)
{   
    $(".blog_post").hide();    
    $(k).show();
    $(k).children().show();
    $(k).css("height","auto");
    $(k).children("article").css("overflowY","scroll");
    $(k).children("article").css("padding-right","20px");
    $(k).children().css("opacity","1");
    
}
function reset()
{
    $("#post").removeClass("blog_post");
    $("#blog_data").html("");
    $("#post").animate({
        width:'0%',
        height:'0%',
        left:"0px",
        top:"0px",        
        opacity:"0",
    },1000,"swing");
    $(".blog_post").removeClass("blog_load");
    //$("#post").css("width",'0px');
    $(".blog_post").addClass("blog_load");
    $("#main_section").css("overflow-y","scroll");
    
}