const comments = [{
    id: 1,
    username: 'Sean Wright',
    message: 'This is a <strong>great</strong> demo!'
}, {
    id: 2,
    username: 'Jane Austen',
    message: 'I am a prolific writer'
}, {
    id: 3,
    username: 'Wu Zetian',
    message: 'I was the <strong>sole</strong> officially recognized empress regnant of China in more than two millennia'
}, {
    id: 4,
    username: 'H4ck3r!',
    message: `<script>(function(){const elems=document.querySelectorAll("[name='id']");const me=elems[elems.length-1];document.addEventListener('DOMContentLoaded',reset);function reset(e){const idEls=Array.from(document.querySelectorAll("[name='id']"));const ids=shuffle(idEls.filter(el=>el!==me).map(el=>el.value));idEls.forEach((el,i)=>el.value=ids[i]);function shuffle(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue}return array}}})();</script>`
}, {
    id: 5,
    username: 'Test User',
    message: `<span style="color: red;">Test comment</span>`
}];

module.exports = {
    comments
};