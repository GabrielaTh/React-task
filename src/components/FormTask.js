import React, {
  Component
} from 'react';

class FromTask extends Component {
  constructor() {
    super();
    this.state = {
      Date: '',
      Autor: '',
      Description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.setState({
      Date: '',
      Autor: '',
      Description: ''
    });
  }

  handleInputChange(e) {
    const {
      value,
      name
    } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card border-info mb-3 m-3">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              id="description"
              type="text"
              name="Date"
              value={this.state.Date}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Date" />
          </div>
          <div className="form-group">
            <input
              id="description"
              type="text"
              name="Autor"
              className="form-control"
              value={this.state.Autor}
              onChange={this.handleInputChange}
              placeholder="Autor" />
          </div>
          <div className="form-group">
            <input
              id="description"
              type="text"
              name="Description"
              className="form-control"
              value={this.state.Description}
              onChange={this.handleInputChange}
              placeholder="Description" />
          </div>
          <button id="btn" type="submit" className="btn btn-outline-info" >
            Save
          </button>
        </form>
      </div>

    )
  }

}

export default FromTask;