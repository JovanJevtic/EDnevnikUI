import { IonButtons, IonChip, IonHeader, IonIcon, IonLabel, IonTitle, IonToolbar } from "@ionic/react";
import { Link } from "react-router-dom";

import { addCircle, person } from 'ionicons/icons';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle style={{ fontWeight: 'bold' }}>Evento</IonTitle>
        <IonButtons slot="primary">
          <Link style={{ textDecoration: 'none' }} to={`/profile`}>
            <IonChip>
              <IonIcon color='#ffffff' icon={person} />
              <IonLabel>username</IonLabel>
            </IonChip>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={`/payment`}>
            <IonChip style={{ background: '#1f1f1f', border: '1px solid #2dd36f', color: '#2dd36f' }}>
              <IonIcon color='#ffffff' icon={addCircle} />
              <IonLabel>host</IonLabel>
            </IonChip>
          </Link>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header