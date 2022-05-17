import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

import PodcastFormModal from "../components/PodcastFormModal";
import Header from "../components/Header";
import PodcastListItem from "../components/PodcastListItem";
import Constants from "../Constants";

const PodcastLists = () => {
  const [podcastList, setPodcastList] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("ADD");
  const [podcastId, setPodcastId] = useState(0)

  const getPodcastListData = async () => {
    try {
      let response = await axios.get(Constants.API_URL);
      if (response.status === 200) {
        setPodcastList(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPodcastListData();
  }, []);

  return (
    <div>
      <Header headerText={"My Top Podcasts"} />
      <div>
        <Button
          style={{ marginTop: 10, marginLeft: 10, alignSelf: "flex-end" }}
          variant="primary"
          onClick={() => {
            setShowFormModal(true);
            setFormModalType("ADD");
          }}
        >
          + Add Podcasts
        </Button>
        {podcastList.map((item, i) => {
          return <PodcastListItem 
          key={i}
          id={item.id}
          podcastItem={item}
          setFormModalType={setFormModalType}
          setShowFormModal={setShowFormModal}
          setPodcastId={setPodcastId}
          />;
        })}
      </div>
      <PodcastFormModal
        podcastList={podcastList}
        setPodcastList={setPodcastList}
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
        setFormModalType={setFormModalType}
        formModalType={formModalType}
        podcastId={podcastId}
      />
    </div>
  );
};

export default PodcastLists;
