<script type="text/javascript">
var count = 6;
var redirect = "https://www.sspcschool.us";
 
function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "This page will redirect in "+count+" seconds.";
        setTimeout("countDown()", 1000);
    }else{
        window.location.href = redirect;
    }
}
</script>
 
Our webpage has beed moved. Please update your bookmarks for the new site.
<br>
 
<span id="timer">
<script type="text/javascript">countDown();</script>
</span>
