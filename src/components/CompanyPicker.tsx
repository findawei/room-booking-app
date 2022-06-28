import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonButton,
  IonHeader,
  IonDatetime,
  IonList,
  IonItemDivider,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonRadio,
  IonListHeader,
  IonRadioGroup,
  IonCard,
  IonCardContent,
  IonIcon,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { meetingRooms, sampleData } from "../data/SampleData";

interface ContainerProps {}

const CompanyPicker: React.FC<ContainerProps> = () => {
  const [company, setCompany] = useState("");
  const [startTime, setStartTime] = useState("");
  const [selected, setSelected] = useState("");
  const [confirmTime, setConfirmTime] = useState(false);

  const filteredRooms = meetingRooms.map((room) => ({
    room: room,
    isBooked: sampleData.filter((booking) => booking.room === room).length
      ? true
      : false,
    // company: sampleData.filter((booking) => booking.room === room).company,
  }));

  console.log({ company, startTime, selected });

  return (
    <IonContent>
      <IonGrid>
        {!company ? (
          <IonRow className="ion-align-items-center">
            Pick a company
            <IonCol>
              <IonButton onClick={() => setCompany("COKE")}>Coke</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => setCompany("PEPSI")}>Pepsi</IonButton>
            </IonCol>
          </IonRow>
        ) : confirmTime == false ? (
          <IonRow className="ion-align-items-center">
            <IonCol>
              Pick a start time
              <IonDatetime
                presentation="time"
                minuteValues="0"
                hourValues={[7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6]}
                onIonChange={(e: any) => setStartTime(e.detail.value)}
              ></IonDatetime>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => setConfirmTime(true)}>
                Confirm
              </IonButton>
            </IonCol>
          </IonRow>
        ) : selected == "" ? (
          <IonList>
            <IonRadioGroup
              value={selected}
              onIonChange={(e) => setSelected(e.detail.value)}
            >
              <IonListHeader>
                <IonLabel>
                  Pick a room for your meeting at {""}
                  {new Date(startTime).toLocaleTimeString("en", {
                    timeStyle: "short",
                    hour12: true,
                  })}
                </IonLabel>
              </IonListHeader>
              {filteredRooms.map(({ room, isBooked }, i) => (
                <IonItem key={i}>
                  <IonLabel>{room}</IonLabel>
                  <IonRadio
                    slot="end"
                    value={room}
                    // checked={isBooked}
                    disabled={isBooked}
                    // onIonChange={(room) => onBook(room, startTime)}
                  />
                </IonItem>
              ))}
            </IonRadioGroup>
          </IonList>
        ) : (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                You booked room {selected} from {startTime} for 1 hour
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        )}
      </IonGrid>
    </IonContent>
  );
};

export default CompanyPicker;
