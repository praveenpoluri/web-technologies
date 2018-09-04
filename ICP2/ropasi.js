var display = prompt("your choice among r,p,s");
var comp = Math.random();
if(comp<0.34)
{
    var compout="rock";
}
else if(0.34<=comp <0.67)
{
    compout="paper";
}
else
{
    compout="scissors";

}

function cmp(user,mac) {
    if (mac != user) {
        if (user === paper) {
            if (mac === rock)
                alert( "user wins");

            else {
                alert( "comp wins!");
            }
        }
        else if (user === rock) {
            if (mac === paper)
                alert("user wins!");
            else
                alert("comp wins!");
        }
        else {
            if (mac === rock) {
                alert("userwins!");
            }
            else {
                alert("comp wins!");
            }
        }
    }

        else
                {
                    alert( "it is a tie!");
                }



}
cmp(display,compout).toString();











