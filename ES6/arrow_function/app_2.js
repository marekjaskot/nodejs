/**
 * Created by Marek Jaskot <m.jaskot@kei.pl> on 02.06.16.
 */


function Scores(score) {
    this.scoreList = [score];

    this.addScore = function (arr){
        return arr.map(score => {
            return this.scoreList.push(score);
        });
    }
}

var sco = new Scores('10pt');
sco.addScore(['20pt','30pt'])
console.log(sco.scoreList);



