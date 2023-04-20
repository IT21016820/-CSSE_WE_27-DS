import Banner from "../components/custdb_banner";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import NewProducts from "../components/SellerProduct/ProductForm";
import ProductDetails from "../components/SellerProduct/ProductDetails";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ textDecoration: "none", border: "none", background: "none" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function CustomerDashboard() {
  return (
    <div>
      <Banner />
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">DASHBOARD</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Hello, Tom Cruise. (If Not Tom! Logout) From your account
              dashboard. you can easily check & view your recent orders, manage
              your shipping and billing addresses and edit your password and
              account details.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">ADD NEW PRODUCTS</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>< NewProducts/></Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <CustomToggle eventKey="2">MY PRODUCTS</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body><ProductDetails/></Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <CustomToggle eventKey="3">SETTINGS</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}