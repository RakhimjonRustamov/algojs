/*
Lesson 4
Tournament Winner
Which team has most wins and results array shows 0 if away team wins but 1
Solution 1
Time: O(n) and Space O(k) k - is where number of competitions
const winner = function(competitions, results) {
    const scores = {};
    let bestTeam = "";
    scores[""] = 0;

    for(let i=0; i<competitions.length; i++) {
        let result = results[i];
        const team = result > 0 ? 0 : 1;
        if(scores[competitions[i][team]]) {
            scores[competitions[i][team]] +=3;
            if(scores[bestTeam] < scores[competitions[i][team]]) {
                bestTeam = competitions[i][team];
            }
        } else {
            scores[competitions[i][team]] = 3;
        }
    }
    return bestTeam;
}
 */

const updateScores = (team, point, scores) => {
    if(!scores[team])
       scores[team] = 0;

    scores[team] += point;
}

const winner = function(competitions, results) {
    let currentBestTeam = "";
    let scores = {"": 0};

    for (let [index, val] of competitions.entries()) {
        let result = results[index]
        let [homeTeam, awayTeam] = val
        let winningTeam = result > 0 ? homeTeam : awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }

    return currentBestTeam;
}

module.exports = winner;