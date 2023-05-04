import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOCIPOxKGbMo_LhjiZ3kQquwhDkjuNWNPUg&usqp=CAU"
      title="This is a meetup"
      address="Some Street 5, Some city"
      description="The meetup description"></MeetupDetail>
  );
}

export default MeetupDetails;
