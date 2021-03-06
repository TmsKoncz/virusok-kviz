const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 20

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(50)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('https://tmskoncz.github.io/virusok-kviz/highscores')
    //TESZT SZENVEDÉS
    var retrievedObject = localStorage.getItem('highScores');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    //TESZT VÉGE

    
}


console.log(username);