import React from 'react'

const Staff = () => {
  const staffData = [
    {
      sno: 1,
      name: "HANUMANTH U NIKHILANAND",
      gender: "Male",
      dob: "28-08-1972",
      empType: "REGULAR",
      department: "Economics",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.A.",
      dateOfService: "01-07-2015",
      status: "Presently",
      mobile: "9885942175",
      aadhar: "*******9567"
    },
    {
      sno: 2,
      name: "GAYITRI PININTI",
      gender: "Female",
      dob: "14-06-1981",
      empType: "REGULAR",
      department: "Botany",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.SC",
      dateOfService: "11-06-2007",
      status: "Presently",
      mobile: "8074895185",
      aadhar: "*******9668"
    },
    {
      sno: 3,
      name: "PRADEEPKU MAR ARPAT",
      gender: "Male",
      dob: "06-07-1982",
      empType: "REGULAR",
      department: "English",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "M.A.",
      dateOfService: "01-06-2022",
      status: "Presently",
      mobile: "9703073041",
      aadhar: "*******2799"
    },
    {
      sno: 4,
      name: "KOTHA SRINIVASA RAO",
      gender: "Male",
      dob: "01-07-1975",
      empType: "REGULAR",
      department: "Mathematics",
      type: "Teaching",
      designation: "Principal",
      qualification: "M.Sc",
      dateOfService: "01-09-2018",
      status: "Presently",
      mobile: "9440631157",
      aadhar: "*******5069"
    },
    {
      sno: 5,
      name: "ERIVENI KRIPPA",
      gender: "Female",
      dob: "15-06-1987",
      empType: "REGULAR",
      department: "Physics",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.SC",
      dateOfService: "01-06-2018",
      status: "Presently",
      mobile: "9494845663",
      aadhar: "*******8489"
    },
    {
      sno: 6,
      name: "MENDA APPANNA",
      gender: "Male",
      dob: "25-06-1982",
      empType: "REGULAR",
      department: "Chemistry",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "M.Ed",
      dateOfService: "06-08-2007",
      status: "Presently",
      mobile: "9951751475",
      aadhar: "*******1061"
    },
    {
      sno: 7,
      name: "MUDDADA NIRMALA",
      gender: "Female",
      dob: "05-08-1991",
      empType: "REGULAR",
      department: "Telugu",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.SC",
      dateOfService: "01-06-2020",
      status: "Presently",
      mobile: "9493468487",
      aadhar: "*******0738"
    },
    {
      sno: 8,
      name: "KRISHNA RAO PISINI",
      gender: "Male",
      dob: "10-06-1985",
      empType: "REGULAR",
      department: "Telugu",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "M.A.",
      dateOfService: "01-07-2013",
      status: "Presently",
      mobile: "9652392726",
      aadhar: "*******3604"
    },
    {
      sno: 9,
      name: "ATTADA JANARADHANA RAO",
      gender: "Male",
      dob: "22-05-1974",
      empType: "REGULAR",
      department: "History",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.A.",
      dateOfService: "01-06-2007",
      status: "Presently",
      mobile: "9949847679",
      aadhar: "*******5129"
    },
    {
      sno: 10,
      name: "GURUGUBEL LI LAKSHMANA RAO",
      gender: "Male",
      dob: "20-05-1971",
      empType: "REGULAR",
      department: "Librarian",
      type: "Teaching",
      designation: "Senior Instructor",
      qualification: "B.A.",
      dateOfService: "01-07-2000",
      status: "Presently",
      mobile: "9705266392",
      aadhar: "*******8705"
    },
    {
      sno: 11,
      name: "MURALIDHAR KOTA",
      gender: "Male",
      dob: "01-03-1968",
      empType: "REGULAR",
      department: "Others",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "M.Com,Ph.D Full Time",
      dateOfService: "14-06-2017",
      status: "Presently",
      mobile: "9440195480",
      aadhar: "*******5043"
    },
    {
      sno: 12,
      name: "APPINI BRAHMANA NDAM",
      gender: "Male",
      dob: "29-03-1981",
      empType: "REGULAR",
      department: "Mathematics",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "M.Ed",
      dateOfService: "15-07-2015",
      status: "Presently",
      mobile: "9989780444",
      aadhar: "*******5851"
    },
    {
      sno: 13,
      name: "RAVIKUMAR CHAKKA",
      gender: "Male",
      dob: "15-08-1985",
      empType: "REGULAR",
      department: "English",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.A.",
      dateOfService: "01-06-2018",
      status: "Presently",
      mobile: "8106028960",
      aadhar: "*******9065"
    },
    {
      sno: 14,
      name: "Gujju veera venkata satyanarayan a Reddy",
      gender: "Male",
      dob: "28-04-1984",
      empType: "REGULAR",
      department: "ComputerScience",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "MCA",
      dateOfService: "01-09-2010",
      status: "Presently",
      mobile: "9491815307",
      aadhar: "*******0254"
    },
    {
      sno: 15,
      name: "NARAYANA RAO A",
      gender: "Male",
      dob: "04-06-1977",
      empType: "REGULAR",
      department: "Mathematics",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.SC",
      dateOfService: "15-07-2015",
      status: "Presently",
      mobile: "9491569077",
      aadhar: "*******5005"
    },
    {
      sno: 17,
      name: "BALIDE SAMPADARA O",
      gender: "Male",
      dob: "18-03-1974",
      empType: "REGULAR",
      department: "Political Science",
      type: "Teaching",
      designation: "Lecturer",
      qualification: "B.A.",
      dateOfService: "23-07-2020",
      status: "Presently",
      mobile: "9949907309",
      aadhar: "*******7094"
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Staff Details</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr className="bg-base-200">
              <th className="text-sm">S.No</th>
              <th className="text-sm">Name</th>
              <th className="text-sm">Gender</th>
              <th className="text-sm">Date of Birth</th>
              <th className="text-sm">Employee Type</th>
              <th className="text-sm">Department</th>
              <th className="text-sm">Type</th>
              <th className="text-sm">Designation</th>
              <th className="text-sm">Qualification</th>
              <th className="text-sm">Date of Service</th>
              <th className="text-sm">Status</th>
              <th className="text-sm">Mobile</th>
              <th className="text-sm">Aadhar</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.sno} className="hover">
                <td className="text-xs">{staff.sno}</td>
                <td className="text-xs whitespace-normal">{staff.name}</td>
                <td className="text-xs">{staff.gender}</td>
                <td className="text-xs">{staff.dob}</td>
                <td className="text-xs">{staff.empType}</td>
                <td className="text-xs">{staff.department}</td>
                <td className="text-xs">{staff.type}</td>
                <td className="text-xs">{staff.designation}</td>
                <td className="text-xs">{staff.qualification}</td>
                <td className="text-xs">{staff.dateOfService}</td>
                <td className="text-xs">{staff.status}</td>
                <td className="text-xs">{staff.mobile}</td>
                <td className="text-xs">{staff.aadhar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Staff
