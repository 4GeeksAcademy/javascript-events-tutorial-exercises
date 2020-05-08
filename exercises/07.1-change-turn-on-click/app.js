var currentUser = "Mario";

function loadfn(){
	document.getElementById('screen').innerHTML = "It's "+currentUser+"'s turn";
}

function turnChanger()
{
	if(currentUser=="Mario")
	{
		currentUser = "Juan";
	}
	else
	{
		currentUser = "Mario";
	}
	
	document.getElementById('screen').innerHTML = "It's "+currentUser+"'s turn";
}