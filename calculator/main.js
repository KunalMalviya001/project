let ans="";
let display=false;
function apand(value){
    if(ans===0||display){
        ans=value;
    }
    else
    {
        ans+=value;
    }

display=false;

updatedisplay();
}

function updatedisplay(){
    const de=document.getElementById("p1");
    de.textContent=ans;
}
function updatedisplay1(){
    const de=document.getElementById("ans");
    de.textContent=ans;
}
function cal()
{
    const re=eval(ans);
    ans=""
    ans+= re.toString();
    updatedisplay1();

    display=true;
}

function ac(){
    ans="0"
    display=false;
    updatedisplay();
    updatedisplay1();

}

function ce()
{
    ans=ans.slice(0,-1);
    updatedisplay();
}