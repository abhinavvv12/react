import React from 'react'
import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    role: "Software Engineer, Search",
    datePosted: "3 days ago",
    postTag1: "Full Time",
    postTag2: "Junior Level",
    pay: "$32/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    role: "Software Engineer II",
    datePosted: "5 days ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$48/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    role: "Software Development Engineer",
    datePosted: "1 week ago",
    postTag1: "Full Time",
    postTag2: "Junior Level",
    pay: "$30/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    role: "Full Stack Software Engineer",
    datePosted: "4 days ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$55/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    role: "iOS Software Engineer",
    datePosted: "2 weeks ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$52/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    role: "Senior Backend Engineer",
    datePosted: "10 days ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    role: "AI/ML Software Engineer",
    datePosted: "3 weeks ago",
    postTag1: "Full Time",
    postTag2: "Junior Level",
    pay: "$38/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/oracle",
    companyName: "Oracle",
    role: "Cloud Software Engineer",
    datePosted: "6 days ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$44/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/ibm",
    companyName: "IBM",
    role: "Data Engineer",
    datePosted: "2 weeks ago",
    postTag1: "Part Time",
    postTag2: "Junior Level",
    pay: "$27/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    companyName: "Adobe",
    role: "Frontend Software Engineer",
    datePosted: "10 weeks ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$46/hour",
    location: "Noida, India"
  }
];
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){

        return <Card brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} postTag1={elem.postTag1} postTag2={elem.postTag2} pay={elem.pay}
        location={elem.location} role={elem.role} />
      })}
    </div>
  )
}

export default App
