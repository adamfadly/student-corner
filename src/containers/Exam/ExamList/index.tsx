import React from "react";

const Exams = () => {
  const employees = [
    {
      id: 1,
      totalQuestion: 10,
      subject: "Math",
      score: 100,
      correctAnswers: 15,
      wrongAnswers: 2,
    },
    {
      id: 2,
      totalQuestion: 25,
      subject: "History",
      score: 100,
      correctAnswers: 15,
      wrongAnswers: 2,
    },
    {
      id: 3,
      totalQuestion: 15,
      subject: "Algorithm",
      score: 100,
      correctAnswers: 15,
      wrongAnswers: 2,
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold mb-4">Exam Taken</h1>

        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="text-center  ">
              <th className="py-2 px-4 bg-gray-200 border-b">No</th>
              <th className="py-2 px-4 bg-gray-200 border-b">Subject</th>
              <th className="py-2 px-4 bg-gray-200 border-b">
                Correct Answers
              </th>
              <th className="py-2 px-4 bg-gray-200 border-b">Wrong Answers</th>
              <th className="py-2 px-4 bg-gray-200 border-b">Total Question</th>
              <th className="py-2 px-4 bg-gray-200 border-b">Score</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, idx) => (
              <tr className=" text-center" key={idx}>
                <td className="py-2 px-4 border-b">{idx + 1}</td>
                <td className="py-2 px-4 border-b ">{employee.subject}</td>
                <td className="py-2 px-4 border-b ">
                  {employee.correctAnswers}
                </td>
                <td className="py-2 px-4 border-b">{employee.wrongAnswers}</td>
                <td className="py-2 px-4 border-b">{employee.totalQuestion}</td>
                <td className="py-2 px-4 border-b">{employee.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exams;
