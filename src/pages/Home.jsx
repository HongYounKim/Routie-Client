import { MapArea } from "../components/home/MapArea";
import { SeaechBar } from "../components/home/SearchBar";
import { Layout } from "../components/layout/layout";

export const Home = () => {
  return (
    <>
      <Layout type="logo" text="">
        <SeaechBar />
        <MapArea />
      </Layout>
    </>
  );
};
