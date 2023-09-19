
const hourshand = document.querySelector('#hours-indicator');
const minuteshand = document.querySelector('#minutes-indicator');
const secondshand = document.querySelector('#seconds-indicator');
const hourswrapper = document.querySelector('#hours-wrapper');
const hours = document.getElementsByClassName('hours');
var html = '';
var count = 1;
let maxdegree = 30;
setInterval(() => {
    let d  = new Date();
    let current_hour = d.getHours()/12 * 360 -90;
    let  current_minutes = d.getMinutes()/60 *360 -90;
    let  current_seconds = d.getSeconds()/60 *360 -90;
    secondshand.style.transform = 'rotateZ('+current_seconds+'deg)';
    hourshand.style.transform = 'rotateZ('+current_hour+'deg)';
    minuteshand.style.transform = 'rotateZ('+current_minutes+'deg)';
},1000);


for(count = 1; count <= 12; count++)
{
    html+= '<div class="hours" id="'+count+'"><span class="hourstxt">'+count+'</span>';
    for( let j =1; j<=10; j++)
    {
        html+='<span class="min">|</span>';
    }

    html+='</div>';

}

hourswrapper.innerHTML = html;

Array.prototype.forEach.call(hours,function(hour){
    if( maxdegree <= 360 )
    {
        hour.style.transform = 'rotate('+maxdegree+'deg)';
    }
    maxdegree += 30;
});