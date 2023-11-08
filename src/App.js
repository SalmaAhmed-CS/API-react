import "./App.css";
import "./style.css"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  const fetchData = () => {

    return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")

      .then((res) => res.json())

      .then((d) => setData(d.meals));

  };

  useEffect(() => {

    fetchData();

  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {

    return data.filter((data) =>

      search_parameters.some((parameter) =>

        data[parameter].toString().toLowerCase().includes(query)

      )

    );

  }

  return (
    <>
  
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
  />





      <Navbar className="bg-body-tertiary justify-content-between">
      <h1 >Search For Your Favorite Seafood </h1>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Navbar>


      {search(data).map((dataObj) => {

return (

  <div className="items-container">


    <div className='card'>
            <img src={dataObj.strMealThumb}/>
            <div className='content'>
                <p>{dataObj.strMeal}</p>
                <p>#{dataObj.idMeal}</p>

            </div>
      </div>
  </div>
);
})} 

</>
        )

        }

export default App;