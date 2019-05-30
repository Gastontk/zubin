import React, { Component } from "react";
import "./App.css";
import Sheet1 from "./components/sheet1";
import Sheet2 from "./components/sheet2";

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
	withRouter
} from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			grid: [
				[{ value: 1 }, { value: 3 }, { value: 3 }],
				[{ value: 2 }, { value: 4 }, { value: 6 }],
				[{ value: 1 }, { value: 3 }, { value: 3 }],
				[{ value: 2 }, { value: 4 }, { value: 3 }],
				[{ value: 1 }, { value: 3 }, { value: 3 }],
				[{ value: 2 }, { value: 4 }, { value: 3 }]
			],
			math: 1
		};
		this.updateGrid = this.updateGrid.bind(this);
		this.updateMath = this.updateMath.bind(this);
	}
	updateGrid = val => {
		console.log("val passed is", val);
		this.setState({
			grid: val
		});
		console.log(this.state);
	};
	updateMath(e) {
		console.log(e);
		this.setState({
			math: e.target.value
		});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">

					<Router>
						<div style={{ background: "white" }}>
							<Link
								to="/sheet1"
								className="text-dark text-uppercase account-pages-logo">
								Sheet1
							</Link>
							{"     "}
							<Link
								to="/sheet2"
								className="text-dark text-uppercase account-pages-logo">
								Sheet2
							</Link>
              
            </div>
            <label>Change multiplier here</label>
            <input
              name="math"
              id="math"
              class="btn btn-primary"
              type="text"
              value={this.state.math}
              onChange={this.updateMath}
            />
            <br />
            <br/>
						<Route
							path="/sheet1"
							exact
							render={props => (
								<Sheet1
									{...props}
									grid={this.state.grid}
									updateGrid={this.updateGrid}
								/>
							)}
						/>
						<Route
							path="/sheet2"
							exact
							render={props => (
								<Sheet2
									{...props}
									grid={this.state.grid}
									updateGrid={this.updateGrid}
									math={this.state.math}
								/>
							)}
						/>
						{/* <Sheet1 grid={this.state.grid} updateGrid={this.updateGrid} />
						<Sheet2 grid={this.state.grid} updateGrid={this.updateGrid} /> */}
					</Router>
				</header>
			</div>
		);
	}
}

export default App;
