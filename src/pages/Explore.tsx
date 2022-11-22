import { IonPage } from "@ionic/react";
import Header from "../components/Header";

interface ExploreProps {

}

const Explore: React.FC<ExploreProps> = ({ }) => {
  return (
    <IonPage>
      <Header />
    </IonPage>
  );
}

export default Explore