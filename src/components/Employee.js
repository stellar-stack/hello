function Employee (props) {

    return (

        <>
        <h3>Employee {props.name}</h3>
        {/* <p>{props.role ? props.role : 'no Role'} </p> */}
        <p>{props.role ? <p> {props.role} </p> : 'no Role'} </p>
        
        </>

    )

}

export default Employee