import React, { useState } from 'react'
import Questiondata from './Questiondata';
import MyAccordian from './MyAccordian';
const Accordian = () => {
    const [data,setData] = useState(Questiondata);

  return (
    <div>
        <h1>Hello</h1>
        {/* <ul>   mera code h 
        {
            data.map((item)=>(
           <>
                <li>{item.id}</li>
               <li>{item.question}</li>
               <li>{item.answer}</li>
               </>  ))
        }
        </ul> */}
        <>
        <section>
          <hi>React interview Question</hi>
        {
            data.map((currElem)=>{
                // const {id,question,answer} = currElem;
          const {id} = currElem;
                return <MyAccordian key={id}  
                  {...currElem}
                
                    />
            })
        }
        </section>
        </>
     


      
    </div>
  )
}

export default Accordian

