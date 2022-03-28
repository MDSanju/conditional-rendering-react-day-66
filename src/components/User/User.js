import React from "react";
import Player from "../Player/Player";

const User = (props) => {
  const { familiar } = props;

  //   1. Element Variable
  let greeting;
  if (familiar) {
    greeting = <h4>Hello...How you going?</h4>;
  } else {
    greeting = <h4>Please leave me alone!</h4>;
  }

  //   2. Ternary Operator
  // condition ? true : false;

  return (
    <div>
      <div>
        <h2>Greetings</h2>
        {greeting}
      </div>
      <div>
        <h2>Food</h2>
        {familiar ? <h4>Burger</h4> : <h4>Pizza</h4>}
      </div>
      <div>
        <h2>Profession</h2>
        {familiar ? (
          <div>
            <h4>Main Stack Web Developer!</h4>
            <p>
              With JavaScript, React, Nodejs, Mongodb, Nextjs and Expressjs.
            </p>
          </div>
        ) : (
          <div>
            <h4>WordPress Developer!</h4>
            <p>With JQuery Plugin, WordPress Customize, PHP Basic.</p>
          </div>
        )}
      </div>
      <div>
        <h2>Connection</h2>
        {familiar && <h4>Hello World!</h4>}
      </div>
      <div>
        <h2>Drinks</h2>
        {familiar || <h4>Soft Drinks!</h4>}
      </div>
      <div>
        <h2>If true, Display data from a different component!</h2>
        {familiar && <Player></Player>}
      </div>
    </div>
  );
};

export default User;
