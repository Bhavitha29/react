import React from 'react'

function Rating(props){

    const {rating,numReviews}= props;
    //let, var, const,
    //let, const define a variable with a block scope which means it is accessible only in {}
    //var defines a variable with a function scope  which means its accessible in funcion{}
    //const means constant , it cannot be  declared or updated 
    //let can be updated, but cannot be redeclared
    //var with this u can do anything


    return(
        //in react only one parent div is allowed in retturn of a functional component
        //this looks like html, but actually is jsx
        <div>
            <div className="rating">
                            <span>
                    <i className={(rating=0)?"fa fa-star":(rating=0.5)?"fa fa-star-half-o":"fa fa-star"}></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
            </div>

        </div>


    );
}