/** @jsx React.DOM */
var React = require('react');

var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;

var MainNav = React.createClass({
    propTypes: {
        current: React.PropTypes.number.isRequired
    },
    render: function() {
        return (
            <Navbar>
                <Nav activeKey={this.props.current}>
                    <NavItem key={1} href={"#home"}>Home</NavItem>
                    <NavItem key={2} href={"#notes"}>Notes</NavItem>
                    <NavItem key={3} href={"#todos"}>Todos</NavItem>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = MainNav;
