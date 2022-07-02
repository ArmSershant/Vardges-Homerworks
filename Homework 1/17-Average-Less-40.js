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

function averageMore40() {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let id1 = [];
    let id2 = [];
    let id3 = [];
    let studentsAverage = [];
    let studentsMore40 = [];
    for (let i = 0; i < evaluations.length; i++) {
        if (evaluations[i].studentId == 1) {
            id1.push(evaluations[i]);
        } else if (evaluations[i].studentId == 2) {
            id2.push(evaluations[i])
        } else if (evaluations[i].studentId == 3) {
            id3.push(evaluations[i])
        }
    }
    let sum1 = 0;
    let student;
    for (let i = 0; i < id1.length; i++) {
        sum1 = sum1 + id1[i].score;
    }
    let average1 = sum1/id1.length;
    studentsAverage.push(average1);
    let sum2 = 0;
    for (let i = 0; i < id2.length; i++) {
        sum2 = sum2 + id2[i].score;
    }
    let average2 = sum2/id2.length;
    studentsAverage.push(average2);
    let sum3 = 0;
    for (let i = 0; i < id3.length; i++) {
        sum3 = sum3 + id3[i].score;
    }
    let average3 = sum3/id3.length;
    studentsAverage.push(average3);
    for (let i = 0; i < studentsAverage.length; i++) {
        if (studentsAverage[i]>40) {
            studentsMore40.push(studentsAverage[i])
        }
    }
    console.log(studentsMore40);
}
averageMore40()