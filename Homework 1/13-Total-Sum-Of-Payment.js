// For the given list of payments do the following exercises:
// Տրված վճարումնեի ցուցակի համար կատարել հետևյալ վարժություննորը։
// Calculate the total sum of payment amounts made by each student. We need to return an array that contains a list of information about students, including the total paid amount by the student.
// Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։ Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array), որը ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից ամբողջ վճարված գումարը։

const payments = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe", // Name of the student
      payedAmount: 1600, // Amount payed with this transaction
      year: 2020, // The payment year
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1500,
      year: 2021
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1400,
      year: 2022
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1300,
      year: 2023
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1500,
      year: 2020
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1400,
      year: 2021
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1300,
      year: 2023
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1200,
      year: 2023
    }
   ];
   function getTotalSumOfPayment() {
    let firstSum = 0;
    let secondSum = 0;
    let first = 0;
    let sec = 0;
    for (let i = 0; i < payments.length; i++) {
      if (payments[i].studentId === 1) {
        firstSum += payments[i].payedAmount;
        first = i;
    }
  }
    for (let j = 0; j < payments.length; j++) {
      if (payments[j].studentId === 2) {
        secondSum += payments[j].payedAmount;
        sec = j;
    }
  }
  console.log(payments[first]);
  console.log(firstSum);
  console.log(payments[sec]);
  console.log(secondSum);
}
getTotalSumOfPayment();