
function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function isEven (number) {
    return number % 2;
  }

const delay = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved'), 500);
});

const rand = () => new Promise((resolve, reject) => {
    const num = random(1, 100);
    if (isEven(num)) {
        resolve('even');
    } else {
        reject('odd')
    }
});


console.log(Date.now());
delay().then(
    (result) => console.log(Date.now(), result)
)
rand()
    .then(
        result => console.log(result)
    ).catch(
        result => console.log(result)
    )
console.log(Date.now());
