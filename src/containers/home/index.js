import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { decrement } from '../../modules/counter';

class Home extends React.Component {
  render() {
    var battleOn = new Date() < new Date('June 8, 2018 13:00:00');

    return (
      <div>
        {battleOn ? this.battleOnSection() : null}
        {this.gameInfo()}
      </div>
    );
  }

  battleOnSection() {
    return (
      <div className="paperframe">
        <div className="paperframe_top" />
        <div className="content card_fight">
          <div className="person-name">Capture</div>
          <div className="banner_fight">
            <img src="static/battleison.png" width="209" />
          </div>
          <div className="person-name">the flag</div>

          <Link to="/jail">
            <button className="button-default black" type="button">
              Go to Jail
            </button>
          </Link>
        </div>
        <div className="paperframe_bottom" />
      </div>
    );
  }

  gameInfo() {
    return (
      <div>
        <div className="paperframe">
          <div className="paperframe_top" />
          <div className="content">
            <div className="paperframe teamoverlay">
              <div className="paperframe_top" />
              <div className="content">
                <div className="teamoverlay_logo" />
                <div className="teamoverlay_text">
                  <div className="person-name">Rules & Info</div>
                  <ul>
                    <li>
                      <a href="#rules">Game rules</a>
                    </li>
                    <li>
                      <a href="#getpoints">Getting points</a>
                    </li>
                    <li>
                      <a href="#equipment">Equipment</a>
                    </li>
                    <li>
                      <a href="#roster">Roster</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="paperframe_bottom" />
            </div>
            <img src="static/forrest1.png" width="33" />
            <h2>The goal</h2>
            <p>
              Catch the flag of your opponent’s team. Find it and bring it to
              Nina the mighty game master.
            </p>
            Each team must select<br />
            <ul className="fulloverview">
              <li>1 captain. Connect with Nina on find my friends.</li>
              <li>1 keeper. Backpack, slingshots, drinks and a map.</li>
              <li>3 runners.</li>
              <li>
                1 prison guard. To make sure prisoners are respecting the rules
                of the prison.
              </li>
              <li>2 flag guards.</li>
            </ul>
            <img src="static/text_jail.png" className="text_jail" width="92" />
            <a name="rules" />
            <h3>Rules</h3>
            <p>
              Everybody starts in the prison (in the center of the map), where
              the rules will be explained.
            </p>
            <p>
              Hitting other players with your sword Once you are hit, you go to
              jail. Here you must use the app to get out of jail again.
            </p>
            <a name="getpoints" />
            <h3>How to get points</h3>
            <ul className="fulloverview">
              <li>
                Capturing an opposing team’s flag gives your team a point.
              </li>
              <li>
                The round ends when there is only one team with their flag left.
              </li>
              <li>
                When your flag is captured, your team is not allowed to try to
                get other teams flags but your team members can still fight and
                imprison other players.
              </li>
              <li>You can get a maximum of 3 points per round.</li>
              <li>
                The team with the most points at the end of all rounds, wins the
                game.
              </li>
            </ul>
            <a name="equipment" />
            <h3>Each team will get</h3>
            <ul className="fulloverview">
              <li>1 map</li>
              <li>1 backpack</li>
              <li>5 armors</li>
              <li>1 flag</li>
              <li>1 slingshot</li>
              <li>3 balls</li>
            </ul>
            <h3>Powerup Items</h3>
            <p>
              Hats, vests and headbands are considered loot that can spawn in
              various places. With a hat, vest or headband, you can endure two
              hits (as opposed to only one without the power up item). After
              getting hit you drop the power up item where you get hit. Power up
              items can be picked up by any other players.
            </p>
            <h3>Balls</h3>
            <p>
              {' '}
              Use the balls to take down other players. There is no aiming for
              the head. Shooting a person in the head makes you go straight to
              prison.
            </p>
            <img src="static/t2.png" className="text_jail" width="40" />
            <h3>Attention</h3>
            <p>
              Do not lose anything in the field, there will be an inventory at
              the end of the game. Each team is responsible for the things they
              get. Remember Torup is a sustainable village so we can’t leave
              anything behind!
            </p>
            <p>Fire is not allowed.</p>
            <p>No smoking on battle rounds.</p>
            <p>
              Each team is responsible to set up their own communication system
              (messenger, calls, skype, slack, sms) you decide!
            </p>
          </div>

          <a name="roster" />
          <div className="paperframe_bottom" />

          <div className="paperframe_top" />
          <div className="content rooster">
            <h2>Roster</h2>

            <div className="rooster_team">
              <div className="rooster_logo">
                <img src="static/ivar.png" width="40px" />
                <h4>Ivar</h4>
              </div>
              <div className="rooster_list">
                <ul className="fulloverview">
                  <li>Karl</li>
                  <li>Stephanie</li>
                  <li>Cristina</li>
                  <li>Almir</li>
                  <li>David</li>
                  <li>Jakob Janot</li>
                  <li>Kenn</li>
                  <li>Dinaesh</li>
                </ul>
              </div>
            </div>

            <div className="rooster_team">
              <div className="rooster_logo">
                <img src="static/freja.png" width="70px" />
                <h4>Freja</h4>
              </div>
              <div className="rooster_list">
                <ul className="fulloverview">
                  <li>Andrew</li>
                  <li>Johannes</li>
                  <li>Martin Juhl</li>
                  <li>Niels</li>
                  <li>Pedro</li>
                  <li>Chris</li>
                  <li>Zamand</li>
                  <li>Tim</li>
                </ul>
              </div>
            </div>

            <div className="rooster_team">
              <div className="rooster_logo">
                <img src="static/ragnar.png" width="50px" />
                <h4>Ragnar</h4>
              </div>
              <div className="rooster_list">
                <ul className="fulloverview">
                  <li>Maxi</li>
                  <li>Marco</li>
                  <li>Nichlas</li>
                  <li>Nynne</li>
                  <li>Jeppe Foverskov</li>
                  <li>Sebastian</li>
                  <li>Rajesh</li>
                </ul>
              </div>
            </div>

            <div className="rooster_team">
              <div className="rooster_logo">
                <img src="static/loki.png" width="50px" />
                <h4>Loki</h4>
              </div>
              <div className="rooster_list">
                <ul className="fulloverview">
                  <li>Bjørn</li>
                  <li>Jacob Atzen</li>
                  <li>Jannic</li>
                  <li>HP</li>
                  <li>Peter Ericson</li>
                  <li>Jeppe Liisberg</li>
                  <li>Troels</li>
                  <li>Susan</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="paperframe_bottom" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      decrement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
