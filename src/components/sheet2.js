import React, { Component } from "react";
import ReactDataSheet from "react-datasheet";
// Be sure to include styles at some point, probably during your bootstrapping
import "react-datasheet/lib/react-datasheet.css";

export default class sheet2 extends Component {
	updateGrid = val => {
		this.props.updateGrid(val);
	};

	render() {
		return (
			<div style={{backgroundColor:'green'}}>
				And I am another
				<br />
				<ReactDataSheet
					data={this.props.grid}
					grid={this.props.grid}
					valueRenderer={cell => cell.value * this.props.math}
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
