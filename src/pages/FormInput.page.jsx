import React, { useState } from "react";
import TodoCard from "../components/TodoCard.component";
import nextId from "react-id-generator";
import { v4 as uuidv4 } from "uuid";

function FormInput() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    time: "",
  });
  const [isEdit, setisEdit] = useState(false);
  const [itemID, setitemID] = useState();
  const [itemIndex, setitemIndex] = useState();

  const [hold, setHold] = useState([]);
  const { title, description, time } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteTodo = (id) => {
    console.log(id);
    let newTodos = hold.filter((el) => {
      if (el.id == id) {
        return false;
      }
      return true;
    });
    setHold(newTodos);
  };

  const id = uuidv4();

  const editTodo = (el, index) => {
    console.log(index);
    setisEdit(true);
    setitemID(el.id);
    setFormData({
      title: el.title,
      description: el.description,
      time: el.time,
    });
    setitemIndex(index);
  };

  const handleSubmit = (e) => {
    let newArraySet = [...hold];
    newArraySet[itemIndex] = {
      ...newArraySet[itemIndex],
      title: formData.title,
      description: formData.description,
      time: formData.time,
    };
    setHold([...newArraySet]);
    if (isEdit) {
      e.preventDefault();
      //  console.log(newArraySet.);
    } else {
      const newTodo = {
        id: uuidv4(),
        ...formData,
      };
      e.preventDefault();
      setHold([...hold, newTodo]);
      setFormData({
        title: "",
        description: "",
        time: "",
      });
    }
  };

  const list = hold.map((el, index) => (
    <TodoCard
      el={el}
      index={index}
      id={el.id}
      title={el.title}
      time={el.time}
      description={el.description}
      onDelete={deleteTodo}
      onUpdate={editTodo}
    />
  ));
  return (
    <div>
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3 style={{ color: "white" }}>Welcome</h3>
            <p>Add anything on your Todo List</p>
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">Todo Form to input your list </h3>
                <form
                  class="row register-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="titles *"
                        name="title"
                        value={title}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Description *"
                        name="description"
                        value={description}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        type="time"
                        minlength="10"
                        maxlength="10"
                        name="txtEmptel"
                        class="form-control"
                        placeholder="Time*"
                        name="time"
                        value={time}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>

                    <input type="submit" class="btnRegister" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {list}
    </div>
  );
}

export default FormInput;
