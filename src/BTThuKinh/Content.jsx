import React, { useState } from 'react'
import Glass from './Glass'
import Style from './edits.module.css'
import Data from './data.json'
const Content = () => {
    const [imgSrc, setUrl] = useState('./image/glassesImage/v1.png')

    const handleSetUrl = (url) => {
        setUrl(url)
    }
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <img className='img-fluid' style={{ width: 350, height: 450, marginTop: 20, borderRadius: 20 }} src="./image/glassesImage/model.jpg" alt="..." />
                    <div className={Style.edits}>
                        <img className='img-fluid' src={imgSrc} alt="..." />
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        {
                            Data.map((v) => {
                                return <Glass v={v} handleSetUrl={handleSetUrl} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
