//React usa JSX, que é tipo uma versão do JavaScript em HTML. Por isso precisamos
//importar React
import React from "react";
//ReactDOM(Document Object Model)é o que permite criar um "modelo" da página HTML
// e linkas os elementos JSX com os elementos HTML
import ReactDOM from "react-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
      events: [
        {
          id: 1,
          time: "10:00",
          title: "Breakfast with Simon",
          location: "Lounge Caffe",
          description: "Discuss Q3 targets"
        },
        {
          id: 2,
          time: "10:30",
          title: "Daily Standup Meeting (recurring)",
          location: "Warsaw Spire Office"
        },
        { id: 3, time: "11:00", title: "Call with HRs" },
        {
          id: 4,
          time: "11:00",
          title: "Lunch with Timothy",
          location: "Canteen",
          description:
            "Project evaluation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a"
        }
      ]
    };
  }

  /* */
  handleDelete = eventId => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
  };

  addEvent = () => {
      var newArray = [...this.state.events];
      newArray.push({
        id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
        time: this.state.time,
        title: this.state.title,
        location: this.state.location,
        description: this.state.description,
        value: this.var > 5 ? "Its's grater then 5" : "Its lower or equal 5"
      });
      this.setState({ events: newArray });
      this.setState({
        time: "",
        title: "",
        location: "",
        description: ""
      });
    };
  render() {

    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            {/*breakpoint at 9 não somente para md(Medium) mas também para
              viewports maiores (lg e xl). para menores o tamanho será 12*/}
            <MDBCol md="9">
            {/*O método map() invoca a função callback passada por argumento para cada
              elemento do Array e devolve um novo Array como resultado.*/}
              {this.state.events.map((elementodovetor,index) =>(
                <Event
                key={elementodovetor.id}
                id={elementodovetor.id}
                time={elementodovetor.time}
                title={elementodovetor.title}
                location={elementodovetor.location}
                description={elementodovetor.description}
                onDelete={this.handleDelete}
                />
              )
              )}
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" rounded onClick={this.toggleModal}>
                    Add Event
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/*breakpoint at 3*/}
            <MDBCol md="3" />

          </MDBRow>
        </MDBContainer>

        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggleModal}
          >
            Add new event
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                name="time"
                label="Time"
                icon="clock"
                hint="12:30"
                group
                type="text"
                getValue={this.handleInputChange("time")}
              />
              <MDBInput
                name="title"
                label="Title"
                icon="edit"
                hint="Briefing"
                group
                type="text"
                getValue={this.handleInputChange("title")}
              />
              <MDBInput
                name="location"
                label="Location (optional)"
                icon="map"
                group
                type="text"
                getValue={this.handleInputChange("location")}
              />
              <MDBInput
                name="description"
                label="Description (optional)"
                icon="sticky-note"
                group
                type="textarea"
                getValue={this.handleInputChange("description")}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
          <MDBBtn
            color="info"
            onClick={() => {
              this.toggleModal();
              this.addEvent();
            }}
          >
            Add
          </MDBBtn>
        </MDBModalFooter>
        </MDBModal>

      </React.Fragment>

    );
  }
  }

  class Event extends React.Component {
    state = {};
    render() {
      return (


        <React.Fragment>
        <div className="media mt-1">
          <h3 className="h3-responsive font-weight-bold mr-3">
            {this.props.time}
          </h3>
          <div className="media-body mb-3 mb-lg-3">
            <MDBBadge
              color="danger"
              className="ml-2 float-right"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              -
            </MDBBadge>
            <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
            <hr className="hr-bold my-2" />
            {/*Use curly braces({}) always when you want to pass
              something dinamically*/}

            {/*se this.props.location == true, então <h6>Loc...*/}
            {this.props.location && (
              <React.Fragment>
                <p className="font-smaller mb-0">
                  <MDBIcon icon="location-arrow" /> {this.props.location}
                </p>
              </React.Fragment>
            )}
          </div>
        </div>
        {this.props.description && (
          <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
            {this.props.description}
          </p>
        )}


        </React.Fragment>
      );
    }
  }




ReactDOM.render(<App />, document.getElementById("root"));
