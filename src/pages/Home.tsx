import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import CompanyPicker from "../components/CompanyPicker";

const Home: React.FC = () => {
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book a Meeting Room 🗓</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CompanyPicker />
      </IonContent>
    </IonPage>
  );
};

export default Home;
