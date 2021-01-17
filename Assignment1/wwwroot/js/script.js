//David Schraedel
//JavaScript for grade calculation


//perform calculation upon click of 'submitButton' input
var submit = document.getElementById('submitButton');

submit.addEventListener('click', function () {
    //define variables
    var fGradePercentage = 0.0;
    var sGradeLetter = '';
    var fAssignments = parseFloat(document.getElementById('assignments').value);
    var fGroupProject = parseFloat(document.getElementById('groupProject').value);
    var fQuizzes = parseFloat(document.getElementById('quizzes').value);
    var fExams = parseFloat(document.getElementById('exams').value);
    var fIntex = parseFloat(document.getElementById('intex').value);

    //calculate grade based on inputs
    fGradePercentage = fAssignments + fGroupProject + fQuizzes + fExams + fIntex;
    if (fGradePercentage >= 94) {
        sGradeLetter = 'A';
    }
    else if (fGradePercentage >= 90) {
        sGradeLetter = 'A-';
    }
    else if (fGradePercentage >= 87) {
        sGradeLetter = 'B+';
    }
    else if (fGradePercentage >= 84) {
        sGradeLetter = 'B';
    }
    else if (fGradePercentage >= 80) {
        sGradeLetter = 'B-';
    }
    else if (fGradePercentage >= 77) {
        sGradeLetter = 'C+';
    }
    else if (fGradePercentage >= 74) {
        sGradeLetter = 'C';
    }
    else if (fGradePercentage >= 70) {
        sGradeLetter = 'C-';
    }
    else if (fGradePercentage >= 67) {
        sGradeLetter = 'D+';
    }
    else if (fGradePercentage >= 64) {
        sGradeLetter = 'D';
    }
    else if (fGradePercentage >= 60) {
        sGradeLetter = 'D-';
    }
    else {
        sGradeLetter = 'E';
    }

    //display calculated products on page
    document.getElementById('calculatedLetterGrade').innerHTML = sGradeLetter;
    document.getElementById('calculatedPercentGrade').innerHTML = fGradePercentage + "%"; 
});