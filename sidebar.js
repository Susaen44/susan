function sidebar(){
    const side = document.querySelector('.sidebar')
    side.style.display='flex'
}
function hidesidebar(){
    const hide= document.querySelector('.sidebar')
    hide.style.display='none'
}
function changetheme(){
   document.body.style.backgroundColor = "white";
    document.body.style.color="black";
}

function change(){
    document.body.style.backgroundColor = "black";
     document.body.style.color="white";
 }
 
function img(){
    document.getElementById('ncinfo1').innerHTML=" Starts date: 2023"
    document.getElementById('ncinfo2').innerHTML=" expected end date: 2025"

    document.getElementById('ncinfo3').innerHTML=" To know more about niagara college: " 
    

}
function outimg(){
    document.getElementById('ncinfo1').innerHTML=" ";
    document.getElementById('ncinfo2').innerHTML=" ";
    document.getElementById('ncinfo3').innerHTML=" ";
    
}
function chiragpic(){
    document.getElementById('p1').innerHTML="Year of Completion: 2019." 
    document.getElementById('p2ch').innerHTML="Overall GPA: 3.75" 
    document.getElementById('p3ch').innerHTML="To know more about chirag: "
   
}
function outchirag(){
    document.getElementById('p1').innerHTML=" ";
    document.getElementById('p3ch').innerHTML=" ";
    document.getElementById('p2ch').innerHTML=" ";
}

function kmcimg(){
    document.getElementById('p2').innerHTML="Year of enrolled: 2019."
    document.getElementById('p3').innerHTML="Year of completion: 2021."
    document.getElementById('p4').innerHTML="Overall GPA: 3.59"
    document.getElementById('p5').innerHTML="To know more about Kathmandu Model College: "
}
function outkmc(){
    document.getElementById('p2').innerHTML=" "
    document.getElementById('p3').innerHTML=" "
    document.getElementById('p4').innerHTML=" "
    document.getElementById('p5').innerHTML=" "
}
 function hire(){
    document.getElementById('form').style.display="block";
    
 }
 function submitform(){
    document.getElementById('form').style.display="none";
 }
 function chat(){
    document.getElementById('chatme').innerHTML="Currently this feature is unavailabe.Stay tuned for more updates on my profile"
 }
 function cancle(){
    
    document.getElementById('form').style.display="none";
 }