var time=7000;
var i=0;
var images=[];

//image List

images[0]="image1.jpg";
images[1]="image2.jpg";
images[2]="image3.jpg";
images[3]="image4.jpg";
images[4]="image5.jpg";
images[5]="image6.jpg";



function changeImg()
{

    document.getElementById("sldImg").src=images[i];

    if(i < images.length-1)
    {
        i++;
    }
    else
    {
        i=0
    }
    setTimeout("changeImg()", time)
    
    var node=document.getElementById("sldImg");
    node.classList.remove("sldImg");
    node.offsetWidth;
    node.classList.add("sldImg");
    

}
function right()
{
    if(i < images.length-1)
    {
        i++;
    }
    else
    {
        i=0
    }
    document.getElementById("sldImg").src=images[i];
    var node=document.getElementById("sldImg");
    node.classList.remove("sldImg");
    node.offsetWidth;
    node.classList.add("sldImg");

}
function left()
{
    if(i>1)
    {
        i--;
    }
    else
    {
        i=images.length-1;
    }
    
    document.getElementById("sldImg").src=images[i];

    var node=document.getElementById("sldImg");
    node.classList.remove("sldImg");
    node.offsetWidth;
    node.classList.add("sldImg");
}

window.onload=changeImg;

function resetAnimaion()
{
    alert("hello");
}