let followbutton = document.querySelectorAll('._acan')[1]
let unfollowbutton = document.querySelectorAll('._acan')[1]

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

//Clicking Animation (This Is Optional)
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.onclick = function () {
    button.style.backgroundColor = "black";
    button.style.color = "white";

    setTimeout(() => {
      button.style.backgroundColor = "#EFEFEF";
      button.style.color = "black";
    }, 200);
  };
});
