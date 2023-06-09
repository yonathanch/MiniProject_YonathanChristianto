const Input = (props) => {
  
    return (
        <>
            <label 
                htmlFor="" 
                className={props.classLabel}>
                {props.label}
            </label>
            <input 
                name={props.name}
                type={props.type} 
                className={props.classInput} 
                placeholder={props.placeholder}
                value={props.value}
                id={props.id}
                checked={props.checked}
                onChange={props.onChange}
                data-testid={props.dataTestId}

                   
            />
        </>
        
       
    )
}

export default Input