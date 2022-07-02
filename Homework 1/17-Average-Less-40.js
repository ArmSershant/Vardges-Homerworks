// For the given list of exams, and evaluations do the following exercises.
// Տրված քննությունների արդյունքների ցուցակի համար, կատարել հետևյալ վարժությունները։
// Return array of students for whom the average evaluation is less than 40,
// Վերադարձնել այն ուսանողների ցուցակը որոնց միջին գնահատականը 40 ից ցածր է։
const evaluations = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 70
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 60
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 60
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 40
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 45
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 35
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 25
    }
   ];

function getAverage() {
    let sum = 0;
    for (let i = 0; i < evaluations.length; i++) {
        sum += evaluations[i].score;
        let scoreAvg = sum / evaluations.length;
        if (scoreAvg < 40) {
            console.log(scoreAvg);
        }
    }
}
getAverage()
