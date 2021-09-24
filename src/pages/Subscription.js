import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";

function SubscriptionPage() {
  return (
    <Container>
      <Row>
        <Col md="2"></Col>
        <Col className="text-center fw-bold p-2">
          <br />
          Inscris toi au(x) groupe(s) de travail de ton choix.
          <br />
          Pour te désinscrire, contactes un membre de l'équipe informatique, ou
          bien envoies un mail à{" "}
          <a href="mailto:informatique@lacoope.fr">informatique@lacoope.fr</a>
        </Col>
        <Col md="2"></Col>
      </Row>
      <Row>
        <Col className="text-center p-4">
          <Tabs defaultActiveKey="informatique" id="subscriptionTabs">
            <Tab eventKey="informatique" title="Informatique">
              <div className="p-2">
                <iframe
                  title="gInformatique"
                  className="mj-w-res-iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KE7"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
            <Tab eventKey="finance" title="Finance">
              <div className="p-2">
                <iframe
                  title="gFinance"
                  className="mj-w-res-iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KEF"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
            <Tab eventKey="achat" title="Achats">
              <div className="p-2">
                <iframe
                  title="gAchats"
                  class="mj-w-res-iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KGx"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
            <Tab eventKey="comext" title="Comm. externe">
              <div className="p-2">
                <iframe
                  title="gComExt"
                  class="mj-w-res-iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KGz"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
            <Tab eventKey="gouvernance" title="Gouvernance">
              <div className="p-2">
                <iframe
                  title="gGouvernance"
                  class="mj-w-res-iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KGA"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
            <Tab eventKey="implanation" title="Implantation">
              <div className="p-2">
                <iframe
                  title="gImplantation"
                  class="mj-w-res-iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KGC"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
            <Tab eventKey="educpop" title="Educ. populaire">
              <div className="p-2">
                <iframe
                  title="gEducPop"
                  class="mj-w-res-iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KGE"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
            <Tab eventKey="gdm" title="GDM">
              <div className="p-2">
                <iframe
                  title="gGDM"
                  class="mj-w-res-iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://app.mailjet.com/widget/iframe/6iJy/KGF"
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default SubscriptionPage;
