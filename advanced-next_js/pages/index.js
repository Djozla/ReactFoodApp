import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOCIPOxKGbMo_LhjiZ3kQquwhDkjuNWNPUg&usqp=CAU",
    address: "Some address 5, 1234 Some City",
    description: "This is a meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOCIPOxKGbMo_LhjiZ3kQquwhDkjuNWNPUg&usqp=CAU",
    address: "Some address 10, 1234 Some City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.reqconst;
  const res = context.res;
  //fetch data from API
  return {
    props: DUMMY_MEETUPS,
  };
}

// export async function getStaticProps() {
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
// }

export default HomePage;
