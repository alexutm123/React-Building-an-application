export const Descriptions = ({description}) => {
    return (
        <div className="descriptions">
            <p>{description.length > 0 && description}</p>
        </div>
    );
}