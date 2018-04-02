class Question {
    constructor([i],question, a, b, c, answer){

        this.question = question,
        this.a = a, 
        this.b = b,
        this.c = c,
        this.answer = answer,
        this.response = window.prompt(`${this.question} \n a) ${this.a} \n b) ${this.b} \n c) ${this.c}`)
        this.score = 0

        if (this.response === this.answer){
            alert('Correct!')
            this.score += 1
        } else if (this.response === null) {
            alert('No reponse.')
            this.score += 0
        } else {
            alert('Sorry, incorrect.')
            this.score += 0
        }
    }
    }


let one = new Question([0],'Which African country has Cairo as its capital city?', 'Egypt', 'Ethiopia', 'Congo', 'a')
let two = new Question([1],'Which comic book company created The Avengers, Spiderman and X-Men?', 'DC', 'Dark Horse', 'Marvel', 'c')
let three = new Question([2],'Which chemical element has the symbol K?', 'Sodium', 'Potassium', 'Krypton', 'b')
let four = new Question([3], 'Who was the first woman to be Prime Minister of the UK?', 'Margaret Thatcher', 'Emma Watson', 'Keira Knightley', 'a')
let five = new Question([4], 'Which car company produces the Accord and the Civic?', 'Toyota', 'Subaru', 'Honda', 'c')

function add() {
    return one.score + two.score + three.score + four.score + five.score
}
let finalScore = 'Your score is ' + add()

alert(finalScore)

