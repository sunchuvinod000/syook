export default function Table(props) {
  const { data, rows } = props;
  const values = [];
  data.map((item) => values.push(Object.values(item)));
  console.log("values are", values);
  console.log("data is", data);
  return (
    <div className="w3-center w3-responsive w3-card w3-margin">
      <table className="w3-table  w3-border w3-white w3-striped">
        <tr>
          {rows.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {values.map((item) => {
          return (
            <tr className="w3-hover-teal">
              {item.map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
