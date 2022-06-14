// sitting up variables
let input1 = document .querySelector(".tweet-details input");
let input2 = document .querySelector("user-name input")
let theTweetButton = document .querySelector(".new-tweet-actions .click");
let newsFeed = document.querySelector(".news-feed");
let noNewsFeed = document .querySelector(".no-news-feed");
// let createTweet = document.createElement("span");
// let likeElement = document.createElement("span");

// let republish = document.createElement("span");
// let text = document.createTextNode(input1.value);
// let textRepublish = document.createTextNode("republish");
// let textLike = document.createTextNode("like");
// focus on Input feield
window.onload = function () {
    input1.focus();
};
   
//tweeting
theTweetButton.onclick = function (){
    if (input1 .value === ''){
    console.log("No value");
    } else {
    noNewsFeed.remove();
   
// createTweet.appendChild(text);
// createTweet.className = 'feed-box';
// likeElement.appendChild(textLike);
// republish.appendChild(textRepublish);
// likeElement.className = 'like';
// republish.className = 'Republish';
// createTweet.appendChild(likeElement);
// createTweet.appendChild(republish);
// newsFeed.appendChild(createTweet);
    }};
