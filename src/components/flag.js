

const Flag = ({label, is, className}) => {
    return (
        <span className={`flag ${is ? "" : "receipe-details-flag"} ${className}`}>
            <span>{label}</span>
            <div className="position-absolute"></div>
        </span>
    )
}

export default Flag;