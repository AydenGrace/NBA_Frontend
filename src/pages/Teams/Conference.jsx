import TeamCard from "./TeamCard";

export default function Conference({
  ConfName = "",
  Teams = [],
  isAll = true,
  toggleLike = () => {},
}) {
  return (
    <>
      <div className="container">
        {!isAll && <h3 className="c-w p-20">Conference {ConfName}</h3>}
        <div className="d-flex container f-w g-20 px-50 justify-content-center ">
          {Teams.length ? (
            Teams.map((team) => (
              <TeamCard key={team._id} Team={team} toggleLike={toggleLike} />
            ))
          ) : (
            <p className="c-r">No team found.</p>
          )}
        </div>
      </div>
    </>
  );
}
