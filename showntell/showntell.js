function LeanersTrackingProgress() {
    this.quizzes = {};
    this.progress = {};

    this.addQuiz = function(language, proficiencyLevel, quiz) {
        var key = language + "-" + proficiencyLevel;
        if (!this.quizzes[key]) {
            this.quizzes[key] = [];
        }
        this.quizzes[key].push(quiz);
    };

    this.getQuizzes = function(language, proficiencyLevel) {
        var key = language + "-" + proficiencyLevel;
        return this.quizzes[key]? this.quizzes[key] : [];
    };

    this.trackProgress = function(userId, correctAnswers) {
        if (!this.progress[userId]) {
            this.progress[userId] = 0;
        }
        this.progress[userId] += correctAnswers;
    };

    this.getProgress = function(userId) {
        return this.progress[userId] || 0;
    };

this.determineOutcome = function(userId) {
        var totalQuizzes = Object.values(this.quizzes).flat().length;
        var correctAnswers = this.getProgress(userId);
        var percentageCorrect = (correctAnswers / totalQuizzes) * 100;

        if (percentageCorrect >= 50) {
            return "Pass";
        } else {
            return "Fail";}}}
function main() {
    var app = new LeanersTrackingProgress();
    app.addQuiz("Kotlin", "Intermediate", "How do you use pointers to reverse a string?");
    app.addQuiz("Python", "Beginner", "How does split work?");

    var user1 = "Linet";
    app.trackProgress(user1, 2);
    console.log("User " + user1 + " progress: " + app.getProgress(user1) + " correct answers");
    var englishIntermediateQuizzes = app.getQuizzes("Kotlin", "Intermediate");
    console.log("Kotlin Intermediate Quizzes:");
    englishIntermediateQuizzes.forEach(function(quiz, index) {
        console.log((index + 1) + ". " + quiz);
    });

    var user2 = "Karen";
    app.trackProgress(user2, 2);
    console.log("User " + user2 + " progress: " + app.getProgress(user2) + " correct answers");
    var javaScriptBeginnerQuizzes = app.getQuizzes("Python", "Beginner");
    console.log("Python Beginner Quizzes:");
    javaScriptBeginnerQuizzes.forEach(function(quiz, index) {
        console.log((index + 1) + ". " + quiz);
    });
}


main();

