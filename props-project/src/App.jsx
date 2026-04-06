import React from 'react'
import Cards from './components/Cards'
import './components/Cards.css'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    company: "Meta",
    datePosted: "2 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Menlo Park, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    company: "Apple",
    datePosted: "5 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Cupertino, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Seattle, WA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    company: "Google",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Mountain View, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Redmond, WA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    company: "OpenAI",
    datePosted: "4 days ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "GPU Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Santa Clara, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128",
    company: "LinkedIn",
    datePosted: "3 weeks ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Sunnyvale, CA, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
    company: "Stripe",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Dublin, Ireland"
  }
];

return (
  
  <div className='container'>
      {jobOpenings.map(function (elem, idx){
        return <div key={idx}>
          <Cards  brandLogo = {elem.brandLogo} companyName = {elem.company} datePosted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}  />
        </div>
      })}
    </div>
  )
}

export default App
