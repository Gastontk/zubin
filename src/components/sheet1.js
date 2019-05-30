import React, { Component } from "react";
import ReactDataSheet from "react-datasheet";
// Be sure to include styles at some point, probably during your bootstrapping
import "react-datasheet/lib/react-datasheet.css";

export default class Sheet1 extends Component {
	updateGrid = val => {
		this.props.updateGrid(val);
	};

	render() {
		return (
			<div style={{ backgroundColor: "red" }}>
				I am One page
				<ReactDataSheet
					style={{ position: "absolute" }}
					data={this.props.grid}
					grid={this.props.grid}
					valueRenderer={cell => cell.value}
					onCellsChanged={changes => {
						const grid = this.props.grid.map(row => [...row]);
						changes.forEach(({ cell, row, col, value }) => {
							grid[row][col] = { ...grid[row][col], value };
						});
						this.updateGrid(grid);
					}}
				/>
			</div>
		);
	}
}
