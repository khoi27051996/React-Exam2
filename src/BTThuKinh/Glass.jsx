import React from 'react'
import Data from './data.json'
const Glass = ({v, handleSetUrl}) => {
    return (
            <div className="col-4 mt-2" key={v.id} style={{ backgroundColor: 'rgba(223, 218, 218, 0.279)', borderRadius: 20 }}>
                <h5 className='font-weight-bold font-italic text-center'>{v.name}</h5>
                <img className='img-fluid' src={v.url} alt="..." />
                <div className="d-flex justify-content-between">
                <h5 className='font-weight-bold' >Giá: {v.price}$</h5>
                <button onClick={()=>{
                    handleSetUrl(v.url)
                }} className='btn btn-primary ml-5' >Thử</button>
                </div>
            </div>
    )
}

export default Glass
