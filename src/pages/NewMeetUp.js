import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import classes from "./NewMeetUp.module.css";

function NewMeetUpPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-af53c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Add New MeetUp</h2>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
