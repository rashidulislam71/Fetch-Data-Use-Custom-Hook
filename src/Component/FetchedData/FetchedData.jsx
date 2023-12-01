/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./FetchedData.css";

const FetchedData = ({ fetchData, fetchData2 }) => {
  console.log(fetchData);
  console.log(fetchData2);
  return (
    <div className="usersInfo">
      <h1 className="usetTitle">Users</h1>
      <div className="users">
        {fetchData.map((value) => (
          <div className="singleUser">
            <p>
              <span>Id:</span>
              {value.id}
            </p>
            <p>
              <span>Name: </span>
              {value.name}
            </p>
            <p>
              <span>Phone: </span>
              {value.phone}
            </p>
            <p>
              <span>User Name: </span>
              {value.username}
            </p>
            <p>
              <span>Email: </span>
              {value.email}
            </p>
            <p>
              <span>Website: </span>
              {value.website}
            </p>
            <p>
              <span>City: </span>
              {value.address.city}
            </p>
            <p>
              <span>Steet: </span>
              {value.address.street}
            </p>
            <p>
              <span>Zip-Code: </span>
              {value.address.zipcode}
            </p>
          </div>
        ))}
      </div>

      <div className="todoInfo">
        <h1 className="todoTitle">Todo</h1>

        <div className="todo">
          {fetchData2.map((value) => (
            <div className="singleToto">
              <p><span>Id: </span>{value.id}</p>
              <p><span>Title: </span>{value.title}</p>
              <p><span>Completed: </span>{value.completed ? "true" : "false"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchedData;
