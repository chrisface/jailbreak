import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  decrement
} from '../../modules/counter';

class Home extends React.Component {
  render() {
    var battleOn = new Date() < new Date("June 8, 2018 12:30:00");

    return (
      <div>
        { battleOn ? this.battleOnSection() : null }
        { this.gameInfo() }
        { this.teams() }
      </div>
    );

  }

  battleOnSection() {
    return (
      <div class="paperframe">
    		<div class="paperframe_top"></div>
    		<div class="content card_fight">

    			<div class="person-name">WARRIOR!</div>
    			<div class="banner_fight">
    				<img src="static/battleison.png" width="209"/>
    			</div>
    			<div class="timeremaining"><h2>Capture The Enemy Flag</h2></div>

          <Link to="/jail"><button class="button-default black" type="button">Go to Jail</button></Link>

    		</div>
    		<div class="paperframe_bottom"></div>
    	</div>
    );
  }

  teamRoster(teamName, members, logo) {
    const memberItems = members.map((member) =>
      <li>{member}</li>
    );

    return (
      <div class="paperframe teamoverlay">
        <div class="paperframe_top"></div>
        <div class="content">
          <div class="teamoverlay_logo">
            <img src={"static/" + logo} width="36"/>
            <div> { teamName } </div>
          </div>
          <div class="teamoverlay_text">
            <ul>
              { memberItems }
            </ul>
          </div>
        </div>
        <div class="paperframe_bottom"></div>
      </div>
    )
  }

  teams() {
    return (
      <div class="paperframe">
        <div class="paperframe_top"></div>
        <div class="content">
        <img src="static/forrest1.png" width="33"/>
          <h2>Teams</h2>
          { this.teamRoster("Freja", ["Andrew", "Johannes", "Martin Juhl", "Niels", "Pedro", "Chris", "Zamand", "Tim"], "team_ivar.png")}
          { this.teamRoster("Ivar", ["Karl", "Stephanie", "Cristina", "Almir", "David", "Jakob Janot", "Kenn", "Dinaesh"], "team_ivar.png")}
          { this.teamRoster("Loki", ["Bjørn", "Jacob Atzen", "Jannic", "HP", "Peter Ericson", "Jeppe Liisberg", "Troels", "Susan"], "team_ivar.png")}
          { this.teamRoster("Ragnar", ["Maxi", "Marco", "Nichlas", "Mynne", "Jeppe Foverskov", "Sebastian", "Rajesh"], "team_ivar.png")}
        </div>
        <div class="paperframe_bottom"></div>
      </div>
    )
  }

  gameInfo() {
    return (
      <div class="paperframe">
        <div class="content">
        	<img src="static/forrest1.png" width="33"/>
          <h2>Battle Royal</h2>

          <p>We are at the Eco village today so fitting with the theme we will have a Battle Royal. </p>

          <h3> Team Composition </h3>

          <ul>
            <li>
              <b>Team Captain (1)</b> coordinating round start/end with Game Master
            </li>
            <li>
              <b>Munitions Expert (1)</b> carrying backpack with a slingshot, refreshments and a map
            </li>
            <li>
              <b>Assault Troops (3)</b> venture out and capture enemy flags
            </li>
            <li>
              <b>Jail guard (1)</b> to enforce Jail rules and keep inmates honest
            </li>
            <li>
              <b>Flag Defender (1)</b> protecting your flag from enemy capture
            </li>
          </ul>

          <h3>Goal</h3>
          <ul>
            <li>Steal the flag of an enemy team</li>
            <li>Capture the flag by delivering it to the Game Master to gain points (Nina)</li>
            <li>If your team&apos;s flag has been captured, you can not capture an enemy flag.</li>
          </ul>

          <h3>Gameplay & Rules</h3>
          <ul>
            <li>Teams all gather at the Jail before starting a round</li>
            <li>Each team proceeds to their base to prepare and strategise</li>
            <li>The Game Master will signal start of the Round to Team Captains</li>
            <li>Use your weapons to strike other players</li>
            <li>Use our armour to protect from weapons</li>
            <li>When hit with a weapon, proceed to Jail</li>
            <li>When wearing a hat/vest, you can take one additional weapon hit (after the first hit, you lose your hat/vest)</li>
            <li>Lost hats/vests can be picked up by other players</li>
            <li>Round ends after</li>
          </ul>

        	<img src="static/text_jail.png" class="text_jail" width="92"/>
  				<h3>Jailtime</h3>
          <p>When sent to Jail, click the "Go to Jail" button at the top of page which will be enabled during battle.</p>
          <br/>
          <p>You will have to perform a task before you can leave Jail. </p>
          <br/>
          <p>The Jail guards will be watching inmates closely to ensure they complete the task legitimately.</p>
        </div>
      </div>
    )
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
