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
} from "@ionic/react";

interface ContainerProps {}

const CompanyPicker: React.FC<ContainerProps> = () => {
  const [company, setCompany] = useState("");
  const [startTime, setStartTime] = useState("");
  const [checked, setChecked] = useState(false);
  const [confirmTime, setConfirmTime] = useState(false);

  const checkboxList = [
    { val: "Pepperoni", isChecked: true },
    { val: "Sausage", isChecked: false },
    { val: "Mushroom", isChecked: false },
  ];

  console.log({ company, startTime, confirmTime });

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
        ) : (
          <IonList>
            <IonItemDivider>Default Checkbox</IonItemDivider>
            <IonItem>
              <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
              <IonCheckbox
                checked={checked}
                onIonChange={(e) => setChecked(e.detail.checked)}
              />
            </IonItem>

            <IonItemDivider>Disabled Checkbox</IonItemDivider>
            <IonItem>
              <IonCheckbox slot="end" disabled={true} />
            </IonItem>

            <IonItemDivider>Checkbox Colors</IonItemDivider>

            <IonItemDivider>Checkboxes in a List</IonItemDivider>

            {checkboxList.map(({ val, isChecked }, i) => (
              <IonItem key={i}>
                <IonLabel>{val}</IonLabel>
                <IonCheckbox slot="end" value={val} checked={isChecked} />
              </IonItem>
            ))}
          </IonList>
        )}
      </IonGrid>
    </IonContent>
  );
};

export default CompanyPicker;
