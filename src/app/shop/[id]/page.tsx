import Bestselling from '@/components/best-selling/Bestselling'
import Productdetailes from '@/components/productdetailes/Productdetailes'
import React from 'react'





async function DynamicProduct({params}:{params:Promise<{id:number}>}) {

const {id}= await params
  return (
    <div>
        
        <Productdetailes cardId={id}/>


        <div style={{marginBottom:"130px", width:"1199px", margin:"auto"}}>
        <Bestselling/>
        </div>
    </div>
  )
}

export default DynamicProduct