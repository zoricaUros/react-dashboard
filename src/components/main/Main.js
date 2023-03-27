/** @format */

import "./main.css";
import Chart from "../charts/Chart";
import Card from "../card/Card";

const Main = (props) => {
  return (
    <main>
      <div className='main-container'>
        <div className='main-title'>
          <img width='150' src='images/main-image.png' alt='logo-navbar' />
          <div className='main-greeting'>
            <h1>Hello MinnieCode</h1>
            <p>Welcome to the admin dashboard</p>
          </div>
        </div>

        <div className='main-cards'>
          <Card
            icon='fa fa-user fa-2px text-lightblue'
            text='Number of Subscribers'
            span='578'
          />
          <Card
            icon='fa fa-calendar fa-2px text-red'
            text='Times of Watching'
            span='4670'
          />
          <Card
            icon='fa fa-video fa-2px text-yellow'
            text='Number of Videos'
            span='670'
          />
          <Card
            icon='fa fa-thumbs-up fa-2px text-green'
            text='Number of Likes'
            span='2390'
          />
        </div>

        <div className='charts'>
          <div className='charts-left'>
            <div className='charts-left-title'>
              <div>
                <h1>Daily Reports</h1>
                <p>Nešto, nešto, još nešto</p>
              </div>
              <i className='fa fa-use'></i>
            </div>
            <Chart />
          </div>

          <div className='charts-right'>
            <div className='charts-right-title'>
              <div>
                <h1>Stats Reports</h1>
                <p>Nešto, nešto, još nešto</p>
              </div>
              <i className='fa fa-use'></i>
            </div>

            <div className='charts-right-cards'>
              <div className='card1'>
                <h1>Income</h1>
                <p>$32,450</p>
              </div>
              <div className='card2'>
                <h1>Sales</h1>
                <p>$45,000</p>
              </div>
              <div className='card3'>
                <h1>Users</h1>
                <p>2300</p>
              </div>
              <div className='card4'>
                <h1>Orders</h1>
                <p>650</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
