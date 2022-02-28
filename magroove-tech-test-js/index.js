class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {is_done: false};
		this.taskDone = this.taskDone.bind(this)
	}

	taskDone() {this.setState({is_done: true});}
	styleDone() {
		if (this.state.is_done){
			return({textDecorationLine: 'line-through'});
		};
	}


	render() {
		return (
			<li onClick={this.taskDone} style={this.styleDone()}>
				{this.props.task}
			</li>
		);
	}
}


class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			to_do_list: ['Finish this test', 'Get hired', 'Change the world']
		};
		this.addItem = this.addItem.bind(this);

	}


	addItem() {
		var valueTask = document.getElementById('inputTask').value;
		if (valueTask == '') { return }
		this.state.to_do_list.push(valueTask);
		this.setState({ to_do_list: this.state.to_do_list });
	}

	render() {
		return (
			<div>
				<h2>Add a new task to your to-do list</h2>
				<input id='inputTask' type="text" />
				<button onClick={this.addItem}>Add</button>
				<ul>
					{this.state.to_do_list.map((task_text) =>
						<ToDoItem task={task_text} />
					)}
				</ul>
			</div>
		);
	}
}



ReactDOM.render(
	<ToDoList />,
	document.getElementById('root')
);