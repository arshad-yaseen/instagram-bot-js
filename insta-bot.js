let followbutton;
let unfollowbutton;

if(document.querySelectorAll('._acan').length == 1){
  followbutton = document.querySelectorAll('.PolarisIGButton')[1] || document.querySelectorAll('._acan')[0]
  unfollowbutton = document.querySelectorAll('.PolarisIGButton')[1] || document.querySelectorAll('._acan')[0]
}else{
  followbutton = document.querySelectorAll('.PolarisIGButton')[1] || document.querySelectorAll('._acan')[1]
  unfollowbutton = document.querySelectorAll('.PolarisIGButton')[1] || document.querySelectorAll('._acan')[1]
}

let timeBetweenClick = 2000;
let timeBetweenFollowUnfollow = 30000;
let iterateCount = 9;
let timeBetweenSessions =  3600000;
let followedUnfollowedCount = 0;
let maximumInstagramAllowedFollowCount = 145;

function startClick() {
    
    followedUnfollowedCount += 1;
    setTimeout(() => {
    followbutton.click();
  }, 0);
  setTimeout(() => {
    unfollowbutton.click();
  }, timeBetweenClick);
  timeBetweenClick += timeBetweenClick;
  setTimeout(() => {
    document.querySelector('._a9--').click()
  }, timeBetweenClick);
  timeBetweenClick = 2000;
}

function startBot() {
  let count = 1;
  let minusCount = timeBetweenFollowUnfollow;
  let botStartTimer = 30

  setInterval(()=> {
    if(botStartTimer > 0 && botStartTimer <= 30) {
      console.log('Bot starts in : ' + botStartTimer)
    }
    botStartTimer = botStartTimer - 1
  },1000)

  setInterval(() => {
    if (count <= iterateCount && followedUnfollowedCount < maximumInstagramAllowedFollowCount) {
      count = count + 1;
      startClick();
    } else {
      minusCount += timeBetweenFollowUnfollow;
      setTimeout(() => {
        count = 1;
      }, timeBetweenSessions - minusCount);
    }
  }, timeBetweenFollowUnfollow);
}

  startBot();
  