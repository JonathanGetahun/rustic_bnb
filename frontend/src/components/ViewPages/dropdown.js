import React from "react";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            guests: 1
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
        this.increaseGuests = this.increaseGuests.bind(this);
        this.decreaseGuests = this.decreaseGuests.bind(this);
    }

    toggleDropdown(e) {
        e.preventDefault();
        this.setState({ open: true });
    }

    toggleDropdownBlur(e) {
        if (this.state.open === true) {
            if (e.relatedTarget === null || (e.relatedTarget.className != "hoopersnavbarDiv" && e.relatedTarget.className != "hoopersChange")) {
                this.setState({ open: !this.state.open });
            }
        }
    }

    increaseGuests() {
        this.setState({ guests: this.state.guests + 1 });
        this.props.numGuests(this.state.guests + 1);
    }

    decreaseGuests() {
        if (this.state.guests > 0) {
            this.setState({ guests: this.state.guests - 1 });
            this.props.numGuests(this.state.guests - 1);
        }
    }


    render() {
        let icon = <i className="fas fa-chevron-down"></i>;
        if (this.state.open) {
            icon = <i className="fas fa-chevron-up"></i>;
        }
        let minusDisabled = "minusDisabled";
        if (this.state.guests > 1) {
            console.log("works here")
            minusDisabled = "minusAbled";
        }

        let guestNum;
        if (this.state.guests === 1) {
            guestNum = "1 Guest";
        }
        else if (this.state.guests > 1) {
            guestNum = `${this.state.guests} Guests`
        }

        return (
            <div className="hoopersnavbarDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
                <button className="hoopersSelect" onClick={(e) => e.preventDefault()}>{guestNum}</button>
                <div className={this.props.arrowType}>{icon}</div>
                {this.state.open && (
                    <ul className="hoopersUl" >
                        <li> 
                            <div>Guests</div>
                            <div className="plusminus">
                                <button className="hoopersChange" id={minusDisabled} onClick={this.decreaseGuests}>-</button>
                                <p> {this.state.guests}+ </p>
                                <button className="hoopersChange" onClick={this.increaseGuests}>+</button>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}

export default Dropdown;