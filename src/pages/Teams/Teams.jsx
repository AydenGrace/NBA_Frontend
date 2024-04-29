/* eslint-disable no-unused-vars */
import Conference from "./Conference";

/* eslint-disable react/no-unescaped-entities */
export default function Teams({
  Teams = [],
  filter = "All",
  search = "",
  toggleLike = () => {},
}) {
  return (
    <>
      <div className="container bg-db mh-all">
        <div className="container d-flex p-20 flex-column g-20">
          {/* {console.log(search)} */}
          {filter === "All" ? (
            <Conference
              ConfName={""}
              Teams={
                search
                  ? Teams.filter((value, index) => {
                      return value.club
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                  : Teams
              }
              isAll={true}
              toggleLike={toggleLike}
            />
          ) : (
            Teams.filter((value, index) => {
              return Teams.findIndex((v) => v.conference === filter) === index; //Reste
            }).map((conf) => (
              <Conference
                key={conf.id}
                ConfName={conf.conference}
                Teams={
                  search != ""
                    ? Teams.filter((value) => {
                        return value.conference === conf.conference;
                      }).filter((value, index) => {
                        return value.club
                          .toLowerCase()
                          .includes(search.toLowerCase());
                      })
                    : Teams.filter((value) => {
                        return value.conference === conf.conference;
                      })
                }
                isAll={false}
                toggleLike={toggleLike}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
