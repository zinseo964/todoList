import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, input]);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter a Todo</Form.Label>
          <Form.Control type="text" placeholder="Enter a Todo" value={input} onChange = {(e) => setInput(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>

      <ListGroup>
        {items.map((item)=>(
          <ListGroupItem key={item}>{item}</ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default App;
