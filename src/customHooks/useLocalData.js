import { useState, useEffect } from "react";
const LOCAL_DATA_URL = "/productos.json";

function itemsByPage(
  limit = 0,
  skip = false,
  page = 0,
  searchParam = "",
  arr,
  searchFor
) {
  let data = [];
  if (searchFor === "product") {
    data = arr.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchParam)
    );
  } else if (searchFor === "category") {
    data = arr.filter(
      (item) => item.category.toLocaleLowerCase() === searchParam
    );
  }
  let itemsToSkip = skip ? limit : 0;
  let start = page * itemsToSkip;
  let end = limit > 0 ? start + limit : data.length();
  console.log(start, end);
  let dataByPage = data.slice(start, end);
  return dataByPage;
}

export default function useLocalData({
  loadOnMount = false,
  params = {
    searchFor: "category",
    q: "",
    limit: 0,
    singleItem: false,
  },
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  async function getData(page = 0) {
    setLoading(true);
    let { searchFor, q, limit, singleItem } = params;
    try {
      const res = await fetch(LOCAL_DATA_URL);
      let json = await res.json();
      if (singleItem) {
        let item = json.find((element) => element.id === parseInt(q));
        setData(item);
      } else {
        let data = itemsByPage(limit, true, page, q, json, searchFor);
        {
          setData((prev) => {
            if (prev) {
              return [...prev, ...data];
            } else return data;
          });
        }
      }
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    if (loadOnMount) getData();
    else return;
  }, []);
  return { loading, data, error, getData };
}
