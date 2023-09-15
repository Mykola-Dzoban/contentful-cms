import { createClient } from "contentful";
import { useState } from "react";
import { useEffect } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const resp = await client.getEntries({
        content_type: "projects",
      });
      const projects = resp.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, title, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;