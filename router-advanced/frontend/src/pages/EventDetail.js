import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
      <EventsList></EventsList>
    </>
  );
}

export default EventDetailPage;

async function loadedEvent(id) {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("/events");
}
