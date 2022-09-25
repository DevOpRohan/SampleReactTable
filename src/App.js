import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Table } from "react-bootstrap";

import { useState, useEffect } from "react";

/*
State: A list of objects (displayed in form of table, each object is a row in the table) and another column to remove the object from the list
*/
class Groccery {
  constructor(Item, Amount, Date, Category) {
    this.Item = Item;
    this.Amount = Amount;
    this.Date = Date;
    this.Category = Category;
  }
}

function App() {
  const [list, setList] = useState([
    new Groccery("Pizza", 80, "Sat Oct 10 2020", "Food"),
    new Groccery("Grape Juice", 30, "Mon Oct 12 2020", "Food"),
    new Groccery("Cinema", 210, "Fri Oct 16 2020", "Entertainment"),
    new Groccery("Java Programming book", 242, "Thu Oct 15 2020", "Academic"),
    new Groccery("Mango Juice", 35, "Fri Oct 16 2020", "Food"),
    new Groccery("Dress", 2000, "Sun Oct 25 2020", "Cloth"),
    new Groccery("Tour", 2555, "Thu Oct 29 2020", "Entertainment"),
    new Groccery("Meals", 300, "Fri Oct 30 2020", "Food"),
    new Groccery("Mobile", 3500, "Mon Nov 02 2020", "Gadgets"),
    new Groccery("Exam Fees", 1245, "Wed Nov 04 2020", "Academic")
  ]);

  //to keep track of the total amount
  const [total, setTotal] = useState(0);
  const claculateTotal = () => {
    let sum = 0;
    list.forEach((groccery) => {
      sum += groccery.Amount;
    });
    setTotal(sum);
  };

  //to remove the item from the list
  const removeItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  //caclculate the total ammount when the list is updated, and when the component is mounted
  useEffect(() => {
    claculateTotal();
  }, [list]);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.Item}</td>
            <td>{item.Amount}</td>
            <td>{item.Date}</td>
            <td>{item.Category}</td>
            <td>
              {/**Button withoud boarder, just like an underline link */}
              <Button variant="link" onClick={() => removeItem(index)}>
                remove
              </Button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Total Amount</td>
          <td colSpan="4">{total}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default App;
