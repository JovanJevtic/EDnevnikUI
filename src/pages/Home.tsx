import { useRef, useEffect } from 'react';

import { IonButton, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import Header from "../components/Header";

import { GoogleMap } from '@capacitor/google-maps';
import { CapacitorGoogleMaps } from '@capacitor/google-maps/dist/typings/implementation';

interface HomeProps {

}

const Home: React.FC<HomeProps> = ({ }) => {
  return (
    <IonPage>
      <Header />
      <IonHeader>
        <IonToolbar>
          <IonSearchbar placeholder="Search for a location" animated={true} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>Home</IonTitle>
      </IonContent>
    </IonPage>
  );
}

export default Home