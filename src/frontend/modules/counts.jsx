import React from "react";
import CountUp from "react-countup";

const data = [
  {
    name: "Projects",
    count: 200,
    icon: "kanban",
    start: 180,
    color: "#4154f1",
  },
  {
    name: "Data Submitted",
    count: 8000,
    icon: "clipboard-data",
    start: 1000,
    color: "#bb0852",
  },
  {
    name: "Enumerators",
    count: 100,
    icon: "person-lines-fill",
    color: "#15be56",
  },
  {
    name: "Data Qualifiers",
    count: 20,
    icon: "people",
    color: "#ee6c20",
  },
];

const Counts = () => {
  return (
    <div className="counts" data-aos="fade-up">
      <div className="row gy-4">
        {data.map((x, i) => (
          <div key={i} className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className={`bi bi-${x.icon}`} style={{ color: x.color }}></i>
              <div>
                <CountUp
                  start={x.start || 0}
                  end={x.count}
                  duration={x.count / 2}
                />
                <p>{x.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counts;
