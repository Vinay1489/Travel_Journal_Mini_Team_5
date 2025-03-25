import TravelJournal from "./components/HomePage/TravelJournal";
import NewEntry from "./components/EntryPage/NewEntry";
import JourneyDetails from "./components/JourneyDetail/JourneyDetails";
import JourneyMap from "./components/JourneysMap/JourneyMap";
import PhotoGallery from "./components/GalleryPage/PhotoGallery";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SettingsPage from "./components/AccountSettingsPage/SettingsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignUpPage/CreateAccountPage";

export default function App() {
  return (
    <div>
      <TravelJournal></TravelJournal>
      <NewEntry />
      <JourneyDetails />
      <JourneyMap />
      <PhotoGallery />
      <ProfilePage />
      <SettingsPage />
      <LoginPage />
    </div>
  );
}
