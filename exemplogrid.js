//React usa JSX, que é tipo uma versão do JavaScript em HTML. Por isso precisamos
//importar React
import React from "react";
//ReactDOM(Document Object Model)é o que permite criar um "modelo" da página HTML
// e linkas os elementos JSX com os elementos HTML
import ReactDOM from "react-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';

class App extends React.Component {
    state = {};
    render() {

    return (
      Repare que o retorno é wrapped por React.Fragment (no caso do
      jogo da vleha, foi por uma <div>. Isso pq o VDOM só se liga com
      um único JSX. No caso, o elemento com id="root" se ligara apenas
      com um elemento (React.Fragment)


      No tamanho xl (eXtra Large), haveŕá apenas uma coluna (xl="1") e
      ela ocupará os 12 espaços do Grid (size="12")
      <React.Fragment>
        <MDBContainer>
            <MDBRow>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="6">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="7">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="8">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
              <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
            </MDBRow>
          </MDBContainer>
        </React.Fragment>

    );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
