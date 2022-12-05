import React from 'react'
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

function Rating({value, text, color}) {
    return (
        <div className="rating">
            <span>
                {
                    value >= 1
                        ? <FaStar style={{color}}/>
                        : value >= 0.5
                            ? <FaStarHalfAlt style={{color}}/>
                            : <FaRegStar style={{color}}/>
                }
            </span>

            <span>
                {
                    value >= 2
                        ? <FaStar style={{color}}/>
                        : value >= 1.5
                            ? <FaStarHalfAlt style={{color}}/>
                            : <FaRegStar style={{color}}/>
                }
            </span>

            <span>
                {
                    value >= 3
                        ? <FaStar style={{color}}/>
                        : value >= 2.5
                            ? <FaStarHalfAlt style={{color}}/>
                            : <FaRegStar style={{color}}/>
                }
            </span>

            <span>
                {
                    value >= 4
                        ? <FaStar style={{color}}/>
                        : value >= 3.5
                            ? <FaStarHalfAlt style={{color}}/>
                            : <FaRegStar style={{color}}/>
                }
            </span>

            <span>
                {
                    value >= 5
                        ? <FaStar style={{color}}/>
                        : value >= 4.5
                            ? <FaStarHalfAlt style={{color}}/>
                            : <FaRegStar style={{color}}/>
                }
            </span>

            <span>{text && text}</span>
        </div>
    )
}

export default Rating
