import React, { Component} from "react";

import Modal from '@material-ui/core/Modal';

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}
  }

  onButtonPress = () => {
		this.setState({
			showModal: !this.state.showModal
		});
	}
	
	onModalClose = () => {
		this.setState({
			showModal: !this.state.showModal
		});
	}

	renderModal = () => {
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.showModal}
				onClose={this.onModalClose}
			>
				<button variant="contained" color="primary" onClick={this.onButtonPress}>
					Primary
				</button>
			</Modal>
		);
	}

  render() {	
		return (
			<div className="container">
				<div className="left">{new Date().getFullYear()} Sammy Samkough</div>
				<div className="right">
					<button variant="contained" color="primary" onClick={this.onButtonPress}>
						Primary
					</button>
				</div>
				{this.renderModal()}
			</div>
    );
  }
}

export default Footer;
