const List = ({people}) => {
    return (
        <>
        {people.map((person) => {
            const { id, name, age, image } = person;
            return (
                <div key={id} className="person">
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </div>
            );
        })}
        </>
    )
}

export default List;