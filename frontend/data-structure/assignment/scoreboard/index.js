class Score {
    constructor(name, correct, wrong, empty) {
        this.name = name;
        this.correct = correct;
        this.wrong = wrong;
        this.empty = empty;
    }
}

class Scores {
    constructor(scores) {
        this.scores = scores;
    }

    topStudents() {
        let scores = [];
        for (let score of this.scores) {
            scores.push({
                name: score.name,
                correct: score.correct,
                wrong: score.wrong,
                empty: score.empty,
                score: 4 * score.correct - 1 * score.wrong
            });
        }

        scores.sort((a, b ) => {
            if (a.score > b.score) return -1;
            else if (a.score < b.score) return 1;
            else {
                if (a.correct > b.correct) return -1;
                else if (a.correct < b.correct) return 1;
                else {
                    return a.name - b.name;
                }
            }
        })

        let topStudents = [];
        for (let score of scores) {
            topStudents.push(score.name);
        }

        return topStudents;
    }
}

// let s = []
// s.push(new Score("Levi", 3, 2, 2)) //score: 3*4 - 2 = 10
// s.push(new Score("Agus", 3, 4, 0)) //score: 3*4 - 4 = 8
// s.push(new Score("Anon", 3, 0, 4)) //score: 3*4 - 0 = 12
// s.push(new Score("Abudiah", 2, 0, 5)) //score: 2*4 - 0 = 8
// s.push(new Score("Bagusiah", 3, 4, 0)) //score: 3*4 - 4 = 8
// let scores = new Scores(s)
// console.log(scores.topStudents());

module.exports = {
    Score,
    Scores
}
