import ProfileCard from '../cinema/ProfileCard';

export const Cinemas = ({cinemas}) => {
    return (
        <div className="row">
            {cinemas.map((cinema) => (
                <div className="col-4 d-flex justify-content-center align-items-center" key={cinema.title}>
                    <ProfileCard cinema={cinema} />
                </div>
            ))}
        </div>
    );
};
