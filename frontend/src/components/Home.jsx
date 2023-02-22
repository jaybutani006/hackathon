import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import "./Home.css";
import a from "../images/pizza.jfif";
import b from "../images/cake.avif";
import c from "../images/salad.avif";
import { useDispatch, useSelector } from "react-redux";
import {
    getMenu,
    updateAnswerCount,
    updatePoints,
    updateResponse,
} from "../actions/userAction";
import d from "../images/noodels.avif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

function Home({ user }) {
    const dispatch = useDispatch();
    const { menu } = useSelector((state) => state.menu);
    console.log(menu);
    const submitFunc = (e) => {
        e.preventDefault();
        // // dispatch(callall());
      console.log(user.points);
      let newPoints = user.points + 2;
      console.log(user.points);
      console.log(newPoints);
      dispatch(updatePoints(user._id, newPoints));
      dispatch(updateAnswerCount(user._id));
      dispatch(
        updateResponse(breakfastVal, lunchVal, snacksVal, dinnerVal, user._id)
      );
    };
    const [isCheckedBreakfast, setIsCheckedBreakfast] = useState(false);
    const [isCheckedLunch, setIsCheckedLunch] = useState(false);
    const [isCheckedSnacks, setIsCheckedSnacks] = useState(false);
    const [isCheckedDinner, setIsCheckedDinner] = useState(false);
    const breakfastVal = isCheckedBreakfast ? 1 : 0;
    const lunchVal = isCheckedLunch ? 1 : 0;
    const snacksVal = isCheckedSnacks ? 1 : 0;
    const dinnerVal = isCheckedDinner ? 1 : 0;
    const handleOnChangeBreakfast = () => {
        setIsCheckedBreakfast(!isCheckedBreakfast);
    };
    const handleOnChangeLunch = () => {
        setIsCheckedLunch(!isCheckedLunch);
    };
    const handleOnChangeSnacks = () => {
        setIsCheckedSnacks(!isCheckedSnacks);
    };
    const handleOnChangeDinner = () => {
        setIsCheckedDinner(!isCheckedDinner);
    };
    useEffect(() => {
        const fun = async() => {
            dispatch(getMenu());
        };
        fun();
    }, []);
    const submitAble = user.submitans === 0 ? true : false;
    return (
      <>
        <Header user={user} />
        <Carousel
          ssr={false}
          infiniteLoop
          autoPlay
          interval="3000"
          transitionTime="2000"
          showThumbs={false}
          showStatus={false}
          onSwipeEnd={true}
          onSwipeStart={true}
        >
          <div className="cor">
            <img src={a} />
          </div>
          <div className="cor">
            <img src={b} />
          </div>
          <div className="cor">
            <img src={c} />
          </div>
          <div className="cor">
            <img src={d} />
          </div>
        </Carousel>
        <div className="menu">
          <div className="food one">
            <h2> Today 's Menu</h2> <br />
            <table className="table bor sizef">
              <thead>
                <tr>
                  <th scope="col" className="two">
                    Time
                  </th>
                  <th scope="col" className="two">
                    Food
                  </th>
                  <th scope="col" className="two">
                    Action
                  </th>
                </tr>
              </thead>
              {menu && menu[0] ? (
                <tbody>
                  {menu &&
                    menu.map((menu) => (
                      <Fragment key={menu.id}>
                        <tr>
                          <th scope="row"> Breakfast </th>
                          <td> {menu.breakfast} </td>
                          <td>
                            {user.submitans == 0 ? (
                              <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                checked={isCheckedBreakfast}
                                onChange={handleOnChangeBreakfast}
                              />
                            ) : user.breakfastYes ? (
                              <p>Yes</p>
                            ) : (
                              <p>No</p>
                            )}
                          </td>
                        </tr>
                        <tr className="table-primary blue">
                          <th scope="row"> Lunch </th>
                          <td> {menu.lunch} </td>
                          <td>
                            {user.submitans == 0 ? (
                              <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                checked={isCheckedLunch}
                                onChange={handleOnChangeLunch}
                              />
                            ) : user.lunchYes ? (
                              <p>Yes</p>
                            ) : (
                              <p>No</p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"> Snacks </th>
                          <td colSoan="2"> {menu.snacks} </td>
                          <td>
                            {user.submitans == 0 ? (
                              <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                checked={isCheckedSnacks}
                                onChange={handleOnChangeSnacks}
                              />
                            ) : user.snacksYes ? (
                              <p>Yes</p>
                            ) : (
                              <p>No</p>
                            )}
                          </td>
                        </tr>
                        <tr className="table-primary blue">
                          <th scope="row"> Dinner </th>
                          <td colSoan="2"> {menu.dinner} </td>
                          <td>
                            {user.submitans == 0 ? (
                              <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                checked={isCheckedDinner}
                                onChange={handleOnChangeDinner}
                              />
                            ) : user.dinnerYes ? (
                              <p>Yes</p>
                            ) : (
                              <p>No</p>
                            )}
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                </tbody>
              ) : (
                <p> Refress the page once </p>
              )}
            </table>
          </div>
          <div className="nutr">
            <h2> Nutritions </h2> <br />
            <table className="table size bor">
              <thead>
                <tr>
                  <th scope="col" className="two">
                    Nutritions
                  </th>
                  <th scope="col" className="two">
                    % Daily Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> Vitamin D </th> <td> 130 mg </td>
                </tr>
                <tr className="table-primary blue">
                  <th scope="row"> Vitamin A </th> <td> 260 mg </td>
                </tr>
                <tr>
                  <th scope="row"> Iron </th> <td colSoan="2"> 90 mg </td>
                </tr>
                <tr className="table-primary blue">
                  <th scope="row"> Vitamin B6 </th>
                  <td colSoan="2"> 100 mg </td>
                </tr>
                <tr>
                  <th scope="row"> Dietry Fiber </th>
                  <td colSoan="2"> 2 gm </td>
                </tr>
                <tr className="table-primary blue">
                  <th scope="row"> Saturated Fat </th>
                  <td colSoan="2"> 3.5 gm </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {submitAble ? (
          <div className="attend">
            <p>
              <h3> Are you going to eat today ? </h3>
            </p>
            <button
              type="button"
              className="btn btn-success jay "
              onClick={submitFunc}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="successfull">
            <h1> Your Today 's Answer is submitted successfully</h1>
          </div>
        )}
      </>
    );
}

export default Home;