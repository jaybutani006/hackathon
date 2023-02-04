import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMenu } from '../actions/userAction';
import AdminHeader from './AdminHeader';
import './CreateMenu.css'
function CreateMenu() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = useSelector((state) => state.menu);
    const id = menu._id;
  // const id = f();
    const [breakfast, setBreakfast] = useState("");
    const [lunch, setLunch] = useState("");
    const [snacks, setSnacks] = useState("");
    const [dinner, setDinner] = useState("");
    const createMenuSubmit = (e) => {
      e.preventDefault();
      console.log(id);
        dispatch(createMenu(breakfast, lunch, snacks, dinner , id));
        navigate('/');
    };
  return (
    <>
      <AdminHeader />
      <div class="container">
        <form action="" onSubmit={createMenuSubmit}>
          <p>
            <h3>Breakfast: </h3>
          </p>
          <textarea
            name="breakfast"
            id="breakfast"
            cols="100"
            rows="2"
            value={breakfast}
            onChange={(e) => setBreakfast(e.target.value)}
          ></textarea>
          <p>
            <h3>Lunch: </h3>
          </p>
          <textarea
            name="lunch"
            value={lunch}
            onChange={(e) => setLunch(e.target.value)}
            id="lunch"
            cols="100"
            rows="2"
          ></textarea>
          <p>
            <h3>Snacks: </h3>
          </p>
          <textarea
            name="snacks"
            id="snacks"
            value={snacks}
            cols="100"
            onChange={(e) => setSnacks(e.target.value)}
            rows="2"
          ></textarea>
          <p>
            <h3>Dinner: </h3>
          </p>
          <textarea
            name="dinner"
            id="dinner"
            value={dinner}
            onChange={(e) => setDinner(e.target.value)}
            cols="100"
            rows="2"
          ></textarea>
          <br />
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateMenu
