var button = [];
for(var i = 1;i < 10; i++) button[i] = document.getElementById('canvas'+i);

var ctx = [];
for(var i = 1;i < 10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = [];
for(var i = 1;i < 10; i++) bDisabled[i] = false;
/*bdisabled stands for button disabled .its use is to disable canvas element.so ypu cannot draw on one canvas more than one time.*/
var Result = false;/* this var is to stop the game once it is completed*/
var content =[]; /*This is to hold the value of the canvas element*/

function loop(x) /*whatever canvas the user clicks that wud b equal to x*/
{
	if(!bDisabled[x])/* it says that if bdisabled is false run the code inside the if statement but by default it is false as we 
	have assigned*/
	{
		bDisabled[x] = true;
		button[x].style.opacity = 0.7;
		content[x] = 'x';/*it sets any canvas value u click to x*/
		
		button[x].style.webkitTransform = "rotateY(180deg)";
		
		setTimeout(function()
	{
	ctx[x].lineWidth = 3;
	ctx[x].beginPath();
	ctx[x].moveTo(10,10);
	ctx[x].lineTo(90,90);
	ctx[x].moveTo(90,10);
	ctx[x].lineTo(10,90);
	ctx[x].stroke();
	ctx[x].closePath();
	
	computerTurn();
	},300);
	
	setTimeout (checkWinner ,1000);
		
	}
}

function computerTurn()
{
	var h = Math.random();
	
	if(content[1] == '0' && content[2] =='0' && !bDisabled[3]) draw0Steps(3);
	else if(content[2] == '0' && content[3] =='0' && !bDisabled[1]) draw0Steps(1);
	else if(content[3] == '0' && content[1] =='0' && !bDisabled[2]) draw0Steps(2);
	
	else if(content[4] == '0' && content[5] =='0' && !bDisabled[6]) draw0Steps(6);
	else if(content[5] == '0' && content[6] =='0' && !bDisabled[4]) draw0Steps(4);
	else if(content[6] == '0' && content[4] =='0' && !bDisabled[5]) draw0Steps(5);
	
	else if(content[7] == '0' && content[8] =='0' && !bDisabled[9]) draw0Steps(9);
	else if(content[8] == '0' && content[9] =='0' && !bDisabled[7]) draw0Steps(7);
	else if(content[9] == '0' && content[7] =='0' && !bDisabled[8]) draw0Steps(8);
	
	else if(content[1] == '0' && content[4] =='0' && !bDisabled[7]) draw0Steps(7);
	else if(content[4] == '0' && content[7] =='0' && !bDisabled[1]) draw0Steps(1);
	else if(content[7] == '0' && content[1] =='0' && !bDisabled[4]) draw0Steps(4);
	
	else if(content[2] == '0' && content[5] =='0' && !bDisabled[8]) draw0Steps(8);
	else if(content[5] == '0' && content[8] =='0' && !bDisabled[2]) draw0Steps(2);
	else if(content[8] == '0' && content[2] =='0' && !bDisabled[5]) draw0Steps(5);
	
	else if(content[3] == '0' && content[6] =='0' && !bDisabled[9]) draw0Steps(9);
	else if(content[6] == '0' && content[9] =='0' && !bDisabled[3]) draw0Steps(3);
	else if(content[9] == '0' && content[3] =='0' && !bDisabled[6]) draw0Steps(6);
	
	else if(content[1] == '0' && content[5] =='0' && !bDisabled[9]) draw0Steps(9);
	else if(content[5] == '0' && content[9] =='0' && !bDisabled[1]) draw0Steps(1);
	else if(content[9] == '0' && content[1] =='0' && !bDisabled[5]) draw0Steps(5);
	
	else if(content[3] == '0' && content[5] =='0' && !bDisabled[7]) draw0Steps(7);
	else if(content[5] == '0' && content[7] =='0' && !bDisabled[3]) draw0Steps(3);
	else if(content[7] == '0' && content[3] =='0' && !bDisabled[5]) draw0Steps(5);
	
	else if(content[1] == 'x' && content[2] =='x' && !bDisabled[3]) draw0Steps(3);
	else if(content[2] == 'x' && content[3] =='x' && !bDisabled[1]) draw0Steps(1);
	else if(content[3] == 'x' && content[1] =='x' && !bDisabled[2]) draw0Steps(2);
	
	else if(content[4] == 'x' && content[5] =='x' && !bDisabled[6]) draw0Steps(6);
	else if(content[5] == 'x' && content[6] =='x' && !bDisabled[4]) draw0Steps(4);
	else if(content[6] == 'x' && content[4] =='x' && !bDisabled[5]) draw0Steps(5);
	
	else if(content[7] == 'x' && content[8] =='x' && !bDisabled[9]) draw0Steps(9);
	else if(content[8] == 'x' && content[9] =='x' && !bDisabled[7]) draw0Steps(7);
	else if(content[9] == 'x' && content[7] =='x' && !bDisabled[8]) draw0Steps(8);
	
	else if(content[1] == 'x' && content[4] =='x' && !bDisabled[7]) draw0Steps(7);
	else if(content[4] == 'x' && content[7] =='x' && !bDisabled[1]) draw0Steps(1);
	else if(content[7] == 'x' && content[1] =='x' && !bDisabled[4]) draw0Steps(4);
	
	else if(content[2] == 'x' && content[5] =='x' && !bDisabled[8]) draw0Steps(8);
	else if(content[5] == 'x' && content[8] =='x' && !bDisabled[2]) draw0Steps(2);
	else if(content[8] == 'x' && content[2] =='x' && !bDisabled[5]) draw0Steps(5);
	
	else if(content[3] == 'x' && content[6] =='x' && !bDisabled[9]) draw0Steps(9);
	else if(content[6] == 'x' && content[9] =='x' && !bDisabled[3]) draw0Steps(3);
	else if(content[9] == 'x' && content[3] =='x' && !bDisabled[6]) draw0Steps(6);
	
	else if(content[1] == 'x' && content[5] =='x' && !bDisabled[9]) draw0Steps(9);
	else if(content[5] == 'x' && content[9] =='x' && !bDisabled[1]) draw0Steps(1);
	else if(content[9] == 'x' && content[1] =='x' && !bDisabled[5]) draw0Steps(5);
	
	else if(content[3] == 'x' && content[5] =='x' && !bDisabled[7]) draw0Steps(7);
	else if(content[5] == 'x' && content[7] =='x' && !bDisabled[3]) draw0Steps(3);
	else if(content[7] == 'x' && content[3] =='x' && !bDisabled[5]) draw0Steps(5);
	
    
	
	else if(h < 0.1 && !bDisabled[1]) draw0Steps(1);
	else if(h < 0.2 && !bDisabled[2]) draw0Steps(2);
	else if(h < 0.3 && !bDisabled[3]) draw0Steps(3);
	else if(h < 0.4 && !bDisabled[4]) draw0Steps(4);
	else if(h < 0.5 && !bDisabled[5]) draw0Steps(5);
    else if(h < 0.6 && !bDisabled[6]) draw0Steps(6);
	else if(h < 0.7 && !bDisabled[7]) draw0Steps(7);
	else if(h < 0.8 && !bDisabled[8]) draw0Steps(8);
	else if(h < 1 && !bDisabled[9]) draw0Steps(9);
	else computerTurn();
		}
		
		function draw0Steps(x)
		{
			bDisabled[x] = true;
			button[x].style.opacity = 0.6;
			content[x] = '0';
			button[x].style.webkitTransform = "rotateX(180deg)";
			
			setTimeout(function()/*it delays the part of the code to show its action*/
			{
			    ctx[x].beginPath();
			    ctx[x].lineWidth = 3;
			    ctx[x].arc(50,50,34,0,Math.PI*2,false);/*arc is a method of context object.it takes 6 values and we use this to draw arcs pr circles.
			first and sec value is from x and y axis the center of the arc or circle.3 value is radius .4 value is starting and ending angle of 
			circle.*/
			    ctx[x].stroke();
			    ctx[x].closePath();
		    },   600);
		}
		
		function checkWinner()
		{
			if(!Result)
			{
				if(content[1] == 'x' && content[2] =='x' && content[3] == 'x') showWinner('VICTORY!');
				else if(content[4] == 'x' && content[5] =='x' && content[6] == 'x') showWinner('VICTORY!');
				else if(content[7] == 'x' && content[8] =='x' && content[9] == 'x') showWinner('VICTORY!');
				else if(content[1] == 'x' && content[4] =='x' && content[7] == 'x') showWinner('VICTORY!');
				else if(content[2] == 'x' && content[5] =='x' && content[8] == 'x') showWinner('VICTORY!');
				else if(content[3] == 'x' && content[6] =='x' && content[9] == 'x') showWinner('VICTORY!');
				else if(content[1] == 'x' && content[5] =='x' && content[9] == 'x') showWinner('VICTORY!');
				else if(content[3] == 'x' && content[5] =='x' && content[7] == 'x') showWinner('VICTORY!');
				
				else if(content[1] == '0' && content[2] =='0' && content[3] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				else if(content[4] == '0' && content[5] =='0' && content[6] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				else if(content[7] == '0' && content[8] =='0' && content[9] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				else if(content[1] == '0' && content[4] =='0' && content[7] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				else if(content[2] == '0' && content[5] =='0' && content[8] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				else if(content[3] == '0' && content[6] =='0' && content[9] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				else if(content[1] == '0' && content[5] =='0' && content[9] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				else if(content[3] == '0' && content[5] =='0' && content[7] == '0') showWinner('SAD! YOU LOSE! BETTER LUCK NEXT TIME xD');
				
				else if (
				(content[1] == 'x' || content[1] =='0') &&
				(content[2] == 'x' || content[2] =='0') &&
				(content[3] == 'x' || content[3] =='0') &&
				(content[4] == 'x' || content[4] =='0') &&
				(content[5] == 'x' || content[5] =='0') &&
				(content[6] == 'x' || content[6] =='0') &&
				(content[7] == 'x' || content[7] =='0') &&
				(content[8] == 'x' || content[8] =='0') &&
				(content[9] == 'x' || content[9] =='0')
				)
				showWinner("YOU ARE AS SMART AS ME :D! LETS PLAY AGAIN! ");
			}
		}
		
		function showWinner(x)
		{
			alert(x);
			Result = true;
		}
		