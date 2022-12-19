import React from 'react'

//Medium
const BasicInfo = ({ person }) => {
    return (
      //VeryEasy
      <div className='App'>
          <ul> 
                <li>{person.Name}</li>
                <li>{person.Number}</li>
                <li>{person.DOB}</li>
                <li>{person.Email }</li>
            </ul>
    </div>
  )
}

export default BasicInfo;

