import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonButton,
  IonDatetime,
  IonList,
  IonItem,
  IonLabel,
  IonRadio,
  IonListHeader,
  IonRadioGroup,
  IonCard,
  IonCardContent,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from "@ionic/react";
import {
  businessOutline,
  calendarOutline,
  checkboxOutline,
} from "ionicons/icons";
import { meetingRooms, sampleData } from "../data/SampleData";
import image from "../data/card-top-img.png";

interface ContainerProps {}

const CompanyPicker: React.FC<ContainerProps> = () => {
  const [company, setCompany] = useState("");
  const [startTime, setStartTime] = useState("");
  const [room, setRoom] = useState("");
  const [confirmTime, setConfirmTime] = useState(false);

  const filteredRooms = meetingRooms.map((room) => ({
    room: room,
    isBooked: sampleData.filter((booking) => booking.room === room).length
      ? true
      : false,
  }));

  // console.log({ company, startTime, selected });

  const resetData = () => {
    setCompany("");
    setStartTime("");
    setRoom("");
    setConfirmTime(false);
  };

  return (
    <IonContent>
      <IonGrid style={{ height: "100%" }}>
        {!company ? (
          <>
            <IonRow class="ion-align-items-center" style={{ height: "50%" }}>
              <IonCol class="ion-text-center">
                <IonText>
                  <h1>Pick Your Company</h1>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow class="ion-align-items-center">
              <IonCol class="ion-text-center">
                <IonButton
                  size="large"
                  color="danger"
                  onClick={() => setCompany("Coke")}
                >
                  Coke
                </IonButton>
              </IonCol>
              <IonCol class="ion-text-center">
                <IonButton size="large" onClick={() => setCompany("Pepsi")}>
                  Pepsi
                </IonButton>
              </IonCol>
            </IonRow>
          </>
        ) : confirmTime == false ? (
          <>
            <IonRow class="ion-align-items-center" style={{ height: "10%" }}>
              <IonCol class="ion-text-center">
                <IonText>
                  <h1>Pick a start time</h1>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow
              className="ion-align-items-center"
              // style={{ height: "30%" }}
            >
              <IonCol class="ion-text-center">
                <IonDatetime
                  size="cover"
                  presentation="time"
                  minuteValues="0"
                  hourValues={[7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6]}
                  onIonChange={(e: any) => setStartTime(e.detail.value)}
                ></IonDatetime>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="ion-text-center">
                <IonButton onClick={() => setConfirmTime(true)}>
                  Confirm
                </IonButton>
              </IonCol>
            </IonRow>
          </>
        ) : room == "" ? (
          <IonList>
            <IonRadioGroup
              value={room}
              onIonChange={(e) => setRoom(e.detail.value)}
            >
              <IonListHeader>
                <IonLabel>
                  <h1>
                    Pick a room for your meeting at {""}
                    {new Date(startTime).toLocaleTimeString("en", {
                      timeStyle: "short",
                      hour12: true,
                    })}
                  </h1>
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
            <img src={image} width="100%" />
            <IonCardHeader>
              <IonCardTitle>You're booked!</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonIcon slot="start" icon={businessOutline}></IonIcon>
                  <IonLabel>
                    <h2>{company}</h2>
                    <p>Company</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon slot="start" icon={checkboxOutline}></IonIcon>
                  <IonLabel>
                    <h2>{room}</h2>
                    <p>Room</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon slot="start" icon={calendarOutline}></IonIcon>
                  <IonLabel>
                    <h2>
                      {" "}
                      {new Date(startTime).toLocaleTimeString("en", {
                        timeStyle: "short",
                        hour12: true,
                      })}{" "}
                      to{" "}
                      {new Date(
                        new Date(startTime).getTime() + 1 * 60 * 60 * 1000
                      ).toLocaleTimeString("en", {
                        timeStyle: "short",
                        hour12: true,
                      })}
                    </h2>
                    <p>Time</p>
                  </IonLabel>
                </IonItem>
              </IonList>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonButton size="small" onClick={() => resetData()}>
                      Cancel
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        )}
      </IonGrid>
    </IonContent>
  );
};

export default CompanyPicker;
