var player1={
    name:"player 1",
    p1_count:0,
    p1_val:[]
};
var player2=
{
    name:"Player 2",
    p2_count:0,
    p2_val:[]
};
var count=0;

function playEvenOdd()
{
     var p1=Math.floor(Math.random()*25+1);
     var p2=Math.floor(Math.random()*25+1);
    player1.p1_val.push(p1);
    player2.p2_val.push(p2);
    console.log(p1,p2);
     if(count==5)
     {
        if(player1.p1_count==player2.p2_count)
        {
           document.getElementById("result").textContent="Match DRAW!!!"; 
        }
        else if(player1.p1_count > player2.p2_count)
        {
            document.getElementById("result").textContent=player1.name+"wins!!!";
        }
        else{
            document.getElementById("result").textContent=player2.name+"wins!!!";
        }

     }
     else
     {
        count++;
        if(p1%2==0)
        {
            player1.p1_count++;
            document.getElementById("Player1_scores").textContent=player1.p1_count;
        }
        if(p2%2==0)
        {
            player2.p2_count++;
            document.getElementById("Player2_scores").textContent=player2.p2_count;
        }
        updateCircle();
     }
}
function updateCircle()
{
    var p1_circle=document.getElementById("player1").children;
    player1.p1_val.forEach((run,value)=>{
      if(run%2==0)
      {
        p1_circle[value].style.backgroundColor="green";
      }
      else{
        p1_circle[value].style.backgroundColor="red";
      }
    });
    var p2_circle=document.getElementById("player2").children;
    player2.p2_val.forEach((run,value)=>{
      if(run%2==0)
      {
        p2_circle[value].style.backgroundColor="green";
      }
      else{
        p2_circle[value].style.backgroundColor="red";
      }
    });
    
    
}